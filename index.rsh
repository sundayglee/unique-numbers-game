'reach 0.1';

const NUM_OF_PLAYERS = 10;

export const main = Reach.App(() => {
  const H = Participant('House', {
    wager: UInt,
    log: Fun(true, Null),
    currentPlayedIs: Fun(true, UInt),
    kpGoing: Fun([], Bool),
    playingSet: Fun([], Array(UInt, 5)),
    uniqueSelected: Fun([], Object({ addr: Address, selected: UInt, played: Bool })),
    winnersList: Fun([], Array(Object({ addr: Address, selected: UInt, played: Bool, numOfWinners: UInt }), NUM_OF_PLAYERS)),
  });
  const P = ParticipantClass('Player', {
    acceptWager: Fun([UInt], Null),
    log: Fun(true, Null),
    currentPlayedIs: Fun(true, UInt),
    kpGoing: Fun([], Bool),
    uniqueSelected: Fun([], Object({ addr: Address, selected: UInt, played: Bool })),
  });
  deploy();

  H.only(() => {
    const wager = declassify(interact.wager);
    const playingSet = declassify(interact.playingSet());
  });

  H.publish(wager)
  commit();

  H.publish(playingSet);

  /// parallelReduce
  const initialPlayedSet = Array.replicate(NUM_OF_PLAYERS, { addr: H, choice: 0 });

  const [keepGoing, bidsPlaced, finalPlayed] =
    parallelReduce([true, 0, initialPlayedSet])
      .invariant(balance() == wager * bidsPlaced)
      .while(keepGoing)
      .case(
        P,
        (() => ({
          msg: declassify(interact.uniqueSelected()),
          when: declassify(interact.kpGoing()),
        })),
        ((_) => wager),
        ((_) => {

          const player = this;

          const idx = bidsPlaced % NUM_OF_PLAYERS;
          // P.interact.log(v.addr);
          const newResponse = Array.set(finalPlayed, idx, { addr: player, choice: 0 });

          P.only(() => {
            const ci = declassify(interact.currentPlayedIs(player));
          });

          return [true, 1 + bidsPlaced, newResponse];
        }))
      .timeout(relativeTime(20), () => {
        Anybody.publish();
        return [false, bidsPlaced, finalPlayed];
      });

  commit();
  H.only(() => {
    const winnersList = declassify(interact.winnersList());
  });

  H.publish(winnersList);

  const reward = balance() 
  transfer(reward).to(H);
  commit();

  exit();
});

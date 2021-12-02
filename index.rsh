'reach 0.1';

const NUM_OF_PLAYERS = 10;
const UNIQUE_SET_LENGTH = 5;

const CommonInterface = {
  kpGoing: Fun([], Bool),
  uniqueSelected: Fun([], Object({ addr: Address, selected: UInt, played: Bool })),
  currentPlayedIs: Fun(true, UInt),
  log: Fun(true, Null),
};

export const main = Reach.App(() => {
  const H = Participant('House', {
    ...CommonInterface,
    wager: UInt,  
    deadline: UInt,
    playingSet: Fun([], Array(UInt, UNIQUE_SET_LENGTH)),
    winnersList: Fun([], Array(Object({ addr: Address, selected: UInt, played: Bool, numOfWinners: UInt }), NUM_OF_PLAYERS)),
  });
  const P = ParticipantClass('Player', {
    ...CommonInterface,
  });
  deploy();

  H.only(() => {
    const wager = declassify(interact.wager);
    const playingSet = declassify(interact.playingSet());
    const deadline = declassify(interact.deadline);
  });

  H.publish(wager, playingSet, deadline);

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
      .timeout(relativeTime(deadline), () => {
        Anybody.publish();
        return [false, bidsPlaced, finalPlayed];
      });

  commit();
  H.only(() => {
    const winnersList = declassify(interact.winnersList());
  });

  H.publish(winnersList);

  const winnersCount = winnersList.length;

  const reward = balance() / winnersCount
  winnersList.forEach(winner =>
    transfer(reward).to(winner.addr));

  transfer(balance()).to(H)
  commit();

  exit();
});

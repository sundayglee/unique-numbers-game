import { loadStdlib } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib(process.env);


const numOfPlayers = 10;

(async () => {
  const startingBalance = stdlib.parseCurrency(100);

  const accHouse = await stdlib.newTestAccount(startingBalance);

  const accPlayerArray = await Promise.all(
    Array.from({ length: numOfPlayers }, () =>
      stdlib.newTestAccount(startingBalance)
    )
  );

  console.log('Hello, Players!');

  console.log('Launching...');

  const ctcHouse = accHouse.contract(backend);
  const ctcInfo = ctcHouse.getInfo();

  console.log('Starting backends...');

  var randomArray = (length, max) => {
    const arr = [];
    if (length == 0 || max == 0) {
      console.log(null)
    }
    let randomnumbers = new Set, ans;
    while (randomnumbers.size < length) {
      randomnumbers.add(Math.floor(
        Math.random() * max) + 1);
    }
    ans = [...randomnumbers];
    return ans
  }

  var playingSet = randomArray(5, 100);

  console.log('Initial Unique Number Set is: ' + playingSet);

  var playedDeck = [];

  var winnersTotal = 0;
  var played = false;
  const wager = 50;
  await Promise.all([
    backend.House(ctcHouse, {
      ...stdlib.hasRandom,
      ...stdlib.hasConsoleLogger,
      wager: wager,
      deadline: stdlib.connector === 'ALGO' ? 4 : 8,
      roundWinnerWas: (d) => {
        console.log("House Winner");
        played = true;
      },
      kpGoing: () => {
        return !played
      },
      playingSet: () => {
        return playingSet;
      },
      uniqueSelected: playingSet[1],
      winnersList: () => {
        var arr = playedDeck;
        var uniq = [];
        for (var i = 0; i < playedDeck.length; i++) {
          for (var j = 0; j < playedDeck.length; j++) {
            if (arr[i].selected == arr[j].selected && i != j) break;
            else if (j == arr.length - 1) uniq.push(arr[i])
          }
        }

        // Display Winners
        for(var i = 0; i < uniq.length; i++) {
          console.log(`${uniq[i].addr} won by playing: ${uniq[i].selected}`);
        }

        winnersTotal = uniq.length;
        var finalUnique = [];
        if (uniq.length < numOfPlayers) {
          for (var i = 0; i < numOfPlayers; i++) {
            if (i < uniq.length) {
              finalUnique.push(
                {
                  addr: uniq[i].addr,
                  selected: uniq[i].selected,
                  played: uniq[i].played,
                  numOfWinners: uniq.length
                }
              );
            }
            else {
              finalUnique.push(
                {
                  addr: accHouse.getAddress(),
                  selected: 0,
                  played: true,
                  numOfWinners: uniq.length
                }
              );

            }
          }
        } 
        return finalUnique;
      },      
    }),
  ].concat(
    accPlayerArray.map((accPlayer, i) => {
      var p = false;
      const ctcPlayer = accPlayer.contract(backend, ctcInfo);
      const selectedIndex = Math.floor(Math.random() * 5);
      const selectedNumber = playingSet[selectedIndex];
      const plyOnHand = {
        addr: accPlayer.getAddress(),
        selected: selectedNumber,
        played: true,
      }

      return backend.Player(ctcPlayer, {
        ...stdlib.hasRandom,
        ...stdlib.hasConsoleLogger,
        currentPlayedIs: (d) => {
          if (!playedDeck.includes(plyOnHand)) {
            playedDeck.push(plyOnHand)
            console.log(`${plyOnHand.addr} played ${plyOnHand.selected}`);
            return i;
          }
        },
        kpGoing: () => {
          if (!playedDeck.includes(plyOnHand)) {
            return true;
          } else {
            return false;
          }
        },
        uniqueSelected: () => {
          return plyOnHand;
        }
      });
    })
  ));


  const fmt = (x) => stdlib.formatCurrency(x, 2);
  const aBalance = await stdlib.balanceOf(accHouse);
  const aAmt = fmt(aBalance);
  console.log(`House final balance is ${aAmt}`);
  for (let i = 0; i < accPlayerArray.length; ++i) {
    const accPlayer = accPlayerArray[i];
    const bal = await stdlib.balanceOf(accPlayer);
    const amt = fmt(bal);
    console.log(`Final balances of ${accPlayer.getAddress()} is ${amt}`);
  }


  console.log('Goodbye, Players!');
})();

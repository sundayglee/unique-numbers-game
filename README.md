# Unique Numbers Game


This is a game developed as part of Umoja Decentralized Bounty hach. The requirement of the game was this: <b>Players submit a number within a predetermined range. Players who submit a unique number get a percentage of the pot. </b>

This game borrows a lot of concept from the Reach Lang tutorial and some of the workshops to get it running. So a basic concept of reach and Javascript is needed to understand how this game work.

## Prerequisites
1. A basic understanding of the Reach Language
2. A basic undestanding of Javascript Programming Language
3. Must complete at least the basic Reach Language tutorial found at [Reach Docs](https://docs.reach.sh)
4. A Linux Computer preferably Ubuntu or a Windows Computer capable of running WSL2

## Software Requirements
1. Docker
2. Docker Compose
3. (Optional) Docker Desktop - Windows Only
4. Make

## Getting Started

In order to make things easier, we will not go through how to install the softwares required above since this will depending solely on the kind of system you have. If you require any help, the reach documentation website will help you.

Verify all the tools are working correctly by issuing the following commands. You should get no errors in all these commands:

```bash
$ make --version
```

```bash
$ docker --version
```

```bash
$ docker-compose --version
```

Now, to get the game working, first create a working directory as follows:

```bash
$ mkdir -p ~/reach/unique-numbers-game
```

Next, get into the working directory as follows:

```bash
$ cd ~/reach/unique-numbers-game
```
All the next command will assume that we will be wokring in the directory `~/reach/unique-numbers-game`.


Now download the latest version of Reach as follows:

```bash
$ curl https://docs.reach.sh/reach -o ../reach ; chmod +x ../reach
```

You’ll know that the download worked if you can run without any error:
```bash
  $ ../reach version
```
The recommended next step, although optional, is to set up your environment with:
```bash
  $ ../reach config
```

This will make subsequent uses of the reach script more convenient by tuning its runtime behavior to your specific needs and only downloading the dependencies you’ll actually use.

`reach config` sets overridable defaults for all Reach projects on your development machine and not just the current one, so feel free to skip this step if you’d prefer not to make your choices global.

Even though, we will walk you through the working of the game below, we need to give you a taste of how the game works by cloning the git repository as follows:

Since Reach is Dockerized, when you first use it, you’ll need to download the images it uses. This will happen automatically when you first use it, but you can do it manually now by running

```bash
  $ ../reach update
```
You’ll know that everything is in order if you can run

```bash
  $ ../reach compile --help
```

## Running the Game

To run the game, first clone the repository using the command below:

```bash
  $ git clone https://github.com/sundayglee/unique-numbers-game.git .
```

Then run the game using the following command:
```bash
  $ ../reach run
```

If you didn't run the `reach config` commands, then the best way to run the commands is using the following command:

```bash
  $ REACH_CONNECTOR_MODE=ALGO ../reach run
```
Note that we are using Algorand connector above since the Bounty required the game to be developed in algorand, but you can use any other network supported by reach to run the application.

If everything was set up correctly, you will see messages such as the following in your terminal:

```
xxx@xxx-xxx:~/reach/unique-number-game$ REACH_CONNECTOR_MODE=ALGO ../reach run
Verifying knowledge assertions
Verifying for generic connector
  Verifying when ALL participants are honest
  Verifying when NO participants are honest
  Verifying when ONLY "House" is honest
  Verifying when ONLY "Player" is honest
Checked 130 theorems; No failures!
[+] Building 0.3s (7/7) FINISHED                                                 
 => [internal] load build definition from Dockerfile                        0.0s
 => => transferring dockerfile: 38B                                         0.0s
 => [internal] load .dockerignore                                           0.0s
 => => transferring context: 34B                                            0.0s
 => [internal] load metadata for docker.io/reachsh/runner:0.1.7             0.0s
 => [internal] load build context                                           0.0s
 => => transferring context: 81.66kB                                        0.0s
 => CACHED [1/2] FROM docker.io/reachsh/runner:0.1.7                        0.0s
 => [2/2] COPY . /app                                                       0.1s
 => exporting to image                                                      0.1s
 => => exporting layers                                                     0.1s
 => => writing image sha256:eb57f2dd3017f1269a08a5114d5380fdf33bee13364cb2  0.0s
 => => naming to docker.io/reachsh/reach-app-unique-number-game:0.1.7       0.0s

> @reach-sh/unique-number-game@ index /app
> node --experimental-modules --unhandled-rejections=strict index.mjs

Are you House?
 
```

Since the game has two modes: A House and Players(Hardcoded to 2 in this game), then you will need to run the game in 3 separate terminals, one as a house, and 2 terminals as a Player.

Follow the prompt one by one to play the game!

Example, the answers for <b>House</b> terminal will be the following:
```
Are you House?
y
Starting Unique Numbers Game! as House
Would you like to create an account? (only possible on devnet)
y
Your balance is 1000
The wager amount is: 50
[ 52, 94, 17, 50, 77 ]
The contract is deployed as = 670
```

At this point, open another terminal and run the following commands as a Player number 1:
```
Are you House?
n
Starting Unique Number Game! as Player
Would you like to create an account? (only possible on devnet)
y
Please paste the contract information:
670
Your balance is 1000
What unique number did you select?
17
Do you accept the wager of 50?
y
Your balance is now 974.9749
$

```

No changes will be seen in the House's terminal yet.
Now open another terminal and run the following command as Player 2:
```
Are you House?
n
Starting Unique Number Game! as Player
Would you like to create an account? (only possible on devnet)
y
Please paste the contract information:
596
Your balance is 1000
What unique number did you select?
9
Do you accept the wager of 50?
y
Your balance is now 1000
$
```

Go back to the House terminal, and you will see the following output:

```
0x2499e0af103025aff7c03f6df90348706d7ac9ac054bbabc287c267c9c526e6d won by playing: 17
0x52ee542b552a79134d0c7aa6c427c19c0657eed90968de5a1db1fa331482da6b won by playing: 77
Your balance is now 1024.969
$
```

Congratulation! You have just played the Unique Number Game in a Blockchain!



# Detailed walkthrough as a Workshop
Now you have got the taste of how the game is being played, lets now go through the steps in creating your own game using the same logic above.

First of all create a new working directory, we will call it `workshop-unique-numbers-game` and `cd` to it using the following:

```bash
$ mkdir -p ~/reach/workshop-unique-numbers-game && cd ~/reach/workshop-unique-numbers-game
```

If you followed the getting started above, it is assumed that you have Reach installed in your `~/reach` folder. Test it by issuing the following command:

```bash
$ ../reach version
```
You will get a response like the following:
```bash
reach 0.1.7
```
You might get a different reach version depending on did you installed Reach. At the time of writing this documentaiton, the reach compiler was verion `0.1.7` as seen above.

Now, start by initializing/bootstraping your Reach program using the following command:

```bash
$ ../reach init

Writing index.rsh...
Writing index.mjs...
Done.
```
As the output of command above shows, `reach init` has create `index.rsh` file which is the file where our backend code will be written, and `index.mjs` file where our frontend code will be written. If you open these files, you will see some skeleton code that Reach Init has created for us.

Before we proceed lets run our program to check whether everything is wired up correctly:

```bash
$ REACH_CONNECTOR_MODE=ALGO ../reach run
```

The output will end with these:
```
Hello, Alice and Bob!
Launching...
Starting backends...
Goodbye, Alice and Bob!
```

Good job! You have just created your first Reach program!

## Problem Analysis
The first step of designing any program is to perform problem analysis and determine what we have to do to successfully finish the problem.

The problem analysis depends on the objective of our game which is: <b>Players submit a number within a predetermined range. Players who submit a unique number get a percentage of the pot. </b>

Now try to write down your own answers in your Reach backend program(`index.rsh`) using comments block using the following guiding questions:

```

Who is involved in this application?

What information do they know at the start of the program?

What information are they going to discover and use in the program?

What funds change ownership during the application and how?

```

**Stop!**
Write down the problem analysis of this program as a comment.

Compare those answers with our answers below:
```
This program involves two roles: a House who deploys the game and the Players who chooses unique numbers from a predifined list of number.

The House knows the set of predefined list and the wage amount at the start of the game as well as deadline for when a Player takes too long to respond.

The Player do not know anything when the application begins.
 
The Player learn the set of unique number, deadline and the wage amount during the program execution.

Each player chooses a unique number from the set of predefined list of numbers.

The house check the Players who chooses a unique number from predefined list and publishes them as winners, then distribute the total balance in the contract among the winners
```

Don't forget the starting `/*` and ending `*/` as these marks the section of code inside them as comments in Reach Language

It is completely okay if your answers differ from ours. If you're confident that your answers are correct you can continue with them through this workshop.


## Data Definition

Now that we know what the problem is, we can go ahead and decide what data structure our game will use for the answers we provided in the previous section as well as what interact interface function the game will use.

```
What functions/ values does House need to start and end the game?

What functions/ values do Players need to play the game?
```

You should look back at your problem analysis to do this step. Whenever a participant starts off knowing something, then it is a field in the interact object. If they learn something, then it will be an argument to a function. If they provide something later, then it will be the result of a function.

You should write your answers in your Reach file (`index.rsh`) as the participant interact interface for each of the participants.

**Stop**! Write down the data definitions for this program as definitions.

It's time to see our answers!

```javascript

const CommonInterface = {
    informTimeout: Fun([], Null),
    uniqueSelected: Fun(
        [],
        Object({ addr: Address, selected: UInt, played: Bool })
    ),
    log: Fun(true, Null),
    winnersList: Fun(
        [],
        Array(
        Object({
            addr: Address,
            selected: UInt,
            played: Bool,
            numOfWinners: UInt,
        }),
        NUM_OF_PLAYERS
        )
    ),
};
    
const House = Participant("House", {
    ...CommonInterface
    wager: UInt,
    deadline: UInt,
    playingSet: Fun([], Array(UInt, PREDEFINED_SET_LENGTH)),
    recordCurrentPlayer: Fun(true, Bool)
});
const Player = ParticipantClass("Player", {
    ...CommonInterface
    acceptWager: Fun([UInt], Null),
});
```

We are going to represent the `wager` as `UInt`, the `deadline` as `UInt`, the predefine set of numbers named `playingSet` as a Function `Fun([], Array(UInt, PREDEFINED_SET_LENGTH))` that takes nothing and return an array of predefined set of numbers.

Note that we have added `CommonInterface` data type to help us to group other data type that are common for the two roles. These are helper function `informTimeout: Fun([], Null),` which is used to inform the player that a timeout has occured; a function  `uniqueSelected: Fun([], Object({ addr: Address, selected: UInt, played: Bool }) ),` that takes no argument but return an object with address of the player, the selected unique number and whether the player has already played or not; The function for logging data `log: Fun(true, Null)`; and lastly a function for showing winners list `    winnersList: Fun(
        [],
        Array(
        Object({
            addr: Address,
            selected: UInt,
            played: Bool,
            numOfWinners: UInt,
        }),
        NUM_OF_PLAYERS
        )
    )` 
that takes nothing but return an array of object of length `NUM_OF_PLAYERS` that contain address of each player, the number the player selected, whether the player with that address has played or not, as well as number of winners.


## Communication Construction

Now we can design the structure of communication of our game. Try to write this part considering how the process of House creating the list of predefined list, the wager amount and the players will use to select their unique number from the set.

**Stop**
Write down the communication pattern for this program as comments.

Here's what we wrote

> 1. The House create a set of random generated numbers, define a wager and deadline and deploy the game.
> 2. The House wait for all the players to select their unique numbers:
>    1. Each player are given chance to select a unique number from the set of predefined numbers.
>    2. The House keep track of who the player is, and the unique number they selected.
> 3. Each decides who the winners of the game are depending on what number they did choose.
> 4. The total wager is distributed among the players as well as the House.

The phrase "As long as" indicates a loop going on in the game. Considering each player can choose only one unique number from the predefined set, the House record these information for winners calculation later.

**Stop!**
Write down the communication pattern for this program as code.

Main logic of our contract should now look like:

```javascript
var i = 0;
invariant(balance() == wager);
while (i < NUM_OF_PLAYERS) {
    commit();

    Player.only(() => {
        const uniqueSelected = declassify(interact.uniqueSelected());
    });

    Player.publish(uniqueSelected);

    House.only(() => {
        const advance = declassify(interact.recordCurrentPlayer(uniqueSelected));
    });
    commit();
    House.publish(advance);

    if (advance) {
        i = i + 1;
        continue;
    } else {
        i = i;
        continue;
    }
}

commit();

each([House, Player], () => {
    const winnersList = declassify(interact.winnersList());
});

Anybody.publish(winnersList);

const reward = balance() / NUM_OF_PLAYERS;

winnersList.forEach(winner => {
    if (winner.addr != winnersList[NUM_OF_PLAYERS - 1].addr) {
        transfer(reward).to(winner.addr);
    }
});

transfer(balance()).to(House);

commit();

exit();

```
In the code, we first ensure each player get a chance to choose a unique number from the predefined set. The House record each player unique number selected and ensures that, a player gets only one move but restricting advancement of the loop.

After all the players have each choosen their unique number from the predefined set of numbers, the winners is calculated using the frontend and result published to the blockchain. 

Note that, the result of winners from the front end is a fixed array that is truncated by the House's addresses due to limitation of Reach Language that require all array lenght to be known at compile time. We opted to truncate the winners list with the House's addresses so to ensure only the winners will get the percentage of the pot at the end.

The last part of the logic, is that, the balance is divided among the winners, and then transfered to their accounts including the House's account. Of course in real life application, one should create a better logic of distributing the pot. Since our game is simple, then we haven't implimented it yet.


## Assertion Insertion

To simplify the code, no assertion of the contract is implimented, aside from the invariant definition itself, but one should consider ensuring that, each player actually chooses a unique number from the predefined list only.



## Possible Additions

One could better improve the game by defining the unique number generation in the backend as well as distribute the fund equally among the winners. 

Also, the unique number each player chooses during progression of the game is not hidden, hence a malicious player could snoop in the blockchain and see what other players have choosen and play another unique number. This could be fixed by using `makeCommitment` of Reach were the players would submit hashes instead of clear text numbers and after every player has choosen their unique numbers, then each one will show their unique choosen number before the winners selection.

But since the Bounty required the player to only choose unique number from predefined number list and distribute the pot among the winners with no specification of how the distribution will be, our implimentation was pretty much limited.



## Interaction Interface

Now we have a complete contract we can write the frontend. 

As started above, the frontend should be able to produce the following data for the backend:

1. The House should create a predefined list of numbers. This is implimented on frontend using Javascript since its much more simpler than creating in the backend with current knowledge of Reach Language.
2. Each player should be able to choose a unique number from the predefined list 
3. The House should keep track of who play and what number they played as well as ensuring no players will play the game twice.
4. The House should be able to determine who the winners are and send the data to the backend.


***Stop!***
Insert interact calls to the [frontend](https://docs.reach.sh/ref-model.html#(tech._frontend)) into our frontend file (`index.mjs`) 

Since the game require interaction of the Players and House, we have used the fantastic Reach support library `ask.mjs` to impliment an interactive interface.


```Javascript

import { loadStdlib } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
import { ask, yesno, done } from '@reach-sh/stdlib/ask.mjs';
const stdlib = loadStdlib(process.env);

const NUM_OF_PLAYERS = 2;
const PREDEFINED_SET_LENGTH = 5;

(async () => {
  const isHouse = await ask(
    `Are you House?`,
    yesno
  );
  const who = isHouse ? 'House' : 'Player';

  console.log(`Starting Unique Numbers Game! as ${who}`);

  let acc = null;
  const createAcc = await ask(
    `Would you like to create an account? (only possible on devnet)`,
    yesno
  );
  if (createAcc) {
    acc = await stdlib.newTestAccount(stdlib.parseCurrency(1000));
  } else {
    const secret = await ask(
      `What is your account secret?`,
      (x => x)
    );
    acc = await stdlib.newAccountFromSecret(secret);
  }

  let ctc = null;
  if (isHouse) {
    ctc = acc.contract(backend);
    ctc.getInfo().then((info) => {
      console.log(`The contract is deployed as = ${JSON.stringify(info)}`);
    });
  } else {
    const info = await ask(
      `Please paste the contract information:`,
      JSON.parse
    );
    ctc = acc.contract(backend, info);
  }

  const fmt = (x) => stdlib.formatCurrency(x, 4);
  const getBalance = async () => fmt(await stdlib.balanceOf(acc));

  const before = await getBalance();
  console.log(`Your balance is ${before}`);

  const interact = { ...stdlib.hasRandom };

  interact.informTimeout = () => {
    console.log(`There was a timeout.`);
    process.exit(1);
  };

  if (isHouse) {
    const wager = 50;
    interact.wager = stdlib.parseCurrency(wager);
    console.log(`The wager amount is: ${wager}`)
    interact.deadline = { ETH: 100, ALGO: 100, CFX: 1000 }[stdlib.connector];

    interact.playingSet = () => {
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

      var playingSet = randomArray(PREDEFINED_SET_LENGTH, 100);
      console.log(playingSet);
      return playingSet;
    };


  } else {
    interact.acceptWager = async (amt) => {
      const accepted = await ask(
        `Do you accept the wager of ${fmt(amt)}?`,
        yesno
      );
      if (!accepted) {
        process.exit(0);
      }
    };
  }


  // Game Logic Starts here

  let playedDeck = [];
  var winnersTotal = 0;

  if (!isHouse) {

    const selectedNumber = await ask(
      `What unique number did you select?`,
      (x => x)
    );

    const plyOnHand = {
      addr: acc.getAddress(),
      selected: selectedNumber,
      played: true,
    };

    interact.uniqueSelected = () => {
      return plyOnHand;
    }
  } else {
    interact.recordCurrentPlayer = (d) => {
      var alreadyPlayed = false;
      if (playedDeck.length > 0) {
        for (let i = 0; i < playedDeck.length; i++) {
          if (playedDeck[i].addr == d.addr) {
            alreadyPlayed = true;
            break;
          } else {
            alreadyPlayed = false;
          }
        }
      }
      let adv = false;
      if (!alreadyPlayed) {
        playedDeck.push(d);
        adv = true;
      } else {
        adv = false;
      }
      return adv;
    }
  }
  
  interact.winnersList = () => {
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
    if (uniq.length <= NUM_OF_PLAYERS) {
      for (var i = 0; i < NUM_OF_PLAYERS; i++) {
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
              addr: acc.getAddress(),
              selected: 0,
              played: true,
              numOfWinners: uniq.length
            }
          );
        }
      }
    } 
    return finalUnique;
  };  

  const part = isHouse ? ctc.p.House : ctc.p.Player;
  await part(interact);

  const after = await getBalance();
  console.log(`Your balance is now ${after}`);

  done();
})();

```

Provided that you know how Javascript works, you can easily understand the logic of the game.


## Discussion

Congratulation for implimenting your own unique numbers game in reach.

If you found this workshop rewarding, please let us know on [the Discord community](https://discord.gg/AZsgcXu)!


See you around 😉

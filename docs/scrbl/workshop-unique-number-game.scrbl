#lang scribble/manual
@(require "lib.rkt")

@title[#:version reach-vers #:tag "workshop-unique-number-game"]{Workshop: Unique Number Game}
@author[(author+email "Godfrey Laswai" "gelaswai@gmail.com")]

In this workshop, we'll design an application that allows a House
to create a game where players may choose unique number from a 
set of pre-defined unique number at the beginning of the game.
The House publishes the unique number set, deadline and the wager amount 
that is required to play the game. After the deadline expires, 
players who choose unique number will win the game and the 
total wager is divided among the winners.

This workshop utilizes @tech{participant class}es to represent Players, which allows us to handle multiple participants in a generic way.

@(workshop-deps)
@(workshop-init "workshop-unique-number-game")

@(drstep-pr "workshop-unique-number-game")

First, we should think over the details of the application and
answer some questions to help reason about the implementation of
the program.

You should write the answer to the following questions in your
Reach program (@tt{index.rsh}) using a comment.
@reachin{/* Remember comments are written like this. */}

@itemlist[
  @item{Who is involved in this application?}
  @item{What information do they know at the start of the program?}
  @item{What information are they going to discover and use
  in the program?}
  @item{What funds change ownership during the application and how?}
]

@(drstep-pr-stop)

Let's see how your answers compare to ours:

@itemlist[
  @item{This program involves two parties: a House which deploys the
    game and the Players who chooses unique numbers.}
  @item{The House knows the set of unique numbers and the wage amount at the
  start of the game.}
  @item{The Player do not know anything of the set of unique number, deadline or wage amount when the application begins.}
  @item{The Player learn the set of unique number, deadline and the wage amount during the program execution.}
  @item{The House learn of set of unique number and the wage amount during the
  program execution.}
  @item{Each player chooses a unique number from the set of unique number and add funds to the balance during execution of the program.}
  @item{The house check the players who chooses a unique number and publishes them as winners, then distribute the total balance among the winners}
]

It's okay if some of your answers differ from ours!

@(drstep-dd "workshop-unique-number-game")

After problem analysis, we need to decide how we will represent the information
in the program:
@itemlist[
  @item{What data type will represent the set of unique numbers set by the House?}
  @item{What data type will represent the wager set by the House?}
  @item{What data type will represent deadline?}
]
@(drstep-dd-datatype-mn)

Now that we've decided what data types to use, we need to determine how the programs will obtain this information. We need to outline the @tech{participant interact interface} for each participant.

@itemlist[
  @item{What @tech{participant interact interface} will House use?}
  @item{What @tech{participant interact interface} will Player use?}
]

Revisit the problem analysis section when completing this section. Whenever
a participant starts off with some knowledge, that will be a field in the
@reachin{interact} object.
If they learn something, then it will be an argument to a function.
If they provide something later, then it will be the result of a function.

You should write your answers in your Reach file (@tt{index.rsh}) as the @tech{participant interact interface} for each of the participants.





@(drstep-dd-stop)

Let's compare your answers with ours:

@itemlist[
  @item{The deadline will be represented with a @reachin{UInt}, as it is
  a relative time delta signifying a change in block numbers.}
  @item{The @tt{wager} will be represented with a @reachin{UInt}}
  @item{The set of unique number will be represented by a function @reachin{playingSet: Fun([], Array(UInt, UNIQUE_SET_LENGTH))}}
]

Our @tech{participant interact interface}, with the addition of some handy logging functions, looks like this so far:

@reachex["workshop-unique-number-game/index.rsh"
         'only 3 23 "  // ..."]


At this point, you can modify your JavaScript file (@tt{index.mjs}) to contain definitions of these values, although you may want to use placeholders for the actual values.
When you're writing a Reach program, especially in the early phases, you should have these two files open side-by-side and update them in tandem as you're deciding the @tech{participant interact interface}.

@(drstep-cc "workshop-unique-number-game")

A fundamental aspect of a decentralized application is the pattern of communication
and transfer among the participants. We should write down this structure as comments
in our program to serve as an outline and guide us in implementation.
For example, for the @seclink["tut"]{tutorial} version of @emph{Rock, Paper, Scissors!}, we might write:
@reach{
 // Alice publishes the wager and pays it
 // Bob accepts the wager and pays it
 // While there's a draw
 //  Alice publishes her hand secretly
 //  Bob publishes his hand publicly
 //  Alice reveals her hand
 //  The consensus ensures it's the same hand as before
 // The consensus pays out the wager
}

You should do this now, in your Reach program (@tt{index.rsh}).

@(drstep-cc-stop1)

Here's what we wrote for our outline:
@reach{
  // 1. The House publishes the initial unique number set, wager  and deadline
  // 2. While the deadline has yet to be reached:
  //     2a. Allow a Player to choose a unique number from the set
  //     2b. Keep track of the players and the number they choose
  // 3. Divide the balance among the players who choose unique numbers (These are winners)
  // 4. Transfer the balance to the winners
}

Now, this outline needs to be converted to a real program.

@(drstep-cc-stop2)

The body of your application should look something like this:

@reach{
  // 1. The House publishes the unique number set, wager and deadline
  H.publish(wager, playingSet, deadline);

    const [keepGoing, bidsPlaced, finalPlayed] =
    parallelReduce([true, 0, initialPlayedSet])
    // 2. While the deadline has yet to be reached
      .invariant(balance() == wager * bidsPlaced)
      .while(keepGoing)
      .case(
        P,
        // 2a. Allow a Player to choose a number from the set and pay the wager
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
            // 2b. Keep track of player who just played
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

  // 3. Divide the balance among the players who choose unique numbers (These are winners) ====> TODO not implimented
  const reward = balance() 

  // 4. Transfer the balance to the winners  ====> TODO not implimented
  transfer(reward).to(H);
  commit();

  exit();
}

We use @reachin{parallelReduce} to allow Players to select unique number and pay wager until
the deadline passes and accumulate all the players and their chosen number. We maintain the invariant
that the balance must be equal to the number of bidsPlaced multiplied by the
wager.

@(drstep-ai "workshop-unique-number-game")

This program doesn't have many interesting properties to prove
as assertions, beyond the @tech{token linearity property}. The
only property of interest is the @reachin{parallelReduce} invariant
which states that the balance must be equal to the number of bids placed
sold multiplied by the wager amount.


@(drstep-ii "workshop-unique-number-game")

Next, we need to insert the appropriate calls to @reachin{interact}.
In this case, our program is very simple and we expect you'll do a great job without further discussion.

@(drstep-ii-stop)

Let's look at our whole program now:

@reachex["workshop-unique-number-game/index.rsh"
  ]

@(drstep-de "workshop-unique-number-game")

Next, it is time to test our program. As usual, we'll present a completely
automated test deployment, rather than an interactive one.

The program is fairly straightfoward to test. We just create test accounts for
the House and any number of Players. 

@(drstep-de-stop)

Here's the JavaScript @tech{frontend} we wrote:

@reachex["workshop-unique-number-game/index.mjs"
         ]

Let's see what it looks like when we run the program. Note that the addresses will be different since these are test accounts:

@verbatim{
$ ../reach run
Hello, Players!
Launching...
Starting backends...
Initial Unique Number Set is: 71,84,90,14,69
0xd7fd7761528a0e68a15c90e4d7c2e45bf75caf174a3e06927000fa44a843746b played 84
0x3db8f169eb391ded2f5ee20f7e74965280f6567ab979f11f68012787bd32997f played 84
0x5beb28755734f1503419964da3ef9a939f39ed62ac65cef7593d5cd4b45b1b60 played 90
0xa2db39a5cff5aae0a45201d67dbe21f90e8486141cdd4a16aebb0d8516b13b11 played 90
0xed82cd50d59313405f492d1c028e8768984b9c987a6ca513b8acef69a69cfa01 played 84
0x7af92acea653b161da69cb332a5caa03df3eb78b0f2b74d896a24956349b5b9e played 90
0x3c68876b557386dc2a4afc03257509c9ca147d1b1dc5e41a68655c24448bdcda played 84
0xd72a00f3326fa4956ad066fd666b0f610a838331e7971e1298bb05c5bfbae7db played 84
0x5331983c533048de7c28998a5ba3f7d594b51780f4dd1a028226d00ac91b1b30 played 69
0x9384d87082a7aabefc077172db1db28dfa68249d2f56f3153149200a950c940f played 84
House final balance is 99.99
Final balances of 0x5beb28755734f1503419964da3ef9a939f39ed62ac65cef7593d5cd4b45b1b60 is 100
Final balances of 0x3c68876b557386dc2a4afc03257509c9ca147d1b1dc5e41a68655c24448bdcda is 100
Final balances of 0x3db8f169eb391ded2f5ee20f7e74965280f6567ab979f11f68012787bd32997f is 100
Final balances of 0xd7fd7761528a0e68a15c90e4d7c2e45bf75caf174a3e06927000fa44a843746b is 99.99
Final balances of 0x9384d87082a7aabefc077172db1db28dfa68249d2f56f3153149200a950c940f is 100
Final balances of 0xed82cd50d59313405f492d1c028e8768984b9c987a6ca513b8acef69a69cfa01 is 99.99
Final balances of 0xa2db39a5cff5aae0a45201d67dbe21f90e8486141cdd4a16aebb0d8516b13b11 is 100
Final balances of 0x5331983c533048de7c28998a5ba3f7d594b51780f4dd1a028226d00ac91b1b30 is 100
Final balances of 0xd72a00f3326fa4956ad066fd666b0f610a838331e7971e1298bb05c5bfbae7db is 100
Final balances of 0x7af92acea653b161da69cb332a5caa03df3eb78b0f2b74d896a24956349b5b9e is 100
Goodbye, Players!
}

@section[#:tag "workshop-unique-number-game"]{Discussion and Next Steps}

Great job!

If you found this workshop rewarding, please let us know on @(the-community-link)!

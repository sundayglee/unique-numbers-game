#lang scribble/manual
@(require "lib.rkt")

@title[#:version reach-vers #:tag "workshop-unique-number-game"]{Workshop: Unique Number Game}
@author[(author+email "Godfrey Laswai" "gelaswai@gmail.com")]

In this workshop, we'll design an application that allows a House
to create a game where players may choose unique number from a 
set of pre-defined unique number at the beginning of the game.
The House publishes the unique number set and the wager amount 
that is required to play the game. After the timeout expires, 
the players who choose unique number will win the game and the 
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
  @item{The Player do not know anything of the set of unique number or wage amount when the application begins.}
  @item{The Player learn the set of unique number and the wage amount during the program execution.}
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
  @item{What data type will represent the Player's will to play the game?}
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


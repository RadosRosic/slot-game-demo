# Setup

## Git

Clone the repository.

> git clone https://github.com/RadosRosic/slot-game-demo

## Dependencies

Install the needed dependencies.

> npm install

# Commands

## Random roll

To start the machine run the following command.

> node ace play

This will generate 3x5 array of symbols.

## Preset screens

The command takes an optional flag **--screen** followed by a number.

For example:

> node ace play --screen 2

This will start the game with a predefined screen.

You can also use the short syntax

> node ace play -s 2

Available screens are located in

> providers/MockResultProvider/mock-results.ts

## Enter Screen Manually

You can manually select symbols for each position. You must either enter all 15 arguments, or none at all.

> node ace play 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14

The above command coresponds to the following matrix:

> 0 3 6 9 12
>
> 1 4 7 10 13
>
> 2 5 8 11 14

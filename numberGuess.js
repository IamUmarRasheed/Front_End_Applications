#! /usr/bin/env node
import chalkAnimation from "chalk-animation";
import inquirer from "inquirer";
import chalk from "chalk";
let playground = false;
let validate = (input) => {
    if (isNaN(input)) {
        return "plz enter a number";
    }
    else if (input > 10) {
        return "plz eneter a number between 1 and 10";
    }
    else {
        return true;
    }
};
let Game = 0;
let score = 0;
do {
    const sleep = () => {
        return new Promise((res) => {
            setTimeout(res, 2000);
        });
    };
    async function welcome() {
        let animate = chalkAnimation.rainbow("hello welcome to number guess game");
        await sleep();
        animate.stop();
    }
    await welcome();
    const randomno = Math.floor(Math.random() * 10 + 1);
    let round = 5;
    Game += 1;
    console.log(`Game attampts:${Game}`);
    do {
        round -= 1;
        console.log(`You have ${round} round left `);
        let userinput = await inquirer.prompt({
            name: "guess",
            type: "input",
            message: "plz enter your guess",
            validate: validate,
        });
        let userguess = Number(userinput.guess);
        if (userguess > randomno) {
            console.log(chalk.bold.red("Your guess are high then computer number"));
        }
        else if (userguess < randomno) {
            console.log(chalk.bold.red("Your guess are lower then computer number"));
        }
        else {
            score += 2;
            console.log(chalk.bold.greenBright(`Your guess is right! Your score is ${score} `));
            break;
        }
    } while (round > 1);
    let playagain = await inquirer.prompt([
        {
            name: "again",
            type: "confirm",
            message: "do you want yo play again",
        },
    ]);
    playground = playagain.again;
} while (playground);
console.log(chalk.bgGreen("Game Over Thank you"));

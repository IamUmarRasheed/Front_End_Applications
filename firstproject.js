#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 2000);
    });
};
async function welcome() {
    let animate = chalkAnimation.rainbow("Hello guys wellcome to my calculator");
    await sleep();
    animate.stop();
    console.log(chalk.yellow(`
     _____________________
    |  _________________  |
    | | JO           0. | |
    | |_________________| |
    |  ___ ___ ___   ___  |
    | | 7 | 8 | 9 | | + | |
    | |___|___|___| |___| |
    | | 4 | 5 | 6 | | - | |
    | |___|___|___| |___| |
    | | 1 | 2 | 3 | | x | |
    | |___|___|___| |___| |
    | | . | 0 | = | | / | |
    | |___|___|___| |___| |
    |_____________________|
    `));
}
await welcome();
function validateuser(input) {
    if (isNaN(input)) {
        return "please eneter a valid number";
    }
    else {
        return true;
    }
}
async function getuserinput() {
    const userinput = await inquirer.prompt([
        {
            type: "input",
            name: "Firstnumber",
            message: "Enter your first number ",
            validate: validateuser,
        },
        {
            type: "list",
            choices: ["+", "-", "/", "*", "%"],
            name: "operator",
            message: "Enter your operater",
        },
        {
            type: "input",
            name: "Secondnumber",
            message: "Enter your Second number ",
            validate: validateuser,
        },
    ]);
    const Firstnumber = Number(userinput.Firstnumber);
    const Secondnumber = Number(userinput.Secondnumber);
    switch (userinput.operator) {
        case "+":
            console.log(chalk.red(`${Firstnumber}+${Secondnumber}=${(Firstnumber + Secondnumber).toFixed(2)}`));
            break;
        case "-":
            console.log(chalk.red(`${Firstnumber}-${Secondnumber}=${(Firstnumber - Secondnumber).toFixed(2)}`));
            break;
        case "/":
            console.log(chalk.red(`${Firstnumber}/${Secondnumber}=${(Firstnumber / Secondnumber).toFixed(2)}`));
            break;
        case "*":
            console.log(chalk.red(`${Firstnumber}*${Secondnumber}=${(Firstnumber * Secondnumber).toFixed(2)}`));
            break;
        case "%":
            console.log(chalk.red(`${Firstnumber}%${Secondnumber}=${(Firstnumber % Secondnumber).toFixed(2)}`));
            break;
        default:
            break;
    }
}
let confirm = async () => {
    do {
        await getuserinput();
        var done = await inquirer.prompt({
            type: "input",
            name: "restart",
            message: "Do You want to continue? press y/n",
        });
    } while (done.restart === "y" ||
        done.restart === "Y" ||
        done.restart === "yes" ||
        done.restart === "Yes");
};
confirm();

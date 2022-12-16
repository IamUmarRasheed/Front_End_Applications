#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import figlet from "figlet";
const randomamt = Math.floor(Math.random() * 500000 + 1);
let playaagian = true;
while (playaagian) {
    const sleep = () => {
        return new Promise((res) => {
            setTimeout(res, 2000);
        });
    };
    async function welcome() {
        let animate = chalkAnimation.rainbow("Hello welcome to CLI Atm System");
        await sleep();
        animate.stop();
    }
    await welcome();
    {
        console.log(figlet.textSync("ATM", {
            font: "Ghost",
            horizontalLayout: "default",
            verticalLayout: "default",
            width: 80,
            whitespaceBreak: true,
        }));
        const input = await inquirer.prompt([
            {
                name: "userid",
                type: "string",
                message: "Plz Enter you Atm ID ",
            },
            {
                name: "userpin",
                type: "password",
                message: "Plz Enter you pin",
                when(answers) {
                    return answers.userid;
                },
            },
            {
                name: "accounttyp",
                type: "list",
                choices: ["Current account", "Saving account"],
                message: "What is your account type",
                when(answers) {
                    return answers.userpin;
                },
            },
            {
                name: "options",
                type: "list",
                choices: ["Fast cash", "Balance inquiry", "Cash withdrawal"],
                message: "What is operation do you want to perform ",
                when(answers) {
                    return answers.accounttyp;
                },
            },
            {
                name: "cashamount",
                type: "list",
                choices: [500, 1000, 5000, 10000],
                message: "Chocie your amount",
                when(answers) {
                    return answers.options === "Fast cash";
                },
            },
            {
                name: "cashwid",
                type: "number",
                message: "Enter your amount",
                when(answers) {
                    return answers.options === "Cash withdrawal";
                },
            },
        ]);
        const { userid, userpin, accounttyp, options, cashamount, cashwid } = input;
        if (userid && userpin && cashamount) {
            let remainblnc = randomamt - cashamount;
            console.log(chalk.bgCyanBright(`Transaction successfully! Your remaining Balance ${remainblnc}`));
        }
        else if (userid && userpin && cashwid) {
            if (randomamt > cashwid) {
                let remainblnc = randomamt - cashwid;
                console.log(chalk.bgCyanBright(`Transaction successfully! Your remaining Balance ${remainblnc}`));
            }
            else {
                console.log(chalk.bgCyanBright(`You have insufficient Balance`));
            }
        }
        else if (userid && userpin && input.options === "Balance inquiry") {
            console.log(`Your Balance is ${randomamt}`);
        }
        else {
            console.log(chalk.bgRedBright("Plz Enter Credentials Carefully"));
            break;
        }
        const doagain = await inquirer.prompt([
            {
                name: "again",
                type: "confirm",
                message: "Do want to use ATM again ",
            },
        ]);
        playaagian = doagain.again;
    }
}

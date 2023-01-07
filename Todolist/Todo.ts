#!/usr/bin/env node
import inquirer from "inquirer";
import figlet from "figlet";
let todo:string[] = [];
async function welcome() {
    figlet("Hello World!!", function (err, data) {
        if (err) {
            console.log("Something went wrong...");
            console.dir(err);
            return;
        }
        console.log(data);
    });
}
await welcome();
async function again() {
    const playagian = await inquirer.prompt([
        {
            name: "againp",
            type: "list",
            choices: ["Yes", "No"],
            message: "Do you want to play again Yes/No",
        },
    ]);
    return playagian.againp === "Yes" ? true : false;
}
async function Play() {
    let userchoice = true;
    do {
        const answer = await inquirer.prompt([
            {
                name: "options",
                type: "list",
                choices: ["Add item", "display", "remove item"],
                message: "what operation do you want to do",
            },
        ]);
        if (answer.options === "Add item") {
            const Add = await inquirer.prompt([
                {
                    name: "input1",
                    type: "input",
                    message: "Enter your item",
                },
            ]);
            todo.push(Add.input1);
            userchoice = await again();
        }
        else if (answer.options === "display") {
            if (todo.length == 0) {
                console.log("your list is empty");
            }
            else {
                todo.forEach((element) => console.log(element));
            }
            userchoice = await again();
        }
        else if (answer.options === "remove item") {
            if (todo.length == 0) {
                console.log("your list is empty");
            }
            else {
                const remove = await inquirer.prompt([
                    {
                        name: "ritem",
                        type: "input",
                        message: "which item do you want to remove ",
                    },
                ]);
                let index = todo.indexOf(remove.ritem);
                if (index !== -1) {
                    todo.splice(index, 1);
                }
                else {
                    console.log("invild entry");
                }
            }
            userchoice = await again();
        }
    } while (userchoice !== false);
}
setTimeout(Play, 1000);

#!/usr/bin/env node
import inquirer from "inquirer";
const user = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "ENTER YOUR SENTENCE TO COUNT",
    },
]);
const userchoice = user.sentence.trim().split(" ");
console.log(`Your sentence has ${userchoice.length} word`);

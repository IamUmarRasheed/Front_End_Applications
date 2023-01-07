#!/usr/bin/env node
import inquirer from "inquirer";
let conversion ={"PKR":{ "USD": 0.0044,
"GBP":0.0037,
"PKR":1

},"GBP":{ "USD": 1.21,
"PKR":271.79,
"GBP":1

},"USD":{ "PKR": 225.50,
"GBP":0.83,
"USD":1

},}
const userinput:{from:"USD"|"PKR"|"GBP",
to:"USD"|"PKR"|"GBP",
amount:number
}=await inquirer.prompt([{
    name:"from",
    type:"list",
    choices:["USD","PKR","GBP"],
    message:"PLZ ENTER YOUR 1st CURRENCY"
},{
    name:"to",
    type:"list",
    choices:["USD","PKR","GBP"],
    message:"PLZ ENTER YOUR  2nd CURRENCY"
},{
    name:"amount",
    type:"number",
    message:"PLZ ENTER YOUR AMOUNT TO CONVERT"
},])
const {from,to,amount}=userinput
if (from&&to&&amount){
    let result =conversion[from][to]*amount
    console.log(`YOUR CONVERSION FROM ${from} TO ${to} IS ${result} `)
}else{
    console.log(`INVALID ENTERY`)
}
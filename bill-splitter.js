const prompt = require('prompt-sync')();

let bill = Number(prompt("How much was the bill? $: "))
let even = bill / 2
console.log("The even split is: $" + even)
let person1 = Number(prompt("Enter how much person 1 paid: "))
let person2 = Number(prompt("Enter how much person 2 paid: "))


if (even === person1 && even === person2){
    console.log("You each split the bill evenly!")
} else if (person1 > even ){
    let owe2 = (person1 - even)
        console.log("Person 2 owes Person 1: $" + owe2)
    } else if (person2 > even){
        let owe1 = (person2 - even)
            console.log("Person 1 owes Person 1: $" + owe1)
        }
    
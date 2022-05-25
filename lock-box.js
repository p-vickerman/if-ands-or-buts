let pinCode = '1234'

const prompt = require('prompt-sync')();

let num = Number(prompt("Enter the four digit lockbox combo: "))

if (num === 1234){
    console.log("Success! You're in!")
} else {
    console.log("Failure")
}
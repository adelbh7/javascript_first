// consule.log(): print somthing
console.log("Test")

let password="password123"
const name="Omer"
password="newpassword"
console.log(password)

let generalAssemblyBahrain ="Bahrain"

/* Data Types:
    1. Strings
    2. Numbers
    3. Booleans
    4. Null
    5. Undefined
    6. Arrays
    7. Objects
    */

    let myStudent="Adel"
    console.log(typeof myStudent)

    let myFavNumber=10.5

    console.log(typeof myFavNumber)
    typeof myStudent
    console.log(typeof myStudent)

    let mySecondStudent

    console.log (typeof mySecondStudent)
    mySecondStudent="Mohamed"
    console.log("My name is "+mySecondStudent)
    console.log(`My Name is ${mySecondStudent} and Im in Bahrain`)
/* Declare 3 variables for `name`, `city`, and `favNumber`, and `console.log()` each like the following:
- **Output**: `"My name is Omar"`*/

let name2="Adel"
let city="Manama"
let favNumber=7

console.log(`My name is ${name2}`)
console.log(`My city is ${city}`)
console.log(`My favnumber is ${favNumber}`)

console.log(`My name is ${name2} \nMy city is ${city} \nMy Favnum is ${favNumber}`)

let value1=true

// ----------------------------

// Control Flow

console.log(3==3)
console.log(10>=3 || 3<2)
console.log(10>=3 && 3<2)
console.log(10>=3 && 3>2)

console.log(true)
console.log(!true)
console.log(10>=3 || !3<2)

// if statement

let light = "green"

if (light ==="green") {
    console.log("Go")
}
else if (light ==="red"){
    console.log("Stop")
}
else if (light==="yellow"){
    console.log("Slow")
}
else{console.log("Somthing is wrong with the Light")}

let myNumber= "h"
if(myNumber >0) {
    console.log(`${myNumber} is Postive Number`)
}

else if(myNumber <0) {
    console.log(`${myNumber} is Negative Number`)
}

else if (myNumber ===0){
    console.log(`${myNumber} is Zero`)
}

else  {
    console.log("Please enter a number value")
}
///----


for(let i =0; i<6;i++) 
{
    if(i%2 ===0){
        console.log("Even Number "+i)
    }
    else {
        console.log("Odd Number "+i)
        
    }

}

// ### Exercise 1:
// Declare 3 variables for `name`, `city`, and `favNumber`, and `console.log()` each like the following: 
// - **Output**: `"My name is Omar"`


let name3,city3,favnumber3=""
name3='Adelll'
city3='manamaaa'
favnumber3=777
console.log(`my name is ${name3}\nmy city is ${city3} \nmy favnumber is ${favnumber3}`)



// ### Exercise 2:
// Given a variable `myNumber` that you pick the value of, check if the number is positive or negative. Return a string like the following: 
// - **Output**: `"5 is a positive number"`

let mynumber4=5

if(mynumber4<0) {
    console.log("The number is Nagative")
}
else if (mynumber4>0) {
    console.log("The number is positive")
}
else if (mynumber4===0) {
    console.log("The number is Zero")
}
else {
    console.log ("Please enter a number value")
}

// ### Exercise 3:
// Given the same variable `myNumber`, check if the number is even or odd.

if(mynumber4%2===0){
    console.log("The number is Even")
}


// ### Exercise 4:
// Given 3 numbers `num1`, `num2`, `num3`, `console.log()` the largest number.
let num1=3
let num2=3
let num3=3

if(num1>num2 && num1>num3) {
    console.log(num1)
}

else if (num2>num1&& num2>num3){
    console.log(num2)
}

else if(num3>num1&&num3>num2){
    console.log(num3)
}
else {
    console.log("All Numbers are equal")
}


// ### Exercise 5:
// Given a variable `myGrade` which can be a number between 0-100, `console.log()` the following:
// - `90-100` ---> **A**
// - `80-89`  ---> **B**
// - `70-79`  ---> **C**
// - `60-69`  ---> **D**
// - Below 60 ---> **F**

let mygrade=95
if (mygrade>=90)
{console.log("A")}
else if(mygrade>80)
{console.log("B")}
else if(mygrade>70)
    {console.log("C")}
else if(mygrade>60)
    {console.log("D")}
else 
    {console.log("F")}

// ### Exercise 6:
// Given a number, `console.log()` the multiplication table for it from 1-10. Use **loops**.
let number5=5

for(let u=1; u<=10;u++) {
    console.log(number5*u)
}


// ## Bonuses
// ### Exercise 7 (BONUS):
// Factorial is as follows: if `3` is the number, the factorial of 3 is `3*2*1`. Given a number `myOriginalNumber`, `console.log()` the result of the factorial.
let myOriginalNumber=4
let factorial=1
for (myOriginalNumber; myOriginalNumber>1;myOriginalNumber--)
{
    console.log(myOriginalNumber+"*") 
    factorial=factorial*myOriginalNumber

}
console.log(`1=${factorial}`)




// ### Exercise 8 (BONUS):
// Write a program that prints the numbers from 1 to 50. For multiples of 3, print `"Fizz"` instead of the number, and for multiples of 5, print `"Buzz"`. For numbers that are multiples of both 3 and 5, print `"FizzBuzz"`.
let num6=1
for (num6;num6<=50;num6++){
    if (num6%3===0&&num6%5===0){
        console.log("FizzBuzz")
    }
    else if(num6%3===0){
        console.log("Fizz")
    }
    else if(num6%5===0){
        console.log("Buss")
    }
    else{ console.log(num6)}

}
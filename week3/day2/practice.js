//Task 01

let Perosn ={
name: "Mohammed",
age: 30,
country: "Egypt"

}

function logData(){
    console.log(Perosn.name + " is " + Perosn.age + " years old and lives in " + Perosn.country)
}

logData();
console.log("===================================================");
//===================================================

//Task 02

let age =15
// less than 6 years old -> free
// 6 to 17 years old     -> child discount
// 18 to 26 years old    -> student discount
// 27 to 66 years old    -> full price
// over 66 years old     -> senior citizen discount
if(age<=6)
    console.log("free")
else if (age>6 && age <=17)
    console.log("child discount")
else if (age>17 && age <=26)
    console.log("student discount")
else if (age>26 && age <=66)
    console.log("full price")
else
    console.log("senior citizen discount")




console.log("===================================================");
//===================================================

//Task 03

let largeCountries = ["China","India","USA","Indonesia","Pakistan"]

largeCountries.forEach(element => {
   console.log("_ "+element); 
});

console.log("===================================================");
//===================================================

//Task 04

let largeCountries2 = ["Tuvalu","India","USA","Indonesia","Monaco"]

largeCountries2.pop();
largeCountries2.push("Pakistan");
largeCountries2.shift();
largeCountries2.unshift("China");

for (let index = 0; index < largeCountries2.length; index++) {
    console.log("_ " + largeCountries2[index]); 
    
}

console.log("===================================================");
//===================================================

//Task 05

let dayOfMonth = 13
let weekday = "Friday"

if(dayOfMonth && weekday)
    console.log(" 😱"); 
    

console.log("===================================================");
//===================================================

//Task 06
let hands = ["rock", "paper", "scissor"]

function randomEle(){
    num = Math.floor(Math.random()*3);
    console.log(hands[num]); 
}

randomEle();
console.log("===================================================");
//===================================================


//Task 07

let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")

fightButton.addEventListener("click", function() {
    // Challenge:
    // When the user clicks on the "Pick Fighters" button, pick two random 
    // emoji fighters and display them as i.e. "🦀 vs 🐢" in the "stage" <div>.
    let num1 = Math.floor(Math.random()*fighters.length);
    let num2 = Math.floor(Math.random()*fighters.length);

    stageEl.textContent = fighters[num1] +" vs "+ fighters[num2];
})


console.log("===================================================");

//===================================================


//Task 08

let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"]
let appleShelf = document.getElementById("apple-shelf")
let orangeShelf = document.getElementById("orange-shelf")

// Create a function that puts the apples onto the appleShelf
// and the oranges onto the orangeShelf. Use a for loop,
// a conditional statement, and the textContent property.


function putShelfs(){
    fruit.forEach(element => {
        if (element == "🍎")
            appleShelf.textContent += element
        else
            orangeShelf.textContent += element
    });
}

putShelfs()


console.log("===================================================");

//===================================================
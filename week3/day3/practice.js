// //Task 01

// const player = "Per"
// const opponent = "Nick"
// const game = "AmazingFighter"
// let points = 0
// let hasWon = false

// // PLAYING THE GAME
// points += 100
// hasWon = true

// // ANNOUNCING THE WINNER
// if (hasWon) {
//     console.log(` ${player} got ${points} points and won the ${game} game!` )
// } else {
//     console.log(`The winner is ${opponent}! ${player} lost the game`)
// }

// // Go through all variables and decide if they should be let or const
// // Change the console logs to use template strings instead of double quotes


// console.log("==============================")

// //==============================

// //Task 02

// let myCourses = ["Learn CSS Animations", "UI Design Fundamentals", "Intro to Clean Code"]

// // Create a function that takes a single parameter, an array,
// // and logs all the items of the array to the console.
// // Call the function while passing in myCourses as an argument

// function logCourses(courses){
//     courses.forEach(element => {
//         console.log(element)
//     });
// }
// logCourses(myCourses);

// console.log("==============================")

// //==============================

// //Task 03

// // Save a value to localStorage
// // Delete your code and refresh the page
// // Fetch your value from localStorage and log it out

// /*
// localStorage.setItem("Name","Mohammed");
// localStorage.getItem("Name");
// localStorage.clear();
// */

// console.log("==============================")

// //==============================


// //Task 04

// let data = [
//     {
//         player: "Jane",
//         score: 52
//     }, 
//     {
//         player: "Mark",
//         score: 41
//     }
// ]

// // Fetch the button from the DOM, store it in a variable
// // Use addEventListener() to listen for button clicks
// // Log Jane's score when the button is clicked (via data)

// /*
// let saveBtn = document.getElementById("save-btn");

// saveBtn.addEventListener("click", function() {
//         console.log(data[0].score)
// })
// */

// console.log("==============================")

// //==============================


// //Task 05

// // The generateSentence(desc, arr) takes two parameterer: a description and an array.
// // It should return a string based upon the description and array.

// // Example 1: if you pass in "largest countries",and ["China", "India", "USA"],
// // it should return the string: "The 3 largest countries are China, India, USA"

// // Example 2:If you pass in "best fruits" and ["Apples", "Bananas"], it should return:
// // "The 2 best fruits are Apples, Bananas"

// // Use both a for loop and a template string to solve the challenge
// function generateSentence(desc, arr) {
//     //let length = arr.length
//     let descArr = `The ${arr.length} ${desc} are`
//     arr.forEach(element => {
//         descArr += element +","
//     });
//     const lastDesc = descArr.slice(0, -1);
//     return lastDesc;
// }

// generateSentence("largest countries",["China", "India", "USA"]);

// console.log("==============================")

// //==============================

// //Task 06


// // Create a function that renders the three team images
// // Use a for loop, template strings (``), plus equals (+=)
// // .innerHTML to solve the challenge.

// const imgs = [
//     "images/hip1.jpg",
//     "images/hip2.jpg",
//     "images/hip3.jpg"
// ]

// const render = document.getElementById("render-images")

// function addImages(){
//     let imagesArr="";
//     imgs.forEach(element => {
//          imagesArr += `<img src="${element}" alt="hip image">`;
//     });
//     render.innerHTML += imagesArr;
// }
// addImages();


// console.log("==============================")

// //==============================


// //Task 07


// // Challenge:
// // Round the price in the button down to two decimal places.
// // Don't know which method to use? Google it!

// const totalPrice = 420.69235632455
// const btn = document.getElementById("purchase-btn")
// btn.textContent = `Buy €${ totalPrice.toFixed(2) }`


// console.log("==============================")

// //==============================


// //Task 08


// // Challenge:
// // The toFixed() method doesn't work anymore. Can you make it work?
// // Google the error message if you're unsure about how to do it

// const totalPrice2 = "420.69235632455"
// const btn = document.getElementById("buy-btn")
// btn.textContent = `Buy €${ Number(totalPrice2).toFixed(2) }`

// console.log("==============================")

// //==============================



let arr =[5,3,1,2,4]

arr.sort();
let index = Math.floor(arr.length/2)
console.log(arr[index])
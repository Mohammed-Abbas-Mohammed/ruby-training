// Task 01:

let firstName = "Mohammed";
let lastName = "Abbas Mohammed";

let fullName = firstName + " "+ lastName;
console.log(fullName);

console.log("===========================================");
//Task 02
function Greeting(name) {
    console.log("Hi there, "+name +"!")
    
}
Greeting(firstName);
console.log("===========================================");

//Task03

let myPoints = 3

function add3Points(){
    myPoints+=3;
    return myPoints;
}

function remove1Point(){
    myPoints-=1;
    return myPoints;
}


add3Points();
add3Points();
add3Points();
remove1Point();
remove1Point();
console.log(myPoints)

console.log("===========================================");


// Task 04
console.log("2" + 2) // 22
console.log(11 + 7) //18
console.log(6 + "5") // 65
console.log("My points: " + 5 + 9) //59
console.log(2 + 2) // 4
console.log("11" + "14") // 1114

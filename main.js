console.log("20 12 02 JS Loops Practice") // check that files are linked

// Exercise 1 : Counting
// Using a for loop, iterate from 1 to 10 increasing by 1 each iteration. Output the current value of the iterator in the console on each iteration.
for(let i = 1; i <= 10; i++){
    console.log(i);
}

// Exercise 2 : Counting Backward
// Using a for loop, iterate from 10 to 1 decreasing by 1 each iteration. Output the current value of the iterator in the console on each iteration.
for(let i = 10; i >= 1; i--){
    console.log(i);
}

// Exercise 3 : Iterate Through an Array
// Declare an array supplyArray with the following string elements : loose leaf paper, black markers, scissors, tape, tape dispenser. 
let supplyArray = ["loose leaf paper","black markers", "scissors", "tape", "tape dispenser"];
console.log(supplyArray);
// Using a for loop, iterate through the supplyArray. Output each array element using the current value of the iterator in the console on each iteration in the formatted message : "Supply : [ELEMENT]"
for(let i = 0; i < supplyArray.length; i++){
    console.log(`Supply : ${supplyArray[i]}`);
}

// Exercise 4 : Iterate Through an Array + Conditionals
// Using a for loop, iterate through the supplyArray. Output each array element using the current value of the iterator in the console on each iteration in the formatted message : "In Stock : [ELEMENT]", unless the element is black markers. In which case output the formatted message : "Out of Stock [ELEMENT]"
for(let i = 0; i < supplyArray.length; i++){
    if(supplyArray[i] != "black markers") {
        console.log(`In Stock : ${supplyArray[i]}`);
    } else {
        console.log(`Out of Stock : ${supplyArray[i]}`);
    }
}
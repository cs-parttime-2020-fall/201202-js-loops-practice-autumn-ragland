// console.log("20 12 02 JS Loops Practice"); // check files are linked

// Counting 
// Using a for loop, iterate from 1 to 10 increasing by 1 each iteration. Output the current value of the iterator in the console on each iteration.
for(let i = 1; i <= 10; i++){
    console.log(i);
}

// Counting Backward
// Using a for loop, iterate from 10 to 1 decreasing by 1 each iteration. Output the current value of the iterator in the console on each iteration.
for(let i = 10; i >= 1; i--){
    console.log(i);
}

// Iterate Through an Array
// Declare an array `supplyArray` with the following string elements : loose leaf paper, black markers, scissors, tape, tape dispenser. 
let supplies = ["loose leaf paper", "black markers", "scissors", "tape", "tape dispenser"];
console.log(supplies); // test that array is good
// Using a for loop, iterate through the `supplyArray`. 
for(let i = 0; i < supplies.length; i++){
    console.log(`Supply : ${supplies[i]}`); // output element by index
}

// Iterate Through an Array + Conditionals 
// Using a for loop, iterate through the `supplyArray`. 
for(let i = 0; i < supplies.length; i++){
    if(supplies[i] != "black markers"){ // if elements is markers
        console.log(`In Stock : ${supplies[i]}`);
    } else { // if element not markers
        console.log(`Out of Stock : ${supplies[i]}`);
    }
}

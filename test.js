//1. Write a function that takes in a string and returns it when reversed 
//let food = “eating” 
function reverse(food){
let food = "eating"
let x = food.split().reverse();
return (x)
}


//2. Write a function that takes in the following array and consoles the target if it is found else null 
//let num = [2,8,0,23,5,45,76] 
//Target = 23 

function find(num){
    if(num.includes[23]){
    console.log(num.includes[23]);
    }
    else{
        console.log(null);
    }
}
let num = [2,8,0,23,5,45,76]
console.log(find(num));

//3. Given years between 2000 and 2023, console all the leap years in the following sentence, 
//i.e “2020 is a leap year” if not console log i.e “2001 is not a leap year”



//4. Given a range of numbers from 0 to 100, console”Fizz” if the numbers are divisible by 3,
// “Buzz” if the numbers are divisible by 5, and “FizzBuzz” if divisible by both 3 and 5. 
const numbs = Range(...100);
if(x%3 && x%5 <= 0 ){
console.log("FizzBuzz");
}
else if(x%3<=0){
console.log("Fizz")
}
else{
    console.log("Buzz")
}


//5. Write a function that takes in an array of numbers and returns an array that has all elements multiplied by 4. 
//let numArray = [12,87,45,75,23,64,73] 
 function multiple(numArray){
    for(i=1; i<numArray.length; i++){
        console.log(i*4);
    }
 }
 let numArray = [12,87,45,75,23,64,73]
 console.log(multiple(numArray));

//6. Write a function that takes in an array of strings and returns an array with every element turned into a number 
//let nums = [“10”,”24”,”45”,”56”,”67”]

function turnTonum(nums){
    let x = nums.split('').turnTonum().join('');
    console.log(x);
}
let nums = ["10","24","45","56","67"]
console.log(turnTonum(nums));

//1. Write a function that takes in a string and returns it when reversed 
//let food = “eating” 
function reverse(food){
<<<<<<< HEAD
    return food.split('').reverse().join('')
    }
     let food = "eating"
     console.log(reverse(food))
    
    
    //2. Write a function that takes in the following array and consoles the target if it is found else null 
    //let num = [2,8,0,23,5,45,76] 
    //Target = 23 
    
    function divideArray(num){
        if(num.length <= 1){
            return num;
        }
        let middle = Math.floor(num.length / 2);
        let left = num.slice(0, middle);
        let right = num.slice(middle);
        return sortArray(divideArray(left), divideArray(right));
    }
    
    function sortArray(left, right){
        let empty = [];
        while(left.length && right.length){
            if(left[0] < right[0]){
                empty.push(left.shift());
            }
            else{
                empty.push(right.shift());
            }
        }
        return [...empty,...left,...right];
    }
    
    function binary(num, target){
        let left = 0;
        let right = num.length - 1;
    
        while(left <= right){
            let middle = Math.floor((left + right) / 2);
            if(num[middle] === target){
                return middle;
            }
            else if (num[middle] > target){
                right = middle - 1;
            }
            else{
                left = middle + 1;
            }
        }
        return null;
    }
    
    // let num = [23, 8, 76, 45, 2, 0, 5];
    let target = 23;
    let num = divideArray([23, 8, 76, 45, 2, 0, 5]);
    console.log(binary(num, target));
    
    //3. Given years between 2000 and 2023, console all the leap years in the following sentence, 
    //i.e “2020 is a leap year” if not console log i.e “2001 is not a leap year”
    
    function leapYear(){
        for(let year = 2000; year <= 2023; year++){
            if ((year % 4 === 0 && year % 100 !== 0)|| year % 400 === 0){
                console.log(year + " is a leap year");
            }
            else{
                console.log(year + " is not a leap year");
            }
        }
    }
    leapYear();
    
    //4. Given a range of numbers from 0 to 100, console”Fizz” if the numbers are divisible by 3,
    // “Buzz” if the numbers are divisible by 5, and “FizzBuzz” if divisible by both 3 and 5. 
    function fizzBuzz(){
        for(let i = 0; i <= 100; i++){
            if(i % 5 === 0 && i % 3 === 0){
            console.log("FizzBuzz");
            }
    
            else if(i % 3 === 0){
             console.log("Buzz");
            }
    
            else if(i % 5 === 0){
              console.log("Fizz");
            }
    
            else{
                console.log(i);
            }
        }
    }
    
    fizzBuzz();
    
    
    //5. Write a function that takes in an array of numbers and returns an array that has all elements multiplied by 4. 
    //let numArray = [12,87,45,75,23,64,73] 
     
     function multiplyBy4(numArray) {
        let multipliedArr = [];
        for (let i = 0; i < numArray.length; i++) {
          multipliedArr.push(numArray[i] * 4);
        }
        return multipliedArr;
      }
      let numArray = [12, 87, 45, 75, 23, 64, 73];
      let multipliedArray = multiplyBy4(numArray);
      console.log(multipliedArray); 
    
    //6. Write a function that takes in an array of strings and returns an array with every element turned into a number 
    //let nums = [“10”,”24”,”45”,”56”,”67”]
    
    function stringsToNumbers(nums) {
        let numbersArr = [];
        for (let i = 0; i < nums.length; i++) {
          numbersArr.push(Number(nums[i]));
        }
        return numbersArr;
      }
      let nums = ["10", "24", "45", "56", "67"];
      let numbers = stringsToNumbers(nums);
      console.log(numbers); 
=======
return food.split('').reverse().join('')
}
 let food = "eating"
 console.log(reverse(food))


//2. Write a function that takes in the following array and consoles the target if it is found else null 
//let num = [2,8,0,23,5,45,76] 
//Target = 23 

function divideArray(num){
    if(num.length <= 1){
        return num;
    }
    let middle = Math.floor(num.length / 2);
    let left = num.slice(0, middle);
    let right = num.slice(middle);
    return sortArray(divideArray(left), divideArray(right));
}

function sortArray(left, right){
    let empty = [];
    while(left.length && right.length){
        if(left[0] < right[0]){
            empty.push(left.shift());
        }
        else{
            empty.push(right.shift());
        }
    }
    return [...empty,...left,...right];
}

function binary(num, target){
    let left = 0;
    let right = num.length - 1;

    while(left <= right){
        let middle = Math.floor((left + right) / 2);
        if(num[middle] === target){
            return middle;
        }
        else if (num[middle] > target){
            right = middle - 1;
        }
        else{
            left = middle + 1;
        }
    }
    return null;
}

// let num = [23, 8, 76, 45, 2, 0, 5];
let target = 23;
let num = divideArray([23, 8, 76, 45, 2, 0, 5]);
console.log(binary(num, target));

//3. Given years between 2000 and 2023, console all the leap years in the following sentence, 
//i.e “2020 is a leap year” if not console log i.e “2001 is not a leap year”

function leapYear(){
    for(let year = 2000; year <= 2023; year++){
        if ((year % 4 === 0 && year % 100 !== 0)|| year % 400 === 0){
            console.log(year + " is a leap year");
        }
        else{
            console.log(year + " is not a leap year");
        }
    }
}
leapYear();

//4. Given a range of numbers from 0 to 100, console”Fizz” if the numbers are divisible by 3,
// “Buzz” if the numbers are divisible by 5, and “FizzBuzz” if divisible by both 3 and 5. 
function fizzBuzz(){
    for(let i = 0; i <= 100; i++){
        if(i % 5 === 0 && i % 3 === 0){
        console.log("FizzBuzz");
        }

        else if(i % 3 === 0){
         console.log("Buzz");
        }

        else if(i % 5 === 0){
          console.log("Fizz");
        }

        else{
            console.log(i);
        }
    }
}

fizzBuzz();


//5. Write a function that takes in an array of numbers and returns an array that has all elements multiplied by 4. 
//let numArray = [12,87,45,75,23,64,73] 
 
 function multiplyBy4(numArray) {
    let multipliedArr = [];
    for (let i = 0; i < numArray.length; i++) {
      multipliedArr.push(numArray[i] * 4);
    }
    return multipliedArr;
  }
  let numArray = [12, 87, 45, 75, 23, 64, 73];
  let multipliedArray = multiplyBy4(numArray);
  console.log(multipliedArray); 

//6. Write a function that takes in an array of strings and returns an array with every element turned into a number 
//let nums = [“10”,”24”,”45”,”56”,”67”]

function stringsToNumbers(nums) {
    let numbersArr = [];
    for (let i = 0; i < nums.length; i++) {
      numbersArr.push(Number(nums[i]));
    }
    return numbersArr;
  }
  let nums = ["10", "24", "45", "56", "67"];
  let numbers = stringsToNumbers(nums);
  console.log(numbers); 
>>>>>>> 57d88f9fda3630de775393cc3304cfb95f5aa2cf

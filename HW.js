
// Define a function maxOfThree that takes three numbers as arguments and returns
//  the largest of them. If all numbers are the same, it doesn't matter which one is 
//  returned. If the two largest numbers are the same, one of them should be returned.



function maxOfThree(nums) { //  3,5,2
    let result = 0;
    let i =0;
    while(i<3) {
        if(nums[i] > result){
            result = nums[i]; // 3 ,5
        }
        i++;
    }
    return result;
}

// Write a function printLongestWord that accepts a single argument,
//  an array of strings. The method should return the longest word in the array. 
//  In case of a tie, the method should return the word that appears first in the array.


function printLongestWord(arrstr) {
result =0;
let i=0;
while(i<arrstr.length) {
    if(arrstr[i].length > result) {
        result = arrstr[i].length;
    }
    i++;
}
return result;
}


// Write a Javascript function called transmogrify. This function should accept three arguments,
// which you can assume will be numbers. Your function should return the "transmogrified" result.

// The transmogrified result of three numbers is the product of the first two numbers, raised to the power of the third number.

// For example, the transmogrified result of 5, 3, and 2 is (5 times 3) to the power of 2 is 225.

function transmogrify(num1,num2,num3) {
    result = 1;
    let i = 0;
    while(i<num3) {
        result *= (num1 * num2); // 15 
        i++;
    }
    return result;
}
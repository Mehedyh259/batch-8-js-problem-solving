/*
তোমাকে একটা function দেওয়া হবে called findingBadData(). এটা ইনপুট হিসেবে একটা array নিবে। array তে যেকোনো সংখ্যক কতগুলো number থাকবে। number গুলো negative number (less than zero) ও হতে পারে, আবার positive number (greater than or equal to zero) ও হতে পারে। কোনও number যদি negative হয় সেটাকে আমরা বলব “Bad Data”. কোনও number যদি positive হয় সেটাকে আমরা বলব “Good Data”. 
এখন তোমার task: array তে কতগুলো Bad data আছে সেটা খুঁজে বের করতে হবে এবং সেই নাম্বার টা return করতে হবে।
Sample Input & Output:-
Input: [ 1,2,5 ]
Output: 0
Input: [ 2, -5, -7, -13 ]
Output: 3
*/

function findingBadData(arr){
    if(!Array.isArray(arr)){
        return "please provide me an array of number"
    }else{
        let badData = 0;
        // for(let i = 0; i<arr.length; i++){
        //     if(typeof arr[i] !== "number"){
        //         return "please provide me an array of number"
        //     }else{
        //         if(arr[i] < 0){
        //             badData++;
        //         }
        //     }
        // }

        for(let item of arr){
            if(typeof item !== "number"){
                return "please provide me an array of number"
            }else{
                if(item < 0){
                    badData++; // badData = badData + 1;
                }
            }
        }
        return badData
    }
}

const x = [ 2, -5, -7, -13 ];

console.log(findingBadData(x))

// const x = false;

// console.log(!x) // false -> true

// const arr = [1,2,3,4];
// const x = "hello"

// // console.log(Array.isArray(x))

// if(!Array.isArray(x)){
//     console.log('this is not an array')
// }
/*
তোমাকে একটা function দেওয়া হবে called “isLGSeven()”. এটা ইনপুট হিসেবে একটা number নিবে।  
এখন তোমার task: তোমাকে ইনপুট ভ্যালু এবং ৭ এর মধ্যে পার্থক্য বের করতে হবে। যদি এই পার্থক্য ৭ এর চেয়ে ছোট হয়, তখন তোমাকে return করতে হবে সেই বিয়োগফল। নাহলে তোমাকে return করতে হবে double of the input। মানে যে সংখ্যা ইনপুট হিসেবে নিয়েছো সেটির দ্বিগুণ।
Input : 6
Output: -1
Input: -15
Output: -22
Input: 15
Output: 30

*/

function isLGSeven(x){
    if(typeof x !== "number"){
        return "please provide me a number";
    }else{
        const differ = x - 7;
        if(differ < 7){
            return differ;
        }else{
            return x*2;
        }
    }
}

// -4 -5 = -9

// 10 < 20 < 30 < 40
//  -10 > -20 > -30 > -40

console.log(isLGSeven(-15))
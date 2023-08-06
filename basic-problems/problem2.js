/*

ফাংশন নেম দিতে হবে isJavaScriptFile । এই ফাংশনে প্যারামিটার হিসেবে নিবে একটি স্ট্রিং(String) যেটি হবে একটি ফাইল নেম (যেমনঃ ‘index.js’)। যদি এটি জাভাস্ক্রিপ্ট ফাইল হয় তোমাকে true রিটার্ন করতে হবে আর যদি না হয় তাহলে false রিটার্ন করতে হবে 
*/

// function isJavaScriptFile(filename){
//     if(typeof filename !== "string"){
//         return "please provide me a valid file name (string)."
//     }else{
//         // if(filename.toLowerCase().endsWith(".js") === true){
//         //     return true
//         // }else{
//         //     return false
//         // }

//         return filename.toLowerCase().endsWith(".js"); //   true || false

//     }

// }

function isJavaScriptFile(filename){
    if(typeof filename !== "string"){
        return "please provide me a valid file name (string)."
    }else{
        // hello.world.bd.js
        const arr = filename.split(".");
        const lastElement = arr.pop()

        return lastElement.toLowerCase() === "js";
        // if(lastElement.toLowerCase() === "js"){
        //     return true;
        // }else{
        //     return false;
        // }
    }

}

console.log(isJavaScriptFile(324))
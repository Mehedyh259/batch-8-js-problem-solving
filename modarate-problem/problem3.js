// function name printDetails(). you will be provided an object. you have to use the properties of the object and make a meaning full sentence. if there are any property missing you have to print there (nai);

/*
const obj = {
    name: "mehedy",
    age:26,
    email:"abc@gmail.com"
}
Amar nam mehedy, amar boyos 26, amar email abc@gmail.com, amar bou nai. 
*/


function printDetails(person){
    if(typeof person !== "object"){
        return "please provide me a valid object"
    }else{
        const name = person.name || "nai";
        const age = person.age || "nai";
        const email = person.email || "nai";
        const bou = person.bou || "nai";
        return "amar nam "+name+". amar boyos "+age+". amar email "+email+". amr bou "+bou;
    }

}

const obj = {
    name: "mehedy",
    age:26,
    email:"abc@gmail.com"
}

console.log(printDetails(obj))

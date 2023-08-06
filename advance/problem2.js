/*
you will be provided an array of numbers. you have to return array of prime numbers from that input array. 

*/

function findPrimeNumbers(arr){
    if(!Array.isArray(arr)){
        return "please provide me an array of numbers"
    }else{
        
        // 0,1 can not be prime number
        let primes = [];
        for(let item of arr){
            if(item > 1){ //4 
                let isPrime = true;

                for(let i = 2; i< item; i++){ 
                    if(item % i === 0){
                        isPrime = false;
                        break;
                    }
                }
                if(isPrime === true){
                    primes.push(item)
                }
            }

        }
        return primes
    }

}

const numbers = [ 4,8,5,10,19]

console.log(findPrimeNumbers(numbers))
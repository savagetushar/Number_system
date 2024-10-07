const numbers=[19,23,4,16,28,13,31,8,29,14,6,35,2,11,17,5,9,27,12,30];
function isPrime(num){
    if(num<=1)
        return false;
    for(let i=2;i<=Math.sqrt(num);i++){
        if(num%i===0)
            return false;
    }
    return true;
}
const primeNumber=[];
for(let i=0;i<numbers.length;i++){
    if(isPrime(numbers[i])){
        primeNumber.push(numbers[i]);
    }
}
console.log("prime numbers",primeNumber);
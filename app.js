const numbers=[19,23,4,16,28,13,31,8,29,14,6,35,2,11,17,5,9,27,12,30];
const max=Math.max(...numbers);
const min=Math.min(...numbers);
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
let primeSum=0;
for(let i=0;i<numbers.length;i++){
    if(isPrime(numbers[i])){
        primeNumber.push(numbers[i]);
        primeSum=primeSum+numbers[i];

    }
}
console.log("prime numbers",primeNumber);
console.log("maximum value",max);
console.log("minimum value",min);
console.log("sum of prime number",primeSum);
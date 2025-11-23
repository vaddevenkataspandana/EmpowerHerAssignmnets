let nums = [10,3,7,20,13,2];
//1
let squares = nums.map(num => num * num);
console.log("Squares:",squares);
//2
function isPrime(n) {
    if(n<=1)
        return false;
    for (let i = 2; i <= Math.sqrt(n); i++){
        if(n % i === 0)
            return false;
    }
    return true;
}
let primes = nums.filter(isPrime);
console.log("Prime Numbers",primes)
//3
let sum = nums.reduce((acc,nums)=> acc + nums,0);
console.log("Sum:",sum);
//4
let desecending = [...nums].sort((a,b)=> b-a);
console.log("Descending Order:",desecending);
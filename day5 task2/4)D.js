const num = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

// Arrow function prime nyumbers
const isPrime = num => {
  if (num <= 1 || num % 1 !== 0) {
    return false;
  }
  
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  
  return true;
}
const primeNum = num.filter(isPrime);

console.log(primeNum)
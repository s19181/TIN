function isPrime(num) {
  var isPrime = Boolean(true);
  for(var i = 2; i < num; i++) {
    if(num % i === 0) return false;
  }
  
  return isPrime;
}

console.log(isPrime(4)); //true
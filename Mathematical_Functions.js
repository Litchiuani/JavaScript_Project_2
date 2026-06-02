// ── Fonction 1 : Factorielle ──
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

console.log("\n=== FACTORIAL ===");
console.log("0! =", factorial(0));  
console.log("1! =", factorial(1));  
console.log("5! =", factorial(5));  
console.log("7! =", factorial(7));  

// ── Fonction 2 : Vérifier si un nombre est premier ──
function isPrime(n) {
  if (n <= 1) return false;

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false; 
    }
  }
  return true;  
}

console.log(" PRIME NUMBER CHECK ");
console.log("2 est premier ?",  isPrime(2));   
console.log("7 est premier ?",  isPrime(7));   
console.log("13 est premier ?", isPrime(13));  
console.log("4 est premier ?",  isPrime(4));   
console.log("9 est premier ?",  isPrime(9));   
console.log("1 est premier ?",  isPrime(1));    

// ── Fonction 3 : Suite de Fibonacci ──
function fibonacci(n) {
  let suite = [];

  for (let i = 0; i < n; i++) {
    if (i === 0) {
      suite.push(0);       
    } else if (i === 1) {
      suite.push(1);       
    } else {
      suite.push(suite[i - 1] + suite[i - 2]);
    }
  }

  return suite;
}

console.log("FIBONACCI SEQUENCE ");
console.log("5 termes  :", fibonacci(5));   
console.log("8 termes  :", fibonacci(8));   
console.log("10 termes :", fibonacci(10));  
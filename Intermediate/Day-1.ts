// Question -1 : Count the number of Factors
function countFactors(A: number): number {
  let count = 0;
  for (let i = 0; i * i <= A; i++) {
    if (i * i == A) {
      count++;
    } else if (A % i == 0) {
      count += 2;
    }
  }
  return count;
}

// Question -2 : count number of prime numbers
function isPrime(A: number): number {
  let result: number = isPrimeCheckFactors(A);
  return result;
}

function isPrimeCheckFactors(A: number): number {
  let count = 0;
  for (let i = 2; i * i <= A; i++) {
    if (i * i == A) {
      count++;
    } else if (A % i == 0) {
      count += 2;
    }
  }

  if (count == 2) {
    return 1;
  } else {
    return 0;
  }
}

// Question -3 : In a Given Array count the Prime Numbers
function countPrimeNumber(A: number): number {
  let primeDigitNumber = 0;
  for (let i = 2; i <= A; i++) {
    if (isPrime(i) == 1 ? true : false) {
      primeDigitNumber++;
    }
  }
  return primeDigitNumber;
}

// calling functions
isPrime(7);
countFactors(10);
countPrimeNumber(19);

// Topic : CarryForward anf subArrays

// ----> Total Number of subarrays == n(n+1)/2;

// Question 1 : Given an array A, find the size of the smallest subarray such that it contains at least one occurrence of the maximum value of the array and at least one occurrence of the minimum value of the array.

// Time complexity --> O(N)
// space Complexity --> O(1)
function closestMinMax(arr: number[]) {
  let min: number = findMin(arr);
  let max: number = findMax(arr);
  // base case
  if (min == max) {
    return 1;
  }

  let minIndex: number = -1;
  let maxIndex: number = -1;
  let minMaxSubArrayLength: number = Number.MAX_VALUE;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === min) {
      minIndex = i;
    } else if (arr[i] === max) {
      maxIndex = i;
    }

    if (minIndex != -1 && maxIndex != -1) {
      minMaxSubArrayLength = Math.min(
        minMaxSubArrayLength,
        Math.abs(maxIndex - minIndex) + 1
      );
    }
  }

  return minMaxSubArrayLength;
}

function findMin(arr: number[]) {
  let min: number = Number.MAX_VALUE;
  for (const currentElement of arr) {
    min = Math.min(currentElement, min);
  }
  return min;
}

function findMax(arr: number[]) {
  let max: number = Number.MIN_VALUE;
  for (const currentElement of arr) {
    max = Math.max(currentElement, max);
  }
  return max;
}

// Question -2 : You have given a string A having Uppercase English letters. You have to find how many times subsequence "AG" is there in the given string.

// Time compelxity --> O(N)
// Space complexity --. O(1)
function specialSubsequeceofAG(str: String): number {
  let MOD: number = 1000 * 1000 * 1000 + 7;
  let result: number = 0;
  let count_a = 0;

  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) == "A") {
      count_a++;
    } else if (str.charAt(i) == "G") {
      result += count_a;
      result %= MOD;
    }
  }

  return result;
}

// Question -3 : Given an array A of length N, return the subarray from B to C.

// Time complexity --> O(N)
// Space complexity --> O(N)
function subArrayFromBtoC(arr: number[], B: number, C: number): number[] {
  let subArrayLength = C - B + 1;
  let result: number[] = new Array(subArrayLength).fill(0);

  for (let i = 0; i < subArrayLength; i++) {
    result[i] = arr[B + i];
  }
  return result;
}

// Question -4 : generate all the Subarray length
// Time complexity --> O(N^3)
// Space complexity --> O(N^2)
function generateSubArrays(arr: number[]): number[][] {
  const subarrays: number[][] = [];
  const n: number = arr.length;

  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      const subarray: number[] = arr.slice(i, j + 1);
      subarrays.push(subarray);
    }
  }

  return subarrays;
}

// Question -5 : ay you have an array, A, for which the ith element is the price of a given stock on day i.If you were only permitted to complete at most one transaction (ie, buy one and sell one share of the stock), design an algorithm to find the maximum profit. Return the maximum possible profit.

// time -complexity --> O()
// Space complexity --> O()
function maxProfit(prices: number[]): number {
  if (prices == null || prices.length <= 1) {
    return 0;
  }

  let minProfix: number = prices[0];
  let maxProfit: number = 0;

  for (let i = 0; i < prices.length; i++) {
    let currentprice: number = prices[i];
    let potentialProfit: number = currentprice - minProfix;

    if (currentprice < minProfix) {
      minProfix = currentprice;
    } else if (potentialProfit > maxProfit) {
      maxProfit = potentialProfit;
    }
  }

  return maxProfit;
}

// calling functions
closestMinMax([1, 3, 2]);
specialSubsequeceofAG("ABCGAG");
subArrayFromBtoC([4, 3, 2, 6], 1, 3);
generateSubArrays([1, 2, 3]);
maxProfit([1, 2]);

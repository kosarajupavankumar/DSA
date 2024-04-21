// Topic : Prefix Sum

// Question - 1: You are given an integer array A of length N.
// You are also given a 2D integer array B with dimensions M x 2, where each row denotes a [L, R] query.
// For each query, you have to find the sum of all elements from L to R indices in A (0 - indexed).
// More formally, find A[L] + A[L + 1] + A[L + 2] +... + A[R - 1] + A[R] for each query.

// Time complexity --> O(N + Q)
// Space Complexity --> O(N + Q)
function rangeSum(arr: number[], queries: number[][]): number[] {
  const result: number[] = new Array(queries.length).fill(0);
  const prefixSum: number[] = new Array(arr.length).fill(0);

  // calculate the prefixSum
  prefixSum[0] = arr[0];
  for (let i = 1; i < arr.length; i++) {
    prefixSum[i] = prefixSum[i - 1] + arr[i];
  }

  for (let i = 0; i < queries.length; i++) {
    const left: number = queries[i][0];
    const right: number = queries[i][1];

    if (left < 0 || right > prefixSum.length || left > right) {
      continue;
    }

    if (left == 0) {
      result[i] = prefixSum[right];
    } else {
      result[i] = prefixSum[right] - prefixSum[left - 1];
    }
  }

  return result;
}

// Question -2 : Given an array, arr[] of size N, the task is to find the count of array indices such that removing an element from these indices makes the sum of even-indexed and odd-indexed array elements equal.

// Time complexity --> O(N)
// Space complexity --> O(N+ N) -->O(N)
function specialIndex(arr: number[]): number {
  let prefixSumEven: number[] = new Array(arr.length).fill(0);
  let prefixSumOdd: number[] = new Array(arr.length).fill(0);

  let count: number = 0;

  // calculate the prefixSumof Even number
  prefixSumEven[0] = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (i % 2 === 0) {
      prefixSumEven[i] = prefixSumEven[i - 1] + arr[i];
    } else {
      prefixSumEven[i] = prefixSumEven[i - 1];
    }
  }

  // calculate the prefixSum of odd Number
  for (let i = 1; i < arr.length; i++) {
    if (i % 2 !== 0) {
      prefixSumOdd[i] = prefixSumOdd[i - 1] + arr[i];
    } else {
      prefixSumOdd[i] = prefixSumOdd[i - 1];
    }
  }

  // traverse over original array
  for (let i = 0; i < arr.length; i++) {
    let sumEven: number = 0;
    let sumOdd: number = 0;

    if (i == 0) {
      sumEven = prefixSumOdd[arr.length - 1] - prefixSumOdd[i];
      sumOdd = prefixSumEven[arr.length - 1] - prefixSumEven[i];
    } else {
      sumEven =
        prefixSumEven[i - 1] + prefixSumOdd[arr.length - 1] - prefixSumOdd[i];
      sumOdd =
        prefixSumOdd[i - 1] + prefixSumEven[arr.length - 1] - prefixSumEven[i];
    }

    if (sumEven === sumOdd) {
      count++;
    }
  }
  return count;
}

// Question 3 : Given an array A of N integers. Construct prefix sum of the array in the given array itself.
// Time complexity --> O(N)
// space complexity --> O(1)
function prefixSum(arr: number[]): number[] {
  for (let i = 1; i < arr.length; i++) {
    arr[i] = arr[i - 1] + arr[i];
  }
  return arr;
}

// Question -4 : You are given an array A of integers of size N.
// Your task is to find the equilibrium index of the given array
// The equilibrium index of an array is an index such that the sum of elements at lower indexes is equal to the sum of elements at higher indexes.
// If there are no elements that are at lower indexes or at higher indexes, then the corresponding sum of elements is considered as 0.

function EquilibriumIndex(arr: number[]): number {
  let prefixSum: number[] = new Array(arr.length).fill(0);

  prefixSum[0] = arr[0];
  for (let i = 1; i < arr.length; i++) {
    prefixSum[i] = prefixSum[i - 1] + arr[i];
  }

  let rightSum: number = prefixSum[prefixSum.length - 1];
  let leftSum: number = 0;

  for (let i = 0; i < prefixSum.length; i++) {
    rightSum -= arr[i];

    if (rightSum == leftSum) {
      return i;
    }

    leftSum += arr[i];
  }

  return -1;
}

// calling functions
rangeSum(
  [1, 2, 3, 4, 5],
  [
    [0, 3],
    [1, 2],
  ]
);

specialIndex([1, 1, 1]);

prefixSum([1, 2, 3, 4, 5]);

EquilibriumIndex([-7, 1, 5, 2, -4, 3, 0]);

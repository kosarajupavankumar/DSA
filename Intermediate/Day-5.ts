// Topic : Q1. Maximum Subarray Easy

// Question : 1 --> You are given an integer array C of size A. Now you need to find a subarray (contiguous elements) so that the sum of contiguous elements is maximum. But the sum must not exceed B.

// Time Complexity --> O(N^2)
// Space Complexity -->  O(1)
function maxSubArray(arr: number[], B: number): number {
  let maxSum: number = 0;

  for (let i = 0; i < arr.length; i++) {
    let currentSum: number = 0;
    for (let j = i; j < arr.length; j++) {
      currentSum += arr[j];

      if (currentSum < B) {
        maxSum = Math.max(maxSum, currentSum);
      }
    }
  }
  return maxSum;
}

// Question : 2 --> Sum of All Subarrays

// Time complexity --> O(N)
// Space Complexity --> O(1)
function subArraySum(arr: number[]) {
  let sum: number = 0;
  let n: number = arr.length - 1;

  for (let i = 0; i < arr.length; i++) {
    let frequency = (i + 1) * (n - i);
    let contribution: number = frequency * arr[i];
    sum += contribution;
  }
  return sum;
}

// Question 3 : Given an array A of length N. Also given are integers B and C. Return 1 if there exists a subarray with length B having sum C and 0 otherwise

// Time complexity --> O(N)
// Space complexity --> O(1)
function subArrayWithGivenSum(arr: number[], length: number, sum: number) {
  let n: number = arr.length;
  let start: number = 0;
  let end: number = length - 1;
  let currentSum: number = 0;

  for (let i = start; i <= end; i++) {
    currentSum += arr[i];
  }

  if (currentSum == sum) {
    return 1;
  }

  start++;
  end++;
  while (end < n) {
    currentSum = currentSum - arr[start - 1] + arr[end];

    if (currentSum == sum) {
      return 1;
    }

    start++;
    end++;
  }

  return 0;
}

// Question : 4 --> Given an array A of N non-negative numbers and a non-negative number B,
// you need to find the number of subarrays in A with a sum less than B.
// We may assume that there is no overflow.

// Time Complexity --> O(N^2)
// Space Complexity --> O(N)
function subarrayWithSumLessthanB(arr: number[], B: number): number {
  let n: number = arr.length;
  let ans: number = 0;

  let prefixSum: number[] = new Array(n).fill(0);

  prefixSum[0] = arr[0];
  for (let i = 1; i < arr.length; i++) {
    prefixSum[i] = prefixSum[i - 1] + arr[i];
  }

  for (let start = 0; start < arr.length; start++) {
    for (let end = start; end < arr.length; end++) {
      let currentSum: number = prefixSum[end];

      if (start > 0) {
        currentSum -= prefixSum[start - 1];
      }

      if (currentSum < B) {
        ans++;
      }
    }
  }
  return ans;
}

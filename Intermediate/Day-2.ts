// Topic : Introduction to Arrays

// Question -1 : Given an array A and an integer B. A pair(i, j) in the array is a good pair if i != j and (A[i] + A[j] == B). Check if any good pair exist or not.

// Time complexity --> O(N logN)
// Space Complexity --> O(1)
function GoodPair(arr:number[], B : number) {
  arr.sort((a,b) => a-b);
  
  let start =0;
  let end = arr.length -1;
  // using two pointers technique 
  while(start < end){
    let currentSum = arr[start] + arr[end];

    if(currentSum == B){
      return 1;
    }else if(currentSum < B){
      start++;
    }else{
      end--;
    }
  }

  return 0;
}

// Question : 2 --> Given an array A of N integers and also given two integers B and C. Reverse the elements of the array A within the given inclusive range [B, C].

// Time Complexity --> O(N)
// Space Complexity --> O(1)
function reverseInRange(arr: number[], B: number, C : number) {
  let start : number = B;
  let end : number = C;
  
  while(start < end){
    const temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;

    start++;
    end--;
  }
  return arr;
}

// Question -3 : Given an integer array A of size N and an integer B, you have to return the same array after rotating it B times towards the right.

// Time Complexity --> O(N)
// Space Complexity --> O(1)
function rotateArrayWithKTimes(arr:number[], K : number): number[] {
  K = K % arr.length;
  //step :1 -->  reverse entire array
  reverseInRange(arr, 0 , arr.length-1);
  // step: 2 --> reverse the B elements
  reverseInRange(arr, 0, K-1);
  // step :3 -> reverse the remaning elements
  return reverseInRange(arr, K, arr.length-1);
}

// Question -4 : Given an array A of size N. You need to find the sum of Maximum and Minimum element in the given array.

// Time Complexity --> O(N)
// Space Complexity --> O(1)
function sumOfMaxAndMin(arr : number[]) : number{
  let max : number = Number.MIN_VALUE;
  let min : number = Number.MAX_VALUE;

  for(const num of arr){
    max = Math.max(max, num);
    min = Math.min(min, num);
  }

  return max+ min;
}

// Question -5 : You are given an integer array A. You have to find the second largest element/value in the array or report that no such element exists.

// Time Complexity --> O()
// Space Complexity --> O()
function secondLargestElement(arr:number[]) : number {
  let maxElement : number = Number.MIN_VALUE;
  let secondMaxElement : number = Number.MIN_VALUE;
  // base case
  if(arr.length <= 1){
    return -1;
  }

  for (const currentElement of arr) {
    if(currentElement > maxElement){
      secondMaxElement = maxElement;
      maxElement = currentElement;
    }else if(currentElement > secondMaxElement && currentElement < maxElement){
      secondMaxElement = currentElement;
    }
  }

  return secondMaxElement == Number.MIN_VALUE ? -1 : secondMaxElement
}

// calling functions
GoodPair([1, 2, 3, 4], 7);
reverseInRange([1,2,3,4], 2, 3);
rotateArrayWithKTimes([1, 2, 3, 4], 2);
sumOfMaxAndMin([-2, 1, -4, 5, 3]);
secondLargestElement([2, 1, 2]);
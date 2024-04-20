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

// calling functions
GoodPair([1, 2, 3, 4], 7);
reverseInRange([1,2,3,4], 2, 3);
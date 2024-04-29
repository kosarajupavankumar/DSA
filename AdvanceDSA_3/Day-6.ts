// Internal Implementation of hashing

// Question : 1 --> Shaggy has an array A consisting of N elements. We call a pair of distinct indices in that array a special if elements at those indices in the array are equal.Shaggy wants you to find a special pair such that the distance between that pair is minimum. Distance between two indices is defined as |i-j|. If there is no special pair in the array, then return -1.

function minimumDustanceBetweenSpecialIndex(arr: number[]): number {
  const map: Map<number, number> = new Map();

  let minDistance: number = Number.MAX_VALUE;

  for (let i = 0; i < arr.length; i++) {
    if (map.has(arr[i])) {
      let previousIndex = map.get(arr[i]);

      minDistance = Math.min(minDistance, i - previousIndex);
    }

    map.set(arr[i], i);
  }

  return minDistance === Number.MAX_VALUE ? -1 : minDistance;
}

// Question -2 : Given an array A of N integers.Find the length of the longest subarray in the array which sums to zero. If there is no subarray which sums to zero then return 0.

function longestSubArrayZeroSum(arr: number[]) {
  const map: Map<number, number> = new Map();

  let maxlength: number = 0;
  let sum: number = 0;

  for (let i: number = 0; i < arr.length; i++) {
    sum += arr[i];

    if (sum === 0) {
      maxlength = i + 1;
    }

    if (map.has(sum)) {
      maxlength = Math.max(maxlength, i - map.get(sum));
    } else {
      map.set(sum, i);
    }
  }

  return maxlength;
}

// calling function

// Question -1
const arr: number[] = [1, 3, 4, 3, 2, 2, 1, 5];
console.log(minimumDustanceBetweenSpecialIndex(arr));

// Question -2

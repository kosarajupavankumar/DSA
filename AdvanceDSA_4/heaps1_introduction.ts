// Topic 1 : Heaps introduction

// Question : 1 --> You are given an array A of integers that represent the lengths of ropes.
// You need to connect these ropes into one rope. The cost of joining two ropes equals the sum of their lengths.
// Find and return the minimum cost to connect these ropes into one rope.

// Time- Complexity --> O(n log n) where n is the number of ropes, because the main operation
// involves adding and removing elements from the min heap, which has a logarithmic time complexity.
// Space Complexity --> O(n) where n is the number of ropes, because we use a min heap to store
// the lengths of ropes, which can have at most n elements.

function minRopesToConnect(arr: number[]): number {
  // Initialize an empty min heap to store the lengths of ropes
  const minHeap: number[] = [];

  // Add all the elements of the array to the min heap
  for (const rope of arr) {
    addToMinHeap(minHeap, rope);
  }

  let totalCost: number = 0;

  // Connect the ropes until only one rope is left in the heap
  while (minHeap.length > 1) {
    // Extract the two shortest ropes from the min heap
    const rope1: number = pollFromMinHeap(minHeap);
    const rope2: number = pollFromMinHeap(minHeap);

    // Calculate the cost of joining the two ropes
    const cost: number = rope1 + rope2;

    // Add the cost to the total cost
    totalCost += cost;

    // Add the new rope formed by joining the two ropes back to the min heap
    addToMinHeap(minHeap, cost);
  }

  // Return the total cost of connecting all ropes into one
  return totalCost;
}

// Helper function to add an element to the min heap
function addToMinHeap(heap: number[], value: number) {
  heap.push(value); // Add the new value to the end of the array
  heapifyUp(heap, heap.length - 1); // Heapify up to maintain the min heap property
}

// Helper function to perform heapify-up operation
function heapifyUp(heap: number[], index: number): void {
  while (index > 0) {
    const parentIndex: number = Math.floor((index - 1) / 2); // Calculate parent index

    // If the parent is greater than the current element, swap them to maintain the min heap property
    if (heap[parentIndex] > heap[index]) {
      swap(heap, parentIndex, index);
      index = parentIndex; // Update index to the parent index
    } else {
      break; // If parent is smaller or equal, stop the heapify-up operation
    }
  }
}

// Helper function to swap two elements in an array
function swap(heap: number[], i: number, j: number): void {
  const temp: number = heap[i];
  heap[i] = heap[j];
  heap[j] = temp;
}

// Helper function to remove and return the minimum element from the min heap
function pollFromMinHeap(heap: number[]): number {
  if (heap.length === 0) {
    throw new Error("Heap is empty");
  }

  const top: number = heap[0]; // The root of the heap contains the minimum element
  heap[0] = heap[heap.length - 1]; // Replace the root with the last element
  heap.pop(); // Remove the last element from the heap
  heapifyDown(heap, 0); // Heapify down to maintain the min heap property
  return top; // Return the minimum element
}

// Helper function to perform heapify-down operation
function heapifyDown(heap: number[], index: number): void {
  const size: number = heap.length;

  while (true) {
    let smallest: number = index; // Assume the current index has the smallest value
    const leftChild: number = 2 * index + 1; // Calculate left child index
    const rightChild: number = 2 * index + 2; // Calculate right child index

    // Compare with left child and update smallest if left child is smaller
    if (leftChild < size && heap[leftChild] < heap[smallest]) {
      smallest = leftChild;
    }

    // Compare with right child and update smallest if right child is smaller
    if (rightChild < size && heap[rightChild] < heap[smallest]) {
      smallest = rightChild;
    }

    // If the current index is not the smallest, swap with the smallest child and continue heapifying down
    if (smallest !== index) {
      swap(heap, smallest, index);
      index = smallest; // Update index to the smallest child index
    } else {
      break; // If the current index is the smallest, stop the heapify-down operation
    }
  }
}

// Question 2 : Given a list containing head pointers of N sorted linked lists. Merge these given sorted linked lists and return them as one sorted list.

// Time Complexity --> O(NlogN)
// Space Complexity --> O(N)

class LinkedList {
  val: number;
  next: LinkedList | null;
  constructor(val: number) {
    this.val = val;
    this.next = null;
  }
}

function mergeKLists(lists: LinkedList[]): LinkedList {
  if (lists.length == 0 || lists == null) {
    return null;
  }

  const minHeap: LinkedList[] = [];
  // Add all nodes to the min-heap
  for (const list of lists) {
    let node: LinkedList = list;
    if (list != null) {
      minHeap.push(list);
      node = node.next;
    }
  }
  // Sort the min-heap
  minHeap.sort((a, b) => a.val - b.val);
  const dummy: LinkedList = new LinkedList(0);

  let tail: LinkedList | null = dummy;

  // Rebuild the sorted list
  for (const node of minHeap) {
    tail.next = node;
    tail = tail.next;
  }

  return dummy.next;
}

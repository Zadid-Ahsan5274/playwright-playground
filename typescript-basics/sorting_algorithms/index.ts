import {bubbleSort} from './bubbleSort';
import {selectionSort} from './selectionSort';
import {insertionSort} from './insertionSort';

const unsortedArray:number[] = [64, 34, 25, 12, 22, 11, 90, 5];

console.log("Unsorted Array: ",unsortedArray);
// console.log("After bubble sort: Sorted Array -> ",bubbleSort(unsortedArray));
// console.log("After selection sort: Sorted Array -> ",selectionSort(unsortedArray));
console.log("After insertion sort: Sorted Array -> ",insertionSort(unsortedArray));

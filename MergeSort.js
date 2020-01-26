//Bubble Sort, Insertion Sort, and Selection Sort - O(N^2) time complexity
//Merge Sort - O(n log n) - time complexity

//Created in 1948 by Neumann 

//Merge Sort is combination of:
    //splitting up, merging, and sorting 

//Arrays of 0 or 1 element are always sorted

//Works by decomposing an array into smaller arrays of 0 or 1 elements
//Then build up a newly sorted array by merging those smaller ararys


//Merge helper function
    //function that merges two sorted arrays 
    //This helper function creates a new array which is sorted 
    //and consists of all the elements in the two input arrays 
    //Will use a dual pointer algorithm, one pointer for each array that is passed in 

//Big O of Merge function
    //function runs in O(N + M) time 
    //O(N + M) space 
    //The function takes in 2 arguments which are arrays 
        //N is size of first argument, M is size of other argument
    //should not mutate arrays passed to it 
    //Big O of O(N + M) means we will visit each element in each array once 


//arr1 and arr2 must be sorted arrays 
function merge(arr1, arr2) {
    let results = [];
    let i = 0; //pointer for arr1
    let j = 0; //pointer for arr2
    while (i < arr1.length && j < arr2.length) { //this condition will only go until either pointer (i or j) reaches the end of their array 
        if (arr2[j] > arr1[i]) { //arr1[i] is smaller so we push the smaller value into results
            results.push(arr1[i]);
            i++;
        } else if (arr1[i] > arr2[j]) {
            results.push(arr2[j]);
            j++;
        }
    }

    //two subsequent while loops will push any values left in the arrays 
    while (i < arr1.length) { //if there are any elements left in arr1, push all into results
        results.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) { //if there are any elements left in arr2, push all into results
        results.push(arr2[j]);
        j++;
    }
    return results;
}

merge([1, 10, 50], [2, 14, 99, 100])

//Merge Sort
    //Most Merge Sort implmentations use recursion
    //Pseudocode
        //break up array into halves until you have arrays that are empty or have one element
        //probably use slice method on the array
        //once you have smaller sorted arrays, merge those ararys with other sorted arrays
        //until you are back at the full length of the array

function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
}
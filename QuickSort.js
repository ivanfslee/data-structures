//Big O - Quicksort
    //Time Complexity (Best)
    //O(N log N)

    //Time Complexity (Average)
    //O(N log N)

    //Time Complexity (Worst)
    //O(N^2)

    //Space Complexity
    //O(log n)

//Operates similarly to MergeSort
//Easiest to solve thorugh recursion
//Where we keep splitting up the array
//Until array is 0 or 1 element long 

//Works by selecting one element called 'PIVOT'
//And finding the index where the pivot should end up 
//in the sorted array

//We will move all numbers lower than the pivot to the left of pivot
//We will move all numbers greater than the pivot to the right of pivot

//Once this is done, the pivot is in the right place (its index in the array is correct and sorted)
//Then we recursively repeat the process for the left side and for the right side

//Pivot Helper Function 
    //Should mutate the array and not create a new array
    //function should return index of first element of array

    //Picking a Pivot
        //The runtime of quick sort depends partly on how/what pivot is selected
        //Ideally, pivot should be chosen so that it is roughly the median value in the data set we are sorting
        //For simplicity's sake, we will choose pivot to be the first element
        //Big O consequences of this is -
    
function pivot(arr, start = 0, end = arr.length + 1) {
    //ES2015 swap function
    //const swap = (arr, idx1, idx2) => {
    //     [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    // };

    function swap(array, i, j) {
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    var pivot = arr[start]; //we make the pivot the first element 
    var swapIdx = start;

    for (var i = start + 1; i < arr.length; i++) {
        if (pivot > arr[i]) {
            swapIdx++;
            swap(arr, swapIdx, i);
        }
    }
    swap(arr, start, swapIdx); //swap the first element (start) with swapIdx
    return swapIdx;
}

pivot([4,8,2,1,5,7,6,3]);


function quickSort(arr, left = 0, right = arr.length -1) {
    let pivotIndex = pivot(arr, left, right);

    //left 
    quickSort(arr, left, pivotIndex - 1);

    //right 
    quickSort(arr, pivotIndex + 1, right);
}
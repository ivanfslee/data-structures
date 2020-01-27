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

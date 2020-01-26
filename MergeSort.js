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

//Big O of Merge function
    //function runs in O(N + M) time 
    //O(N + M) space 
    //The function takes in 2 arguments which are arrays 
        //N is size of first argument, M is size of other argument
    //should not mutate arrays passed to it 
    //Big O of O(N + M) means we will visit each element in each array once 

//merge([1, 10, 50], [2, 14, 99, 100])
//we'll use 
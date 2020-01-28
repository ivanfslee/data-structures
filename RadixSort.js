//Comparison Sorts - Comparing one value to another value 
    //Average Time Complexity
    //Bubble Sort - O(N^2)
    //Insertion Sort - O(N^2)
    //Selection Sort - O(N^2)
    //Quick Sort - O(N log N)
    //Merge Sort - O(N log N)

//The best average case time complexity for comparison sort algorithm is N log N
//There is a mathematical bound to the number of comparisons required to sort a list 

//Can we do better than N log N?
    //Yes, but not by making comparisons 
    //Other kinds of algorithms take advantage of the data type and properties inherent to those data types 
    //e.g. data is integers - radix sort

//Radix Sort 
    //Special sorting algorithm that works on lists of numbers 
    //It never makes direct comparisons between elements 
        //e.g. x is greater/less than y 
    //It exploits the fact that information about the size of a number
    //is encoded in the number of digits the number has 

//Big O - Radix Sort 
    //n is length of array we are sorting
    //k is length of those numbers (i.e. number of digits)
    //k matters because number of digits may be very large 

    //caveat - theoretically, radix sort can be faster than any of the 
    //comparison sorts, but because of limitations on how computers actually store
    //numbers in memory, this may not actually be the case
    // k's limit is log N 
    
    //Time Complexity (best)
        //O(nk)
    //Time Complexity (average)
        //O(nk)
    //Time Complexity (worst)
        //O(nk)
    //Space Complexity 
        //O(n + k)
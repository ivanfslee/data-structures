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
    //It never makes comparisons between elements 
        //e.g. x is greater/less than y 
    //It exploits the fact that information about the size of a number
    //is encoded in the number of digits 
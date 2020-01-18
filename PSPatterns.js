//Some patterns 
    //Frequency counter
    //Multiple pointers
    //Sliding window
    //Divide and Conquer
    //Dynamic Programming
        //Memoization
    //Greedy Algorithms
    //Backtracking 
    //Others~
        //Declarative Programming??
        //Functional Programming?

//Frequency Counters Pattery
    //This pattern uses objects or sets to collect values/frequencies of values
    //This can often avoid the need for nested loops or O(N^2) operations with arrays/strings
    //Useful if you have multiple inputs and need to compare/contrast them
    //Typically is O(N) time (naive solution of nested for loops is O(N^2) time)
    //someArray.indexOf(someArray[i]);  //indexOf method is O(N) time 

//Multiple Pointers Pattern
    //creating pointers or values that correspond to an index or position
    //and move towards the beginning, end, or middle based on a certain condition
    //VERY efficient for solving problems - O(N) typically  
    //Minimal space complexity as well - O(1) typically 


// Sliding Window Pattern
    //This pattern involves creating a window
    //which can either be an array or number from one position to another
    //Depending on a certain condition, the window either increases or closes 
    //(and a new window is created)
    //Very useful for keeping track of a subset of data that is continious in an array/string etc


//Divide and Conquer 
    //This pattern involves dividing a data set into smaller chunks
    //Then repeating a process with a subset of data
    //This pattern can tremendously DECREASE time complexity
//Objectives
    //What is recursion and how can it be used
        //Recursion - a process (a function in this case) that calls itself
        //Usage Examples
            //JSON.parse/JSON.stringify source code uses recursive calls
            //document.getElementById and DOM traversal algorithms both use recursion 
                //DOM is a tree structure and you can use recursion to go through it
            //object traversal 
            //search through more complex data structures
            //sometimes a cleaner implementation versus an iteration implmentation
        
    //Understand two essential components of a recursive function
        //1. base case
        //2. different input


    //Visualize the call stack to better debug and understand recursive functions

    //Use helper method recursion and pure recursion to solve more difficult problems 

//The Call Stack
    //In almost all programming languages there is a built-in data structures that manages
    //what happens when functions are invoked
    //functions often are waiting for other functions to be invoked
    //There is typically an order to the function calls 

    //The Javascript Call Stack (Stack data structure)
        //Any time function is invoked, it is placed (pushed)
        //on top of the call stack
        //When javascript sees the return keyword or when the function ends
        // the compiler will remove (pop) it from call stack
    
    //With recursive functions
    //we keep pushing a the same function call (with a different input) 
    //onto the call stack until we reach the base case

//The base case
    //Most important concept to understand 
    //base case = THE CONDITION WHEN THE RECURSION ENDS 
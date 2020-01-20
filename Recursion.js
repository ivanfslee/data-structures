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


//Recursion Example 1 
function sumRange(num) {
    if (num === 1) return 1; //base case
    return num + sumRange(num - 1); //recursive call with different input
}

//sumRange(3);
    //return 3 + sumRange(2);  //sumRange(3) returns 3 plus whatever sumRange(2) is
                    //return 2 + sumRange(1);  // 2 plus
                                    //return 1;
//outputs 6


//Recursion Example 2 - Factorial

//factorial iteration version
function factorialIterative(num) {
    let total = 1;
    for (let i = num; i > 1; i--) {
        total *= i;
    }
    return total;
}

//factorial using recursion 
function factorialRecursive(num) {
    if (num === 1) return 1; 
    return num * factorialRecursive(num - 1);
}


//Common Recursion Pitfalls 
    //No base case -> Maximum call stack size exceeded
    //Forgetting to return or returning the wrong thing
    //Both these pitfalls -> Leads to stack overflow 


//Design Pattern
    //Helper Method Recursion Pattern 
        //Recursive function inside of another function 

function collectOddValues(arr) {
    let result = [];

    function helper(helperInput) { //helper method recursive function
        if (helperInput.length === 0) { //base case
            return;
        }

        if (helperInput[0] % 2 !== 0) { //if first element is odd
            result.push(helperInput[0]);  //push first element into result
        }

        helper(helperInput.slice(1)); //recursive function call with different input - create array starting from second element and call helper function again
    }

    helper(arr); //recursive function call 

    return result;
}

//Pure Recursion Alternative

function collectOddValuesPure(arr) {
    let newArr = [];

    if (arr.length === 0) {
        return newArr;
    }

    if (arr[0] % 2 !== 0) {
        newArr.push(arr[0]);
    }

    newArr = newArr.concat(collectOddValuesPure(arr.slice(1)));
    return newArr;
}

//collecctOddValuesPure([1,2,3,4,5]);
//[1].concat(collecctOddValuesPure([2,3,4,5]))
                    //[].concat(collecctOddValuesPure([3,4,5]))
                                        //[3].concat(collecctOddValuesPure([4,5]))
                                                            //[].concat(collecctOddValuesPure([5]))
                                                                            //[5].concat(collecctOddValuesPure([]))  
                                                                                                //[]  - reaches base base
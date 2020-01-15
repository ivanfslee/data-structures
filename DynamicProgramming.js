//Define dynamic programming
    //Method for solving complex problem by breaking it down into a collection of simpler subproblems
    //Solving each of those subproblems just once
    //And storing their solutions 
    // "Using past knowledge to make solving future problems easier"
    //Memoization!! storing solutions we calculate to use them again later because there are repeated/duplicate calculations 

//DYNAMIC PROGRAMMING ONLY WORKS ON PROBLEMS WITH BOTH:
    //1. optimal substructure
    //2. overlapping subproblems 

//explain overlapping subproblems
    //Overlapping subproblems are present if 
    //problem can be broken down into subproblems 
    //which are reused several times (duplicated/overlap subproblems)
        //e.g. fibonacci sequence
    //overlap means exactly the same 

//Understand what optimal substructure is:
    //problem has optimal substructure if:
    //optimal solution can be constructed from optimal solutions of its subproblems
    //e.g. finding shortest path - relies on finding the optimal solution of vertices along the path to the original problem

//recursive solution of fibonacci 
//there is no dynamic programming here
//but there is overlapping subproblems present 
function fibRecursion(n) {
    if (n <= 2) return 1; //base case 
    return fib(n - 1) + fib(n - 2);
}

//Big O of fibonacci recursion solution 
    // approximately O(2^n) exponential!!! time complexity
    // closer value is 1.6^n time complexity

//Memoization!!!!
    //Remembering previously calculated values
    //Memoization - storing the results of expensive function calls and returning the cached result when the same inputs occur again


//Memo-ized solution for fibonacci sequence
    //Big O:
        //Recursive Fibo - O(2^N) - exponential time complexity
        //Memo-ized Fibo - looking up value in array is constant time 
            //Javascript/chrome browser has a maximum call stack of ~10,000
            //O(N) time complexity for memo-ized fibonacci even though it is recursive
            //Size Complexity of memo-ized version is worse than tabulated fibo version
        //Tabulated Fibo - 
            //O(N) - it loops from 3 to N - so overall time complexity is O(N)
            //Size complexity is better than memo-ized version 
            
function fibMemo(n, memo = []) { //memo stores fib(n) at the nth index in memo array
    if (memo[n] !== undefined) { //if we have fib(n) in memo at index n, return that value
        return memo[n];
    }

    if (n <= 2) { //base case 
        return 1;
    }

    var res = fib(n - 1, memo) + fib(n - 2, memo); //fib calls store in variable 'res' and stored in memo
    memo[n] = res;
    return res;
}

//alternative is using an obj as memo 
//alternative is preload base base case
    //function fib(n, memo = [undefined, 1, 1]) - with this you don't need lines 47-49


//Bottom-up Method
    //With the previous memo-ized fibonacci version, that was a top-down approach
    //A bottom-up method uses TABULATION 

    //Tabulation
        //Storing result of a previous result in a 'table' (usually an array)
        //usually done using iteration
        //better space complexity can be achieced using tabulation
        //we start at the bottom (usually the smallest sub-problem) and we store results into a 'table'

//Tabulated fibonacci version

function fibTabul(n) {
    if (n <= 2) {
        return 1;
    }

    var fibNums = [0, 1, 1];
    for (var i = 3; i <= n; i++) { //loop from 3 to n
        fibNums[i] = fibNums[i - 1] + fibNum[i - 2]; //will add values to fibNums array 
    }
    return fibNums[n];
}
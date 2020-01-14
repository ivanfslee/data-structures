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
function fib(n) {
    if (n <= 2) return 1; //base case 
    return fib(n - 1) + fib(n - 2);
}

//Big O of fibonacci recursion solution 
    // approximately O(2^n) exponential!!! time complexity
    // closer value is 1.6^n time complexity
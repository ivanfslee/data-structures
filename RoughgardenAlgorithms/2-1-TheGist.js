//Video 2-1 The Gist - Asymptotic Analysis
    //Importance:
        //Vocabulary for the design and analysis of algorithms (e.g. 'big-oh' notation)
        //'sweet-spot' for high-level reasoning about algorithms

        //course enough to suppress architecture/language/compiler-dependent details

        //sharp enough to make useful comparisons between different algorithms
        //especially on large inputs (e.g. sorting or integer multiplication)

    //Asymptotic Analysis
        //High-level idea: 
            //suppress constant factors and lower-order terms
                //Lower-order terms become irrelevant when dealing with large input sizes
                //Constant factors - too system-dependent
        
        //Example: - equate (6n log n) + 6n with just n log n
            //Terminology: running time is O(n log n) - 'big oh n log n' - constant factors and lower order terms are dropped
                //where n = input size (e.g. length of input array)
        
        //Example: One Loop 
            //Problem: does array A contain the integer t?
                //given A (array of length n) and t (an integer)

                //for i = 1 to n 
                    //if A[i] == t return True
                //return False

            //Question: What is the running time?
                //O(n)
                //linear time
        
        //Example: Two Loops in Sequence
            //Problem: does array A or array B contain t?
                //given A, B (arrays of lengh n) and t (an integer)
                
                //for i = 1 to n
                    //if A[i] == t return True
                //for i = 1 to n
                    //if B[i] == t return True
                //return False
            
            //Question: What is the running time?
                //O(n)
                //linear time 

            //The number of operations is rougly double that of the previous example
            //But that would be a constant independent of the length n of the array
            //That constant (the doubling) gets suppressed by Big O notation

            //Intuitively, if you double the input length, the number of operations increases by a factor of 2

        //Example: Two Nested Loops
            //Problem: do arrays A, B have a number in common?
            //given arrays A, B of length n 

            //for i = 1 to n
                //for j = 1 to n 
                    //if A[i] == B[j] return True
            //return False
        
            //Question: What is the running time?
                //O(n^2)
                //quadratic running time 
            
            //Intuitively, if you double the input length, the number of operations increases by a factor of 4

        //Example: Two Nested Loops (II)
            //Problem: does array A have duplicate entries?
            //given array A of length n

            //for i = 1 to n
                //for j = i + 1 to n
                    //if A[i] == A[j] return True
            //return False

            //Question: What is the running time?
                //O(n^2)
                //quadratic running time


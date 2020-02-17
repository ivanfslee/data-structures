////////////////////////////////////////////////////////////////////
//Tim Roughgarden Notes
    //Video 1 - 1
    //Why study algorithms?
    //Uses of Algorithms
        //Routing and communication networks piggyback on classical shortest path algorithms
        //Public key cryptography
        //Database indices rely on balanced search tree data structures
        //Computational biology uses dynamic programming algorithms to measure genome similarity
    //Algorithms - play a key role in modern technological innovation
        //Performance gains due to algorithms exceeded the dramatic performance gains due to increased processor speeds 
    
    //Video 1 - 2
    //Integer Multiplication 
        //Transform an input - 2 numbers, into an output, their product 

    //IOCE - input/output/constraints/edge cases

    //Pattern for the course
        //1. Define a computational problem
        //2. Say what input is, say what output is 
        //3. Give a solution, giving an algorithm that transforms the input to the output
    
    //Integer Multiplication
        //Input: 2, n-digit numbers x and y
        //Output: the product x * y
    
        //The way we assess the performance of the algorithm is through the number of primitive operations that it performs 

        //Defining a 'Primitive Operation' - add or multiply 2 single-digit numbers

        //We then count the number of these primitive operations that the integer multiplication algo performs as a function of the length of the input numbers 

        //Analysis of number of operations as a function of the input length n 
            //The number of primitive operations is roughly 4n^2
            //Upshot: number of operations overall is less than or equal to a constant times n^2 (e.g. 4 * n^2)

    //Algorithm Designer's Mantra
        //"Perhaps the most important principle for the good algorithm designer is to refuse to be content"
            //Aho, Hopcroft, and Ullman, The Design and Analysis of Computer Algorithms, 1974

        //"Can we do better?"

    //Video 1 - 3
    //Karatsuba Multiplication Algo


    //Recursive Algorithm for Multiplying Integers with even number of digits 
        //only applies to multiplying numbers with even number of digits
        //Multiplying 2 numbers x and y - can be expressed in:
            //x = 10^n/2 * a + b
            //y = 10^n/2 * c + d
            //where a, b, c, d are n/2 digit numbers

            //e.g. Multiplying 5678 * 1234
            //a = 56, b = 78, c = 12, d = 34
            //Then x * y = (10^n/2 * a + b) * (10^n/2 * c + d)
            //equation -> x * y = 10^n * a * c + 10^n/2 * (a * d + b * c) + b * d
            //Idea: recursively compute ac, ad, bc, bd then compute the equation in the straightforward way you learned in 3rd grade 
            //Base case would be when multiplying single digit numbers

            //Is the Karatsuba algo/recursive algorithm better than the algorithm you learned in 3rd grade????

            //Instead of recursively computing 4 times - ac, ad, bc, bd, we can get away with 3 recursive calls
            //x * y = 10^n * a * c + 10^n/2 * (a * d + b * c) + b * d
            //From the equation, we want the products of ac, ad, bc, bd

            //Step 1. recursively compute ac
            //Step 2. recusrively compute bd
            //Step 3. recursively compute (a + b)(c + d) = ac + ad + bc + bd
            //Step 4. Gauss's Trick: Subtract step 1 and step 2 from step 3.  Step 3 - Step 1 - Step 2.  Results in ad + bc 

            //Upshot: only need 3 recursive multiplications (and some additions)

    //Karatsuba Multiplication is a kind of divide and conquer algorithm 

    //Video 1 - 4
    //About the Course
        //Course Topics
            //1. Vocabulary for design and analysis of algorithms 
                //Big O Notation
                //'sweet spot' for high-level reasoning about algorithms
            //2. Divide and conquer algorithm design paradigm
                //Other design paradigms in later course
                //Divie and conquer applies to - integer multiplication, sorting, matrix multiplication, closest pair
                //General analysis methods ('Master Method/Theorem')
            //3. Randomization in algorithm design
                //Randomized algorithm will have different executions when you run it over and over again, even on the same input 
                //Will apply to - quicksort (picking a pivot), primality testing, graph partitioning, hashing 
            //4. Primitives for reasoning about graphs
                //Primitives are very fast, sometimes as fast as reading the input 
                //Using primitives to model:
                    //connectivity information, shortest paths, structure of information and social networks
            //5. Use and implementation of data structures
                //heaps, balanced binary search trees, hashing and some variants (e.g. bloom filters)

    //Topics in Sequel Course        
        //Course Topics
            //Greedy algorithm design paradigm
            //Dynamic programming algorithm design paradigm
            //NP-complete problems and what to do about them
            //Fast heuristics with provable guarantees
            //Fast exact algorithms for special cases
            //Exact algorithms that beat brute-force search 

    //Supplemental Books for Algorithms and this Roughgarden Course
        //Kleinberg/Tardos, Algorithm Design
        //Free Online - Dasgupta/Papadimitriou/Vazirani, Algorithms
        //Cormen/Leiserson/Rivest/Stein, Introduction to Algorithms
        //Free Online - Follows Roughgarden course - Mehlhorn/Sanders, Data Structures and Algorithms: The Basic Toolbox
    
    //Video 1-5
    //Merge Sort Motivation and Example 
        //Why study merge sort?
            //it's a good introduction to divide and conquer paradigm
            //it improves over selection sort, insertion sort, and bubble sort
            //it motivates guiding principles for algorithm analysis 
            //algorithm analysis - (i.e. worst-case and asymptotic analysis)
            //merge sort uses recursion, which allows us to analyze it and generalize it for other algorithms that use recursion
        
    //Merge Sort 
        //input - array of n numbers, unsorted - [5, 4, 1, 8, 7, 2, 6, 3]
        //output - same numbers, sorted in increasing order - [1, 2, 3, 4, 5, 6, 7, 8]
        //note: we say that the elements in the array need to be distinct (unique)
        //if there are duplicates, algorithm would still work 
        
        //overall - merge sort splits array in halves until it reaches a base case of 0 or 1 element sorted arrays
        //then merges those sorted arrays 

    //Video 1-6
    //Merge Sort Pseudocode
        //recursively sort 1st half of input array
        //recursively sort 2nd half of input array
        //merge two sorted sublists into one 
        //note: this pseudocode ignores/doesn't mention base cases - you need the base cases in your code for merge sort to work
        //note: we also don't mention if number of elements in array is odd 
        //note: he also doesn't go into detail about the recursion, as it depends on the programming language

        //At this point we have 2 sorted subarrays - left half and right half
        //The next step is to merge 

        //Pseudocode for merge subroutine
            //C = output array (length = n)
            //A = 1st sorted array (length = n/2)
            //B = 2nd sorted array (length = n/2)

            //i = 1 (pointer for array A)
            //j = 1 (pointer for array B)

            //for k = 1 to n
                //if A(i) < B(j)
                    //C(k) = A(i) (push element into output array)
                    //i++         (increment pointer)
                //else B(j) < A(i)
                    //C(k) = B(j)
                    //j++
            //end

            //note: we are ignoring some cases like when i and j exceed length of their respective array 
            //if it does reach the end of the array, just copy over the rest of the elements in the other array into the output array

    //Merge Sort Running Time?
         //Key Question: What is the running time of merge sort on array of n numbers?
         //running time is roughly equal to the number of lines of code executed 

        //2 operations
            //i = 1 (pointer for array A)
            //j = 1 (pointer for array B)
        
        //the above 2 operations plus 4 operations per iteration in the loop 

        //upshot: running time of the merge subroutine given an array of m numbers 
        //is at most 4m + 2 operations 

        //We can say that rather than 4m + 2, we can say at most 6m operations because m is at least 1 
        
        //That is the number of operations for the merge subroutine
        //How about the number of operations for the splitting of the arrays - (the recursive calls) 

        //Our Claim: merge sort requires at most (6n * log n) + 6n operations to sort n numbers 

        //recall bubble, selection, and insertion sort have a constant time n^2 running time 

        //Logarithm: how many times you have to divide by 2 to get 1 or number below 1 

    // Video 1-7
    //Merge Sort Analysis
    //We will substantiate our claim

    //Claim: For every input array of n numbers,
    //Merge Sort produces a sorted output array and uses at most
    //(6n * log n) + 6n operations

    //Proof of claim (assuming n = power of 2)
    //We will use 'recursion tree' method to prove
    // level 0 - outer call to merge sort    root  O    entire input
    //                                           /   \
    //level 1 - 2 recursive calls               O     O
    //                                         / \   / \
    //level 2 - 2 recur calls for each child  O   O O   O
    //                                        .   . .   .
    //                                        .   . .   .
    //what level do the leaves reside?        .   . .   .
        //level log n 
    //At level log n - these are where there are single-element arrays and is our base cases for the recursion
    //The input size is being decreased by a factor of 2 for each level of the recursion
    //Since we start at level 0, the total number of levels is (log n) + 1

    //There are a total of log n + 1 levels 

    //j = level (recursion level)
    //j = 0, 1, 2,..., log n 
    //Each level has 2^j subproblems (subproblems = arrays). That is, the number of split arrays is 2^j
    //Each array/subproblem has n/2^j elements in them 

    //We can now calculate total number of operations at level j
    //2^j * 6(n/2^j) 
    //Recall - the 6 is the work per level-j subproblem 
    //6m is the number of operations done for the merge subroutine, m is the number of elements in the array
    //in this case, n/2^j = m 
    //We can substitute n/2^j for m 

    //We get this upper bound for the total number of operations at level j - 2^j * 6(n/2^j) 
    //2^j * 6(n/2^j) 
    //The 2^j's cancel out, leaving just 6n
    //Which means that the total number of operation at level j is independent of j
    //Said another way, each level has the same number of upper bound operations - 6n
    //That is, we do AT MOST 6n operations per recursion level 

    //We can then calculate the total number of opertions for merge sort by
    //multiplying number of operations per level times the total number of levels
    //number of operations per level = 6n
    //total number of levels = log n + 1 

    //So the total number of operations would be - 6n * (log n + 1)
    //or (6n * log n) + 6n  

    //note: why do the 2^j's cancel out?
        //2^j - the number of subproblems/arrays doubles each time
        //but at the same time the number of elements in each subproblem/arrays is cut in half each time
        //So in effect, the 2^j's cancel each other out. 

    //Video 1-8
    //Guiding Principles for Analysis of Algorithms 
        //1. Use 'worst-case' analysis - we define the upperbound of the running time of our algo
                //Our running time bound holds for EVERY input of length n
                //With worst-case analysis - we are making no assumptions about where the input comes from 
                //Appropriate for 'general-purpose' routines
                //Mathematically more tractable than 'average-case' analysis
                

            //Other types of analysis 
                //'average-case' analysis - the avg running time of algo based on frequency of certain inputs
                //benchmarks - we define a typical input size that reflects its usage case/scenario 
                //note: for both these types of analysis - requires specific domain knowledge
                    //you need to know what inputs are more common than others
                    //what is the typical input etc 
        
        //2. Ignore constant factors and lower-order terms
            //Justifications:
                //1. way easier
                //2. constants depend on architecture/compiler/programmer/language etc
                    //If you are optimizing a critical algo for your start-up - constants are important
                //3. lose very little predictive power
        //note: for programming languages, if input size is small, language may use insertion sort instead
        //then for large input sizes, the language may switch to merge sort
        //Typically, with smaller input sizes you use the algorithm with the smaller constant factor
        //With larger input sizes, you use the algorithm with better rate of growth
        //Python's sort is 'Tim Sort' which is a combination of insertion and merge sort

        //3. Asymptotic Analysis - focus on large input sizes
            //Focus onrunning time for large input sizes n
            //e.g. merge sort (6n log n) + 6n is 'better than' insertion sort (1/2)n^2
                //this is only true for large input sizes
                //For small input sizes, (1/2)n^2 is actually faster
    
        //What is a "fast" algorithm?
            //This course: adopy these three biases as guiding principles
                //fast algorithm is one where worst-case running time grows slowly with input size
                //worst-case is a 'sweet spot' : mathematical tractability and predictive power

                //Holy grail would a linear time complexity or faster. 
                //That is, an algo where number of operations grows proportionally with increase in input size
                //merge sort runs super-linear (n log n)

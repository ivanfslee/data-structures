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
//Video 2-2
//Big Oh Notation
    //Usually, the worst-case running time of an algorithm

    //English Definition
    //T(n) = function on n = 1, 2, 3,.....

    //What do we mean when we say a function T(n) is big-oh of f(n)?

    //Question: When is T(n) = O(f(n))?
        //Answer: If eventually (for all sufficiently large n), T(n) 
        //is bounded above by a constant multiple of f(n)

    //Formal Definition
        //T(n) = O(f(n)) 
        //if and only if there exist constants c, n0 > 0 such that 
        //T(n) is less than or equal to cf(n) 
        //for all n greater than or equal to n0

//Video 2-3
//Basic Examples
    //Examples to primarily show Big O notation's purpose - 
    
    //Example 1 - we prove something IS big o something else
    //Namely - to suppress constant facotrs and lower order terms 

    //Prove the following claim:
        //Claim: if T(n) = (a sub k * n^k) + ... + (a sub 1 * n^1) + (a sub 0) then T(n) = O(n^k)

        //The claim is saying Big O does suppress constant factors and lower order terms 
        //If you have a polynomial, then all you have to worry about is what
        //is the highest power in that polynomial and that dominates its growth
        //as 'n' goes to infinity 

    //How to show that one function is the Big O of another?
        //The whole key is to find this pair of constants, c and n sub 0
        //Where c quantifies the constant multiple of the function you're trying to prove Big O of
        //Where n sub 0 quantifies what you mean by 'for all sufficiently large n'

        //Proof
            //Choose n sub 0 = 1 and c = |a sub k| + |a sub k - 1| + ... + |a sub 1| + |a sub 0|
                //Needs to be absolute value because we didnt assume the original polynomial 
                //had non-negative coefficients
                //We claim that these constants work
                //We'll be able to prove/assert this definition of Big O Notation 

                //note: ∀ - 'for all' or 'for any'

                //We need to show that ∀ n ≥ 1  (for all n greater than or equal to 1) - it is 1 because we chose n sub 0 = 1       //≤
                //what we are proving ->   ∀ n ≥ 1, then T(n) ≤ c * n^k

                //We have, for every n ≥ 1,
                //T(n) ≤ |a sub k|n^k + ... + |a sub 1|n^1 + |a sub 0|
                //We then replace all n's with n^k and the equation still holds true
                //T(n) ≤ |a sub k|n^k +... + |a sub 1|n^k + |a sub 0|n^k
                //All the constants, |a sub whatever| can now be added up because they have the same factor n^k
                //That leaves us:
                //T(n) = c * n^k 
                //Which is what we wanted to prove
    
    //Example 2 - we will prove something is NOT big o of something else
        //Claim: for every k ≥ 1, n^k is NOT O(n^(k - 1)) . (e.g. n^3 is not O(n^2))

        //Proof: by contradiction 
            //Suppose the opposite is true -> n^k = O(n^(k - 1))
            //Then ∃ constants c, n sub 0 > 0 such that //there exists constants c and n sub 0
            //n^k ≤ c * n^(k - 1)     ∀ n ≥ n sub 0     //for all n greater than or equal to n sub 0
            //But then (cancelling n^k - 1 from both sides)
            //Leaves us with n ≤ c    ∀ n ≥ n sub 0     
            //which is clearly false (contradiction) which proves that n^k is NOT O(n^(k - 1))
            //So different powers of polynomials do not collapse, they really are distinct with respect to Big O notation



            /////////////
            //  ≥   ≤
            //note: ∀ - 'for all' or 'for any'

            /////////////
            // ∃, it is read as “there exists”. For example: ∃n∈N:n2=n means “there exists a natural number n such that n is equal to its own square”.

            // A related symbol is ∀, meaning “for all”. For example, the expression ∀n∈N∃m∈N:m=n+1 means that for all natural numbers n there exists a natural number m which is exactly one more.

            /////////////
            //∈ means "Element of".

            // For example, a∈A means Element of: a is in A.

            // A numeric example would be: 3∈{1,2,3,4,5}.

            // Ω

            // θ
            /////////////

//Video 2-4
//Big Omega and Big Theta
//If big o is analogous to less than or equal to        ≤     
//then, omega is analogous to greater than or equal to  ≥
//and then theta is analogous to equal to               =

    //Big Omega  Ω
        //Definition:
            // T(n) = Ω(f(n)) - T of n is equal to big omega of f of n
            //if and only if ∃ constants c, n sub 0,  such that T(n) ≥ c * f(n)  ∀ n ≥ n sub 0

    //Big Theta  θ
        //Definition:
            // T(n) = θ(f(n)) if and only if 
            // T(n) = O(f(n)) AND T(n) = Ω(f(n))

            //Another way to think about this is that eventually, T(n) is sandwiched between two different
            //constant multiples of f(n)

            //Equivalent statement:
                // ∃ constants c sub 1, c sub 2, n sub 0, such that 
                // c sub 1 * f(n) ≤ T(n) ≤ c sub 2 * f(n)
                // for all n ≥ n sub 0
    
    //Big Theta is a stronger statement because it defines both an upper and lower bound 
    //Big Omega defines a lower bound for an algorithm
    //Big O defines an upper bound for an algorithm 

    //Typically, we will define Big O, when Big theta is a stronger statement, because as 
    //algorithm designers, what we really care about is the upper bound.
    //We want guarantees on how long our algorithms are going to run
    //so naturally, we focus on the upper bounds and not so much on the lower bounds

    //Practice Problem 1:
        //T(n) = .5n^2 + 3n
            //These 3 are true:
                //T(n) = Ω(n) - Not a great lower bound, but T(n) does grow at least as fast as a linear function
                //T(n) = θ(n^2) - Because T(n) has quadratic growth this is correct 
                //T(n) = O(n^3) - Not a great upper bound (it could be more accurate), but it is legitimate
                    //Rate of growth of T(n) is at most cubic (and is at most quadratic) 
            

    //Little-Oh Notation
        //Big O notation is informally a less than or equal to type relation
        //Little-Oh is a strictly less than relation 
            //Intuitively, it means that one function is growing strictly less quickly than another 
            //So, formally:
            //Definition:
                // T(n) = o(f(n)) if and only if for ALL constants c > 0, 
                // ∃ constant n sub 0, such that:
                //T(n) ≤ c * f(n)   ∀ n ≥ n sub 0

//Video 2-5
//Additional Examples Review 

//Example 1
    //Claim: 2^(n + 10) = O(2^n)

    //Proof: need to pick constants c and n sub 0 such that 
        //(* equation) ->     2^(n + 10) ≤ c * 2^n   ∀ n ≥ n sub 0

    //We can simplify the claim 
        //2^(n + 10) = (2^10) * (2^n) = 1024 * 2^n

    //So if we choose c = 1024 and n sub 0 = 1, then the * equation will hold true

//Example 2
    //Claim: 2^10n is NOT O(2^n)
    //Proof: by contradiction. If 2^10n = O(2^n), then 
    // ∃ constants c, n sub 0 > 0 such that:
    //2^10n ≤ c * 2^n   ∀ n ≥ n sub 0

    //But then after we remove 2^n from both sides, we get:
    //2^9n ≤ c      ∀ n ≥ n sub 0
    //Which is certainly false 

//Example 3
    //Claim:
        //For every pair of (positive) functions, f(n), g(n)
        // max (f, g) = θ(f(n) + g(n))

    //Proof:
        //[ max (f, g) = θ(f(n) + g(n))]
        //For every n, we have: 

        //#1 -> max(f(n), g(n)) ≤ f(n) + g(n) 

        //and 

        //#2 -> max(f(n), g(n)) ≥ 1/2(f(n) + g(n))

        // Thus combine #1 and #2: 
            //1/2((f(n) + g(n)) ≤ max(f(n), g(n)) ≤ f(n) + g(n) 
            //for all n ≥ 1

            //where n sub 0 = 1, c sub 1 = 1/2, c sub 2 = 1

        //Therefore:
            //max(f, g) = O(f(n) + g(n))

//Video 3-1
//On log n Algorithm for Counting Inversions 
    //The Divide and Conquer Paradigm
        //1. Divide problem into smaller subproblems - sometimes the division is in your mind and is more conceptual
            //other times, it is in the code, you copy the input into new arrays and divide them
        //2. Conquer subproblems via recursive calls
        //3. Combine solutions of subproblems 
            //generally, most of ingenuity happens in this step
            //Sometimes ingenuity in the first step in dividing, as well 

    // The Problem
        //Input: array A containing the numbers 1, 2, 3 ... in some arbitrary order

        //Output: determine the number of INVERSIONS
            //inversions definition: number of pairs (i, j) of array indices with i < j and A[i] > A[j] 
            //If an array is in order, the number of inversions is 0
        //Examples and Motivation
            //Example: [1, 3, 5, 2, 4, 6]
                //Inversions:
                    //(3, 2)
                    //(5, 2)
                    //(5, 4)
            
            //Motivation: 
                //Why would you want to solve this?
                    //Numerical similarity measure between two ranked lists
                    //i.e. quantify how close 2 ranked lists are to each other 
                    //i.e. how similar/dissimilar 2 ranked lists are 
                //Another Application:
                    //'collaborative filtering' - You can compare the lists of 2 users on amazon - and if they are similar, you can have recommendations 
            
            //What is the largest-possible number of inversions that a 6-element array can have ?
                //Answer: 15
                //In an n element array, the largest number of inversions is n choose 2. 
                //also known as n(n - 1) / 2 
                //The worst case is if array is in reverse sorted order. 
            
            //High-level Approach 
                //Brute-force: O(n^2) - recall n choose 2 inversions is quadratic
                    //Set up double for-loop, one goes through i, another goes through j bigger than i
                    //Then we check each pair ij individually with i less than j
                    //whether that particular pair of array entities A[i] and A[j] is inverted
                    //if they are inverted, increment count variable 
                    //then return count 
                //Problem of Brute-force: 
                    //there's an n choose 2 or a quadratic number of potential inversions
                    //So this algorithm will run in quadratic time 
                //Can we do better?
                    //Yes
                //Key Idea #1 
                    //Divide and conquer 
                    //Call an inversion (i, j) [with i < j]
                        //left inversion - if i,j ≤ n/2 - can compute this recursively
                        //right inversion - if i, j > n/2 - can compute this recursively
                        //split inversion - if i ≤ n/2 < j - needs a separate subroutine for this

                //High-Level Algorithm 
                    //Count(array A, length n) 
                        //if n = 1 return 0 //base case - 1 element array
                        //else
                            //x = Count (1st half of A, n/2) //recursive call - left inversion
                            //y = Count (2nd half of A, n/2) //recursive call - right inversion
                            //z = CountSplitInv (A, n)   //split inversion - will implement in next video
                        //return x + y + z

                    //Goal:
                        //Implement CountSplitInv subroutine in linear O(n) time
                        //Then Count will run in O(n log n) time, just like merge sort 

                        //O(n log n) because same reason why merge sort ran in O(n log n)
                        //Recursive calls Each on a problem of half of the array size.
                        //After the recursive calls, we would be doing linear time subroutine 

                        //The challenge is counting a potentially quadratic number of things 
                        //using only linear time 

//Video 3-2
//On log n Algorithm for Counting Inversions II
    //Piggybacking on Merge Sort - count a potentially quadratic number of inversions in a linear way
        //key idea #2 (key idea #1 is in last video)
            //Have recursive calls both count inversions AND sort, (recursive calls were only counting before) 
            //[i.e., piggy back on Merge Sort ]
            //Recall: Merge Sort will sort in O(n log n) time 
        
        //Motivation: the merge subroutine in merge sort naturally uncovers split inversions (as we'll see)
            //that is to say, the merge subroutine almost seems designed just to count the number of split inversions 

    //Revising our High-level Algorithm

        //High-Level Algorithm 
        //Sort_and_Count(array A, length n) 
            //if n = 1 return 0 //base case - 1 element array
            //else
                //(B, x) = Sort_and_Count (1st half of A, n/2) //recursive call - left inversion, B is sorted version of 1st half
                //(C, y) = Sort_and_Count (2nd half of A, n/2) //recursive call - right inversion, C is sorted version of 2nd half
                //(D, z) = MergeAndCountSplitInv (B, C, n)   //split inversion - will implement in next video, D is sorted version of A, subarrays B and C are passed to MergeAndCountSplitInv as input
            //return x + y + z
        
        //Goal:
            //Implement MergeAndCountSplitInv subroutine in linear O(n) time
            //Then Sort_and_Count will run in O(n log n) time, just like merge sort 
    
        //Pseudocode for Merge subroutine
            //D = output array (length = n)
            //B = 1st sorted array (length = n/2)
            //C = 2nd sorted array (length = n/2)

            //i = 1 (pointer for array A)
            //j = 1 (pointer for array B)

            //for k = 1 to n
                //if B(i) < C(j)
                    //D(k) = B(i) (push element into output array)
                    //i++         (increment pointer)
                //else C(j) < B(i)
                    //D(k) = C(j)
                    //j++
            //end
        
        //Suppose the input array A has no split inversions. 
        //What is the relationship between the sorted subarrays B and C?
            //All elements of B are less than all elements of C
        
        //Example
            //Consider merging 2 arrays - [1, 3, 5] and [2, 4, 6]
            //Both arrays are sorted
            
            //Output - [1, 2, 3, 4, 5, 6]
            //You will notice that , when we merge these two arrays,
                //when the number 2 is copied to the output, we discover the split inversions (3,2) and (5,2)
                //when the number 4 is copied to the output, we discover the split inversion (5, 4)
        
            //General Claim
                //The split inversions involving an element y of the 2nd array C are 
                //precisely the numbers left in the 1st array B when y is copied to the output D

            //Proof: 
                //Let x be an element of the 1st array B
                //1. if x copied to output D before y, then x < y  
                    //no inversion involving x and y
                //2. if y copied to output D before x, then y < x
                    //x and y are a (split) inversion
        
        //MergeAndCountSplitInv Implementation
            //While merging the two sorted subarrays
            //keep a running total of the number of split inversions 
            //when elememnt of 2nd array C gets copied to output D, 
            //increment total by number of elements remaining in 1st array B

            //Run time of subroutine
                //Merge is O(n)
                //Running total is O(n)
                //So, subroutine is O(n)

            //Sort_and_Count runs in O(n log n) time, just like merge sort
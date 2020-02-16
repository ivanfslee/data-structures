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

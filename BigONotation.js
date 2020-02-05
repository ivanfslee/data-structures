//What is the need for Big O notation?
    //A way to compare different implementations of code 
    //You can use it discuss tradeoffs between different approaches (serves as an analytical tool)
    //When your code slows down or crashes, you can pinpoint inefficiences and bottlenecks in your applications

    //We don't use time that algo takes-
        //Different machines will record different times
        //Same machine will record different times
        //For particularly fast algos, speed measurements may not be precise enough

//What is Big O Notation?
    //Count the number of simple operations the computer performs 
    //Allows us to talk formally about how runtime of an algo grows as input grows

//Simplify Big O Expressions

//Define 'time complexity' and 'space complexity'

//Evaluate time and space complexity of different algorithms using Big O notation

//What a logarithm is

//////////////////////////////////////////////////////////////////////////////////////
//Algo Expert - Complexity Analysis
    //Time Complexity & Space Complexity
        //Time Complexity 
            //Measure of how fast an algo runs
        //Space Complexity
            //Measure of how much memory/space an algo takes up 

    // One Problem - Multiple Solutions - How do you compare them? 
        //What makes one solution better than another solution?
            //Whether or not solution has a better time and/or space complexity
            //S1 - solution 1
            //S2 - solution 2
            //S3 - solution 3

        //What if one solution has better time, but another solution has better space?
            //Then that would depend on the use case of the algorithm
            //Which is more important in how the alforithm is used? 
            //Is time more important? 
            //Or is space more important?

    //What data structure best allows you to solve problem with best time and space complexity

//////////////////////////////////////////////////////////////////////////////////////
//Algo Expert - Memory
    //Memory 
        //As a canvas that is bounded (limited number of slots)
        //Slots in memory - space complexity 
        //Open memory slots that are consecutive 
        //Memory is made up of bits (series of 0's and 1's)
        //One bit - (0 or 1) - stands for 'Binary Digit'
            //Binary Number System aka Base 2 Number System - 0000 0001 - 8 bit representation for number 1 
            //We store data in memory using binary number system
            //Any piece of data can be transoformed into base 2 format and that is stored in blocks of 8 bits (1 byte)
                //e.g. store number 1 in memory. You translate 1 to binary -> 0000 0001 and that binary number is stored in memory 
        
        // 2^8 (256) unique data values you can represent with one byte    
            
            //Each column represents power of 2 number.  
            //Right most column 2^0 -> 1
            //Column next to it 2^1 -> 2
            //Column next to it 2^2 -> 4

        //One memory slot can store 8 bits aka 1 byte
            //32 bit integer (4 bytes)
            //64 bit integer (8 bytes)

        //when storing integers in memory, they are typically fixed width integers
        //fixed width integers 
            //always will take same number of memory slots 
            //e.g. 32 bit integer - number is 1 - it will take up 4 memory slots (4 bytes)
            //e.g. 32 bit integer - number is 100 - it will take up 4 memory slots (4 bytes)
            //e.g. 64 bit integer - number is 100 - it will take up 8 memory slots
            //whatever the number, large or small. It will take the same number of memory slots

        //how to store strings in memory?
            //ascii code of 'A' is 65
            //ascii code of 'B' is 66

        //pointers
            //Memory slots are actually memory addresses stored in base 2 
            //you can store memory address of another memory slot in a memory slot
            //so essentially you point from one memory slot to another memory slot by storing memory address
            //you can point to other memory slots at other locations in memory, so you don't need consecutive/contiguous memory slots

        //your computer/program can access any memory slot/address directly, very quickly
        //so we refer to accessing memory slot as a truly basic operation 
        //a very inexpensive operation from a time complexity point of view
        //an operation that doesn't take much time 

        //Other concepts:
            //endianness

//////////////////////////////////////////////////////////////////////////////////////
//Algo Expert - Big O Notation
    //Big O - is worst case scenario
        //Some algo's have best case/worst case/avg case
        //In interviews, we will typically talk about worst case scenarios 

    //Time Complexity - speed dependent on size of the input
        //Measure of an algos speed/runtime as the size of the input increases
        //O(1) - constant time - speed of algo is not affected by input increasing
        //O(log N) - logarithmic time
        //O(N) - linear time
        //O(N log N) - 
        //O(N^2) - quadratic time
        //O(N^3)
        //O(N^4)
        //O(2^N)
        //O(N!)

    //What unit are we talking about here?
        //O(1) - what is 1? what unit is 1?
        //Elementary Operations
            //e.g. accessing value in single memory slot would be constant time - O(1)

            //Given this function/algorithm -> 1 + a[0]
            //'a' is an array. we are accessing the first element in array at index 0
            //Let's say we are working with 32 bit integers
            //and accessing 1 memory slot (1 byte) is an elementary operation 
            //We are adding 2, 32 bit integers, so that would be at least 8 elementary operations 
            //So, would that be O(8)????
            //We don't really care about the exact number of operations 
            //As size of array 'a' increases towards infinity, the number of operations is still the same (8)
            //From asymptotic analysis point of view, we simiplify O(8) to O(1)

    //Elementary operations (constant time)
        //addition/subtraction
        //declaring variables 
        //Under the hood, anything that does constant number of memory slot reads


    //We only really care about the significant factors in our complexity and we drop constant factors 
        //Lets say you have an algo O(N^2 + N + 1)
        //From an asymptotic analysis point of view, this algo would simplify to O(N^2)

        //Lets say you have an algo O(3N^2)
        //The multiple 3 is a constant factor. 
        //From an asymptotic analysis point of view, this algo would simplify to O(N^2)


    //mathematical term - 
        //asymptotic analysis - as input size goes towards infinity 
        //Big O notation - 
            //O(1) ->
                //As size of my input, N, increases and tends towards infinity, the speed of my algorithm (or amount of auxiliary memory it takes up if we are talking about space complexity)
                //remains constant 
            //O(N) -> Asymptotic analysis of my algorithm
                //Speed of my algorithm increases linearly as N tends toward infinity 

    //Space Complexity - essentially the same with time complexity (at least conceptually)


    //Examples - 
        //Traverse array - O(N)
        //Traverse array front to back and back to front - O(2N) simplifies to O(N)
        //Traverse array for each element in array - O(N^2)
        //O(N^3 + log (N) + 3) simplifies to O(N^3)
        
        //What if your algo has 2 inputs - 2 arrays of length N and M
            //O(N + M)
        
        //If your algo has 2 inputs and it's Big O is O(M^2 + 2N)
            //This simplifies to O(M^2 + N) 
            //The N does not drop out because it is a different variable from M
        
        //O(N! + log(M) + 2N + 3)
            //simplifies to O(N! + log(M))
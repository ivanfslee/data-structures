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
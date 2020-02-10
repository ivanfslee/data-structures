//Intrinsic order to elements in array
//order is good in some instances, but slows it down in some instances

//When to use arrays
    //When you need order
    //linked-lists have order as well and can sometimes perform better than arrays depending on what you need 
    //When you need fast access/insertion/ and removal (kind of...)

//Big O of arrays
    //Insertion - it depends 
        // inserting at the end via push O(1)
        // inserting at the beginning via unshift O(N) because you have to reindex all elements
    //Removal - it depends
        // removing from the end O(1)
        // removing from the beginning O(N)
     //Thus, push/pop is always faster than shift/unshift

    //Searching - O(N)
    //Access - O(1) - given a valid index to an array. You can access that element in constant time
        //The index allows direct access to that element in constant time 

//Big O of array methods
    //push - O(1)
    //pop - O(1)
    //shift - O(N) - reindexing 
    //unshift - O(N) - reindexing
    //concat - O(N) - technically, you could say O(N + M) - where N and M are the sizes of the arrays being concatenated
    //slice - O(N) - copy an array or part of an array - have to go through each element
    //splice - O(N) - remove/add new elements at beginning/end/middle of array -  
    //sort - O(N * log N) - time it takes to sort is slower than just O(N)
    //forEach/map/filter/reduce - O(N) - loop over each element 

//Most operations with arrays are O(N) 


//////////////////////////////////////////////////////////////////////////////
//Algo Expert - Arrays
    //How are arrays stored in memory?
        //bounded memory canvas with slots
        //each slot holding a byte (8 bits)

    //Scenario - [1, 2, 3] - Storing array with 3 integers in memory
        //Each integer is a fixed width integer, taking up 8 bits each 
        // 8 * 3 = 24 consecutive memory slots taken up 
    
    //Two Types of Arrays 
        //Static Arrays 
            //Fixed number of memory slots 
            //Tell operating system - 'I want 24 slots of memory'
            //You specify the number of memory slots you need and the OS allocates it to you
            
            //Operation:
                //get - O(1) time and space
                //set - O(1) time and space
                //init - O(N) time and space
                //traverse - O(N) time, O(1) space
                //copy - O(N) time and space
                //insert static array - O(N) time O(1) space
                //insert dynamic array - O(1) time
                //pop - O(1) time and space 

                //1 - init
                //init - O(N) time - (more specifically O(8 * N) - if we are dealing with 64 bit integers)
                //O(N) space as well because we are taking memory slots proportional to the number of elements we are storing in array
                
                //initialize an array - aka - create an array
                    //we specify we are creating an array of length n elements 
                    //OS goes into memory and finds n times 8 consecutive memory slots

                //2 - get
                //get operation for array - O(1) - constant time operation
                //We're not using any extra memory to get an element so space complexity is also constant - O(1) space 

                //Read/access a value at a given index - is typically instant - O(1) 
                //Why?
                    //We know the memory address we start at
                    //We are storing fixed width integers 
                    //So every integer has 8 memory slots allocated to it 
                    //So we know that first integer in array starts at a certain memory slot
                    //And we know the next integer is at that memory slot plus 8 (because they are all fixed width integers)
                    //Subsequently, the next integer after that is starting integer plus 16 or previous integer plus 8
                    
                    //So when we access an element in an array at a given index, the OS is looking for the starting memory address of the first element in array
                    //Then OS looks at how many bytes does each element take up. 
                    //Then OS looks at the index we are specifying . e.g. someArray[2] - looking at index 2 
                    //Then OS multiples the fixed width (8, in this case) and multiplies it by the index (2, in this case) 
                    //We get 16 - then OS looks at the 16 memory slots after the first memory slot. 
                    //Then we arrive at the memory slot that the element with index 2 is at 
                    //All these operations are constant time operations - typically, multiplication in this case 
            
                //3 - set            
                //set operation - we want to overwrite a value in an array at a given index
                //O(1) constant time and constant space
                //we are not using up any additional memory 
                //time complexity is constant time also 

                //e.g. someArray[2] = 5
                //We can access the value at index 2 in constant time
                //Then we overwrite the binary numbers at that index with new binary numbers 
            
                //4 - traverse
                //traversing through array
                //O(N) time
                //O(1) space - because we are not using any additional space

                    //traversal applies to 
                    
                    //methods that utilize array traversal will also be O(N) time 
                        //javascript filter, reduce, map, forEach, all these built-in array methods that involve traversing through an array 
                        //space complexity would depend on which method you use. 
                        //e.g. map method - you are creating a new array so that would be O(N) time and space
                
                //5 - copy array
                //O(N) space and time
                //So copying is a relatively expensive operation 
                //You are traversing through array and also creating a new array
                //So that uses more memory as well 
                    //e.g. javascript slice method is an O(N) time and space operation
                    
                //6 - insert - middle/end/beginning 
                //fairly expensive operation
                //insert operation includes copy operation
                //copy array and find memory enough slots to fit another element in array
                //O(N) time - because we copy array
                //O(1) space - we also wipe out the previously used memory slots (we free that up) and it takes up same amount of space

                //For a dynamic array - insertion is:
                    //O(1) constant time for insertion at the end of array
                    //Inserting in the middle or beginning of array - O(N) time because
                    //You have to shift everything down by one, which is an O(N) operation
                    //unshift method is O(N) time

                //6 - pop method - remove last element from array
                //remove from end of array - O(1) constant time and space

                //shift method - remove from beginning is O(N) time
                //removing element from middle of array or beginning of array is O(N) time

                //in a queue data structure popping from the beginning element is constant time

                //If you are doing something on only a portion of the array, it is still O(N) linear time
                //e.g. acting on half the array O(.5N) simplifies to O(N) 

        //Dynamic Arrays 
            //An array that can change in size - it will allow for faster insertion
            
            //standard arrays in JS and python are dynamic arrays
                //JavaScript
                //Python
            //Array memory allocation is flexible. You can add elements and remove elements

            //With dynamic arrays, when you create an array, OS will allocate roughly ~twice as much memory slots for the array
            //e.g. [1,2,3] - 3 item memory slot actually looks like this [1,2,3,-,-,-]

            //When you copy/insert the dynamic array, the OS will allocate twice the number of memory slots that you will need
            //Any memory slots allocated that are not used, will have O(1) insertion times
            //Any copying/inserting after the array is full will be O(N) insertion times.
        
        //Amortized Analysis
            //amortized time complexity of appending a value to the end a dynamic array is O(1) constant time 
            //a dynamic array will double in size when it gets full


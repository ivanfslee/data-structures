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
            
            
                //set operation - we want to overwrite a value in an array at a given index
                //O(1) 
                //e.g. someArray[2] = 5
                //We can access the value at index 2 in constant time
                //Then we overwrite the binary numbers at that index with new binary numbers 
            
            
        //Dynamic Arrays 
            //JavaScript
            //Python
            //Array memory allocation is flexible. You can add elements and remove elements
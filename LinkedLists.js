//Algo Expert Linked List lectures
    //For simiplicities sake, we will have numbers take one memory slot

    //Singly Linked List
        //3 -> 1 -> 4 -> 2
    
    //The difference is how linked lists are stored in memory versus how arrays are stored in memory
        //Arrays must be stored in consecutive memory slots
        //Linked lists store elements anywhere in memory and they connect the elements using pointers 
        //That makes the fundamental difference between arrays and linked lists - 
            //arrays are stored in consecutive memory slots
            //linked lists nodes can be stored anywhere in the memory canvas

    //Singly Linked Lists are made up of nodes
        //Node contains the value and the pointer to the next node in the linked list
        //So for a node, in memory, one memory slot would store the value and another memory slot would store the pointer
        //Operating system is connected directly to the memory slots - accessing the memory address via the pointers are very fast 
    
    //Big O of SLL 
        //operations
            //init 
                //O(N) time and space complexity
                //You are doing the same thing as an array. You allocate memory slots for each node. 

            //get
                //Arrays can access element in constant time O(1)
                //You have to traverse the entire linked list to access elements in a SLL

                //To get a number at a certain index in a SLL:
                //O(i) time complexity 
                //where i is the index. You have to traverse through i nodes to get ith index  
                //O(1) space complexity

            //set
                //set value at ith index
                //O(i) time complexity to find the node. You can set the value instantly after you access the node
                //O(1) space complexity
            

            //copy
                //O(N) time and space complexity

            //traverse
                //O(N) time
                //O(1) space

            //insert
                //The actual act of inserting the node is constant time and space

                // To find the place you need to insert the node depends on your implementation 
                //if head insert - O(1) constant time
                //if you have a reference to tail, then inserting at the end would be constant time - O(1) 
                //if you don't have a reference to the tail, it will be O(N) time because you have to traverse the entire linked list
                //typically, if you are inserting in the middle of a linked list, it will take O(i) time where i is the index of insertion

                //insert node at beginning
                    //O(1)
                //insert node at end
                    //O(1)
                //insert node in the middle of linked list
                    //O(1)
                

    //Linked list variations - 
        //doubly linked lists
            //each node has 2 pointers. 
            //One pointer to previous node
            //One pointer to next node


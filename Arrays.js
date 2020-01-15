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
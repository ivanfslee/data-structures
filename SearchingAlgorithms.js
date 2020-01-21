//How do we search?
    //Given an array, the simplest way to search for a value 
    //is to look at every element in the array
    //and check if it's the value we want

//JavaScript has builtin array search methods 
    //All these methods check each element in the array 
    //They are all 
    //indexOf
    //includes
    //find
    //findIndex

//Describe what a searching algorithm is

//Implement linear search on arrays

function linSearch(arr, val) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === val) {
            return i;
        }
    }
    return -1;
}

//Implement binary search on sorted arrays 

//Implement a naive string searching algorithm 

//Implement the KMP string searching algorithm
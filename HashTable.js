//Hash Tables aka Hash Map 

//Typically built into programming languages
//because of their speed, hash tables are commonly used
//data lends itself to being arranged in key value pairs
//sequential data is good for arrays  


//Hash tables in:
    //python - dictionaries
    //JS - objects and Maps (objects have some restrictions, but are basically hash tables - the restriction is that the key is a string)
    //Java, go, scala - maps
    //Ruby - Hashes 


//What a hash table is
    //hash tables are used to store key-value pairs
    //arrays are stored using key-value pairs - but the keys are numeric in arrays
    //keys in a hash table are not ordered - keys in arrays ARE
    //unlike arrays - hash tables are fast for:
        //finding values
        //adding new values
        //removing values

//Define hashing algorithm 

//What makes a good hashing algorithm

//How do collisions occur in a hash table

//Handle collisions usuing separate chaining or linear probing 

//We will implement our own hash table 
    //keys in hashtables don't have to just be strings, but we will just use strings as keys in our implementation

//The HASH part 
    //To implement a hash table we will use an array
    //To look up values by key, we need a way to convert keys into valid array indices 
    // e.g. 'pink' -> #2342353
    //We will use HASH FUNCTION to convert 'pink' to a number which will be the index - we store ['pink', "#2342353"] at that index
    //If we want the value with key 'pink'. We pass 'pink' into hash function. Hash function returns a number. That number is the index that ['pink', "#2342353"] is stored at.
    //Any time we pass in 'pink' to hash function, it should return same number value 

//Intro to Hash Functions
    //We will use hash function to convert keys (e.g. 'pink') to valid index in array

    //input - any length
    //output - fixed length

    //What makes a good hash function? (not a cryptogrpahically secure one)
        //1. Fast (i.e. constant time) 
        //2. Doesn't cluster outputs at specific indices, but distributes uniformly
        //3. Deterministic (same input yields same output)

//

// utf 16 conversion using method 'charCodeAt()'
//'a'.charCodeAt(0);   //return 104 - find utf 16 number at index 0
//'hi'.charCodeAt(1);  //return 105 - find utf 16 number at index 1

//subtract 96 gives us the position in the alphabet
//'a'.charCodeAt(0) - 96;    //returns 1 - 1st character in alphabet
//'b'.charCodeAt(0) - 96;    //returns 2
//'z'.charCodeAt(0) - 96;    //returns 26

//We will add up the alphabet positions and modulo it by the length of the array we are storing the string in

//Simple hash example that works on strings only

function hash(key, arrayLen) { //arrayLen is length of array we are storing key-value pairs in 
    let total = 0;
    for (let char of key) { //loop through characters in key which is a string
        // map 'a' to 1, 'b' to 2, 'c' to 3...
        let value = char.charCodeAt(0) - 96;
        total = (total + value) % arrayLen; //we mod each characther, we could mod at the very end once instead 
    }
    return total;
}

//problems with the hash function above
    //1. only hashes strings (we won't address this)
    //2. not constant time - we loop through each character
    //3. could be a little more random 
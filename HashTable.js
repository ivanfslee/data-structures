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
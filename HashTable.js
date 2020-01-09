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


//What a hash table is - collection of key-value pairs
    //hash tables are used to store key-value pairs
    //hash tables can find values quickly given a key
    //hash tables can add new key-value pairs quickly
    //hash tables store data in a large array and work by hashing the keys
    //a good hash should be fast, distribute keys uniformly, and be deterministic
    //separate chaining and linear probing are two strategies used to deal with two keys that hash to the same index (i.e. duplicate keys)
    //arrays are stored using key-value pairs - but the keys are numeric in arrays
    //keys in a hash table are not ordered - keys in arrays ARE
    //unlike arrays - hash tables are fast for:
        //finding values
        //adding new values
        //removing values

//Define hashing algorithm 

//What makes a good hashing algorithm

//How do collisions occur in a hash table

//Handle collisions using separate chaining or linear probing 

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

//Revised hash function 
function hash(key, arrayLen) { //hash functions almost alway use prime numbers because it reduces collisions. arrayLen variable passed in should be a prime number  
    let total = 0;
    let WEIRD_PRIME = 31; //we use prime number 
    for (let i =  0; i < Math.min(key.length, 100); i ++) { //the conditional takes the min of key length or 100. That is, if key is larger than 100 characters, the most loops for loop would do is 100
        let char = key[i];
        let value = char.charCodeAt(0) - 96;
        total = (total * WEIRD_PRIME + value) % arrayLen;
    }
    return total;
}

// Why Prime Numbers?
    //if length of your hash table (the number of key-value pairs) is prime - the less likely for collisions
    //Prime number in the hash is helpful in spreading out the keys more uniformly
    //How do prime numbers contribute to this? Math is complicated

//What are collisions?
    //When our hash algorithm returns the same thing for two different inputs
    // e.g.  hash("cyan", 13)  -> returns 5
    // e.g.  hash("pink", 13)  -> returns 5 
    // This would be a collision.

// Dealing with Collisions
    //1. Separate chaining - at each index in our array (hash table), we store values using more sophisticated data structure (e.g. array or linked list). 
        //This allows us to store multiple key value pairs at one particular index 
        //Thus, we are able to store more than the length of our array
    //2. Linear Probing - we only store one piece of data at each position in the array. When we encounter a collision, we look for the next empty slot and put the value there.


//Hash Table Class

class HashTable {
    constructor(size = 53) { //default array size of 53, a prime number 
        this.keyMap = new Array(size);
    }

    _hash(key) {
        let total = 0;
        let WEIRD_PRIME = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = (total * WEIRD_PRIME + value) % this.keyMap.length;
        }
        return total;
    }

    set(key, value) {
        let index = this._hash(key);
        if (!this.keyMap[index]) { //if nothing at the index, put an empty array at that index
            this.keyMap[index] = [];
        }
        this.keyMap[index].push([key, value]); //push an array with key and value at that index 
    }

    get(key) {
        let index = this._hash(key); //hash the key
        if (this.keyMap[index]) { //if there is something at this index
            for (let i = 0; i < this.keyMap[index].length; i++) { //loop through each element at the index and look for the matching key
                let currentElem = this.keyMap[index][i]
                //note: the way we have it now, it allows for duplicate keys. When we use get method - it returns the first array at the index
                //note2: though for most languages, if you add in a key-value pair where the key is a duplicate, it would overwrite the original key value pair
                if (currentElem[0] === key) { //if currentElem's key matches the key
                    return currentElem[1]; //return value 
                }
            }
        }
        return undefined; //if nothing at the index, return undefined 
    }

    values() {
        let valuesArr = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    if (!valuesArr.includes(this.keyMap[i][j][1])) { //dealing with duplicate values. if valuesArr doesn't contain value, push the value into it
                        valuesArr.push(this.keyMap[i][j][1]); //here we only push the unique values into our array. Any duplicates are skipped
                    }                    
                }                
            }
        }
    }

    keys() {
        let keysArr = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    if (!keysArr.includes(this.keyMap[i][j][0])) { //dealing with duplicate keys. if keysArr doesn't contain key, push the value into it
                        keysArr.push(this.keyMap[i][j][0]); //here we only push the unique keys into our array. Any duplicates are skipped
                    }                    
                }                
            }
        }
    }

}

//Set and Get Methods
    //Set 
        //1. Accept a key and a value
        //2. Hashes the key -> get an index to see where in array/hash table it will be stored
        //3. Store the key-value pair in hash table array via separate chaining 
    
    //Get
        //1. Accepts a key 
        //2. Hashes the key -> we get index back
        //3. Look through that index and find the key that matches - return the key-value pair
        //4. If key not found, return undefined

//Keys and Values Methods
    //Keys
        //1. loop through hash table array and return an array containing all keys 

    //Values
        //1. loops through hash table array and return an array containing all values

//How do we handle duplicate values?
    //keys are supposed to be unique
    //duplicate values are possible 


//Big O of Hash Tables 
//Average Case and Best Case 
    //Insert - O(1)
    //Deletion - O(1)
    //Access - O(1)
    //Search - can be O(1)
    //Speed is determined by how fast the hash function is and how evenly it distributes into the array 
    //It is possible to have O(1) hash function and programming langues hash tables have a constant time hash function 
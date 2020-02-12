//Algo Expert Notes on Strings
    //strings are typically known as a data type
    //strings also can behave like a data structure
        //that we manipulate that has its own time and space complexity

    //Strings are implemented differently depending on the programming language being used
        //recall - string is stored in memory as an array of integers
        //each integer corresponds to a character mapped by a character encoding standard - e.g. ascii
        //'A' maps to 65
        //'B' maps to 66
        //'a' maps to 97
        //ASCII standard has fewer than 256 characters and includes all the characters  of english alphabet
        //Each character in ascii would be 1 byte (8 bits)
        
        //If we are encoding other languages, e.g. Chinese, we need a standard that encode more characters
        //e.g. 2 bytes per character or more

        //The main point is that each character in a string will be stored in memory using a fixed amount of bytes 
        //similar to a fixed width integer
        //that means that every operation on a character in a string will be constant time operations
        //just like they would be with dealing with a fixed width integer

    //operations
        //string traversal
            //similar to traversing through an array
            //O(N) time 
            //O(1) space (assuming we don't do anything during the traversal - we're not storing anything else)

        //copy a string
            //O(N) space and time
            //we are storing another copy of the string of N characters
            //O(N) time to copy the characters

        //get character at a certain index
            //O(1) constant time and space
            //why constant time?
                //string is stored in array as integers that are encoded
        
        //insert a value in a string/end of a string
            //in some languages, strings are mutable
            //other languages, strings are immutable - you cannot modify the string afterwards
                //you have to copy the string


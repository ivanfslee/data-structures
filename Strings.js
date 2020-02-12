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
        
        //insert a value in a string/end/beginning of a string
            //in some languages, strings are mutable
            //other languages (e.g. javascript, python), strings are immutable - you cannot modify the string afterwards
                //you have to copy the string, create a new string with the changes - either a character added or deleted from the new string

            //e.g. foobar = 'this is a string';
            //foobar += 'x'; //this line of code actually copies the entire string/array of characters with the added character 'x'
            //This is not a constant time operation, it is a linear time operation O(N)
            //This is all because strings are immutable in JavaScript. So this operation would be linear time operation
                //Any method that mutates the string - in a programming language that has immutable strings - is actually making a copy of that string 
                //which is an O(N) linear time operation with the mutation you have in it 

            //This is different from adding a value to the end of an dynamic array - that would be an amortized constant time operation

            //This concept is important because if we are adding two strings together. 
                //e.g. concatenating two strings
                    //'abc' + 'def' 
                    //This would be a linear time operation - O(N + M)
                    //Where N is length of first string and M is length of second string
            
            //Remember that this is only relevant to those languages where strings are immutable
                //So if you find yourself having to do alterations on a single string in  those languages
                //It is recommended that you split those strings into an array of characters
                //e.g. 'this is a string'
                //becomes -> ['t', 'h', 'i', 's', 'i', 's', 'a', 's', 't', 'r', 'i', 'n', 'g']
                //When it is split into an array, this supports constant time additions/alterations/string mutations
                //Then in the end, you rejoin all the letters to reform the string - an O(N) operation
                //In this way, instead of multiple O(N) operations to manipulate the string
                //You have one O(N) operation to split the string into characters in an array
                //And multiple constant time operations to change the letters, make additions, etc
                //Then in the end, you have one O(N) operation to rejoin the characters into a string

        //set method - setting a character at a given index in the string
            //you cannot do this with strings because they are immutable 
            //The closest thing to this is 'some string' += 'some other string'
        
        //find sub strings within a string 
            //there are some very fast algorithms out there for this
            //e.g.  knuth morris pratt (KMP algorithm)
//searching for substrings in a larger string 


function naiveSearch(long, short) {
    let count = 0;
    for (let i = 0; i < long.length; i++) {
        for (let j = 0; j < short.length; j++) { //iterates over the short string 
            if (short[j] !== long[i + j]) { //compares the short string to the long string - breaks out of inner j loop only if characters are not equal 
                break; //this break only breaks out of the inner j for loop and will continue with i for loop
            }
            if (j === short.length - 1) { //if j reaches end of length of short, it will increment count variable 
                count++;
            }
        }
    }
    return count;
}

naiveSearch("lorie loled", "lol");
//Comparison Sorts - Comparing one value to another value 
    //Average Time Complexity
    //Bubble Sort - O(N^2)
    //Insertion Sort - O(N^2)
    //Selection Sort - O(N^2)
    //Quick Sort - O(N log N)
    //Merge Sort - O(N log N)

//The best average case time complexity for comparison sort algorithm is N log N
//There is a mathematical bound to the number of comparisons required to sort a list 

//Can we do better than N log N?
    //Yes, but not by making comparisons 
    //Other kinds of algorithms take advantage of the data type and properties inherent to those data types 
    //e.g. data is integers - radix sort

//Radix Sort 
    //Special sorting algorithm that works on lists of numbers 
    //It never makes direct comparisons between elements 
        //e.g. x is greater/less than y 
    //It exploits the fact that information about the size of a number
    //is encoded in the number of digits the number has 

//Big O - Radix Sort 
    //n is length of array we are sorting
    //k is length of those numbers (i.e. number of digits)
    //k matters because number of digits may be very large 

    //caveat - theoretically, radix sort can be faster than any of the 
    //comparison sorts, but because of limitations on how computers actually store
    //numbers in memory, this may not actually be the case
    // k's limit is log N 
    
    //Time Complexity (best)
        //O(nk)
    //Time Complexity (average)
        //O(nk)
    //Time Complexity (worst)
        //O(nk)
    //Space Complexity 
        //O(n + k)
    
//Radix Sort Helper FUnctions 
    //getDigit(num, place) - returns the digit in num at the given place value
    //getDigit(12345, 0); //5
    //getDigit(12345, 1); //4
    //getDigit(12345, 2); //3

    //Convert number to a string, then use correct index to access number you want and then convert back to a number

function getDigit(num, i) {
    //divides the num by 10, 100, 1000 etc. Whatever the 10's place the digit is at
    //Math.abs is so that it works with negative numbers as well
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}   

getDigit(7323, 2);
// 7323/100 = 73.23
//Math.floor(73.23) = 73
// 73 % 10 = 3
//getDigit(7323, 2) returns 3 which is the 2 digit 


//Another helper function we use - digitCount - figures out how many digits in a number 
    //digitCount(num) - returns the number of digits in num 
    //digitCount(1) // 1
    //digitCount(25) // 2
    //digitCount(314) // 3 

function digitCount(num) { //num is a base 10 number
    if (num === 0) return 1; //special case for when num is 0 
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

//note: log10(x) means 10 to what power gives us x 
//Math.log10(423) = 2.62634 
//Math.floor(2.62634) = 2
// 2 + 1 = 3

//Another helper function we use - mostDigits(nums) - given an array of numbers, returns the number of digits of the largest number in the list 
    //mostDigits([1234, 56, 7]); // 4
    //mostDigits([1, 1, 11111, 1]); // 5
    //mostDigits([12, 34, 56, 78]); // 2

function mostDigits(nums) {
    var highestDigits = 0;
    for (var i = 0; i < nums.length; i++) {
        if (digitCount(nums[i]) > highestDigits) {
            highestDigits = digitCount(nums[i]);
        }
    }
    return highestDigits;
}
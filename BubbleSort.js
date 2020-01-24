//Introduction to Sorting Algorithms 

//Elementary Sorting Algorithms 

//What is sorting?
    //Sorting is the process of rearranging the items in a collection (e.g. an array) 
    //so that the items are in some kind of order

    //e.g. sorting numbers from smallest to largest
    //sort names alphabetically
    //sort movies based based on release year 
    //sort movies based on revenue 

//Why learn sorting?
    //sorting is an incredibly common task - good to know how it works
    //there are many different ways to sort things
    //and different techniqes have their own advantages and disadvantages 

    //it also depends on our data
        //on totally random data insertion sort is slow
        //but on nearly sorted data, insertion sort is fast
        //https://www.toptal.com/developers/sorting-algorithms

//JavaScript's Sort Method 
    //with letters
    ['Steele', 'Colt', 'Data Structures', 'Algorithms'].sort();
    //Returns
    ['Algorithms', 'Colt', 'Data Structures', 'Steele']

    //with numbers
    [ 6, 4, 15, 10].sort();
    //Returns
    [10, 15, 4, 6]
    //The default sort order is according to string unicode points 
    //unicode is used to represent strings
    //every element in the array is converted to a string
    //then unicode value of that is taken and then they're sorted

//Telling JavaScript How to Sort
    //JavaScript's built-in sort method accepts optional comparator function
    //You can use the comparator to tell JavaScript how you want it sort
    //The comparator looks at pairs of elements (a and b) and determines their sort order
    //based on the return value 
        //negative return value - 'a' should come before 'b'
        //zero return value - 'a' and 'b' order should remain unchanged
        //positive return value - 'a' should come after 'b'

//sorting by number
function numberCompare(num1, num2) {
    return num1 - num2;
}

[6, 4, 15, 10].sort(numberCompare);
//returns [4, 6, 10, 15]

//sorting by string length
function compareByLen(str1, str2) {
    return str1.length - str2.length;
}

['Steele', 'Colt', 'Data Structures', 'Algorithms'].sort(compareByLen);
//returns ['Colt', 'Steele', 'Algorithms', 'Data Structures']


//Elementary Sorting Algorithms 
    //less commonly used because they are less performant or are only good in certain situations 
    //bubble sort
    //selection sort
    //insertion sort 



//Bubble Sort
    //Big O - O(N^2) time 
    //Best Case with a nearly sorted array is O(N) linear time 

    //Not that commonly used
    //Not all that efficient
    //Only excels in one particular use-case
    //The largest values 'bubble' to the top
    //After each pass through, at least one single large value will be cemented towards the right side 
    //aka - one elem will be sorted after each pass through 

//Bubble Sort depends on a 'swap'
//ES5 'swapping'
function swap(arr, idx1, idx2) {
    var temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
}

//ES2015 'swapping'
const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]; //take what is at idx1, swap with idx2, take what is at idx2 and swap with what is at idx1
}

//Unoptimized bubbleSort implementation 
//this implementation makes too many uncessary comparisons 
function bubbleSort(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length; j++) {
            console.log(arr, arr[j], arr[j + 1]);
            if (arr[j] > arr[j + 1]) { //if array at j is greater than the element in front of it, swap them 
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

bubbleSort([37, 45, 29, 8]);

//This implementation decreases the amount of comparisons by 1 after each iteration through the array
function bubbleSort(arr) {
    for (var i = arr.length; i > 0; i--) { //loops in a descending fashion 
        for (var j = 0; j < i - 1; j++) { //loops to one less than whatever i is 
            console.log(arr, arr[j], arr[j + 1]);
            if (arr[j] > arr[j + 1]) { //if array at j is greater than the element in front of it, swap them 
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
        console.log('One Pass Complete~')
    }
    return arr;
}

//A classic optimization to bubble sort 
//On nearly sorted arrays, we can add a condition
//If there were no swaps in the last iteration through the array
//then the array is sorted 
function bubbleSortNoSwaps(arr) {
    var noSwaps;
    for (var i = arr.length; i > 0; i--) { //loops in a descending fashion 
        noSwaps = true;
        for (var j = 0; j < i - 1; j++) { //loops to one less than whatever i is 
            console.log(arr, arr[j], arr[j + 1]);
            if (arr[j] > arr[j + 1]) { //if array at j is greater than the element in front of it, swap them 
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                noSwaps = false;
            }
        }
        if (noSwaps) break;
        console.log('One Pass Complete~')
    }
    return arr;
}

//We pass in a nearly sorted array
bubbleSortNoSwaps([8,1,2,3,4,5,6,7])
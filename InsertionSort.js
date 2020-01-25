//Insertion sort has some instances where it does well 
    //If you are streaming data in and putting it into an array, insertion sort is a good way to sort that new data coming in

//How it works
    //builds up the sort by gradually creating a larger left portionwhich is always sorted
    //it takes an element and inserts it into the right spot 

//Big O - O(N^2) - worst case time complexity
//If array is almost sorted, best case is O(N) time complexity
function insertionSort(arr) {
    for (var i = 1; i < arr.length; i++) { //loop through array forward - from second element to end 
        var currentVal = arr[i];
        for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) { //iterate backwards starting from 1 less than whatever i is 
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = currentVal;
    }
    return arr;
}

insertionSort([2, 1, 9, 76, 4]);
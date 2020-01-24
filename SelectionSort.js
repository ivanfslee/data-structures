//Similar to bubble sort 
//but instead of first placing large values into sorted position
//selection sort places small values into sorted position


//Big O - O(N^2) - Time complexity
//Selection sort is only good if you want to minimize the number of swaps you are doing
//Whereas bubble sort does many swaps 

function selectionSort(arr) {

    for (var i = 0; i < arr.length; i++) { //loops through entire array
        var lowest = i; //set lowest to i (the left most index in array)
        for (var j = i + 1; j < arr.length; j++) { //loops through entire array, starting at index one after whatever i is
            if (arr[j] < arr[lowest]) { //if an index j is less than our current lowest
                lowest = j; //set lowest to j 
            }
        }
        //swap i with lowest if i is not the lowest
        if (i !== lowest) {
            var temp = arr[i];
            arr[i] = arr[lowest];
            arr[lowest] = temp;
        }
    }
    return arr;
}

selectionSort([34, 22, 10, 19, 17]);




//ES 2015 syntax for swap
function selectionSort(arr) {
    const swap = (arr, idx1, idx2)  => {
        ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);
    }
    for (let i = 0; i < arr.length; i++) {
        let lowest = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[lowest] > arr[j]) {
                lowest = j;
            }            
        }
        if (i !== lowest) swap(arr, i, lowest);
    }
    return arr;
}

selectionSort([0, 2, 34, 22, 10, 19, 17]);
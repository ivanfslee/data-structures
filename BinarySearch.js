//Big O Time Complexity- Binary Search
//O(log N) - Worst and Average Case
//O(1) - Best Case 

function binarySearch(arr, val) {
    let left = 0;
    let right = arr.length - 1;
    let middle;
    while (left <= right) {
        middle = Math.floor((left + right) / 2)
        if (arr[middle] === val) {
            return middle;
        } else if (arr[middle] > val) {
            right = middle - 1;
        } else if (arr[middle] < val) {
            left = middle + 1;
        }
    }
    return -1;
}

//Alternative - slightly shorter
function binarySearch2(arr, val) {
    let left = 0;
    let right = arr.length - 1;
    let middle;
    while (left <= right && arr[middle] !== val) {
        middle = Math.floor((left + right) / 2)
        if (arr[middle] > val) {
            right = middle - 1;
        } else if (arr[middle] < val) {
            left = middle + 1;
        }
    }
    return arr[middle] === val ? middle : -1;
}


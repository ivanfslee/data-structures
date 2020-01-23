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



//Elementary Sorting Algorithms 
    //less commonly used because they are less performant or are only good in certain situations 
    //bubble sort
    //selection sort
    //insertion sort 


//Logarithm
    //Defined mathematically as the inverse function of exponentiation

    //logarithm of x of base b equals y if and only if b to the power of y equals x 
    // log (x) = y    iif  b^y = x
    //    b

//In computer science, the base is typically base 2 
//log (N) = y iif 2^y = N 

//Because in computer science it is base 2
    //******* If you increase exponent by 1, it will double *******
    //i.e. 2^(x + 1) is double 2^x
    //e.g. 2^4 = 2^3 * 2 = 16

    //In other words:
        // ******** Given the expression 2^x = N *********
        // If you double N, you increase x by 1 
    
    //The more N increases, x only increases by a small amount 

//log N = y
    //******* As N increases, log N increases by a tiny bit *******

    //To apply to time complexity
        //As input increases - (N)
        //The time complexity is much smaller compared to input - log (N)
        // N - (input size) 
        // log N - time complexity

        //If size of input doubles, the number of operations increases by 1
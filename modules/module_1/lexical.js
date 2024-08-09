
function outerFunction() {
    const outerVariable = 'I am outer';

    function innerFunction() {
        console.log(outerVariable); // 'I am outer'
    }

    innerFunction();
}

outerFunction();


/**
 * This is the main function 'a'.
 * It calls the inner function 'b'.
 */
function a(){
    // Call the inner function 'b'
    b();
    
    /**
     * This is the inner function 'b'.
     * It logs the string "b" to the console.
     */
    function b() {
        // Log the string "b" to the console
        // The console.log() function writes the given 
        // argument to the console.
        // In this case, it logs the string "b".
        console.log("b");
    }
}

a();



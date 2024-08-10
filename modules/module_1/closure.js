 
 // closure in javascript

//   closure is a feature where a function retains access to its lexical scope even after
//  the function has finished executing.
 

/**
 * createCounter function
 * 
 * This function creates a closure, where an inner function retains access to its lexical scope even after
 * the outer function has finished executing. The inner function increments a 'count' variable and returns it.
 * 
 * @return {function} Anonymous function that increments and returns the 'count' variable
 */
function createCounter(){
  
  /**
   * The 'count' variable is declared and initialized to 0.
   * This variable is a part of the lexical scope of the 'createCounter' function.
   * The inner function created by 'createCounter' has access to this variable.
   * @type {number}
   */
  let count = 0;
  
  /**
   * The anonymous function returned by 'createCounter' increments the 'count' variable
   * and returns its new value.
   * @return {number} The incremented value of 'count'
   */
  return function(){
    count += 1;
    return count;
  };
}

console.log(createCounter()); // [Function (anonymous)]

const counter = createCounter();

console.log(counter());//1
console.log(counter());//2
console.log(counter());//3
console.log(counter());//4


function a(){
    var vr=10;
    return function  b(){
        console.log(vr);
    }
}
var h = a();

 console.log(h());


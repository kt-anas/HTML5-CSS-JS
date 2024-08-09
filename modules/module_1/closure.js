 
 // closure in javascript

//   closure is a feature where a function retains access to its lexical scope even after
//  the function has finished executing.

//This means that a function can remember and access variables from the scope in which it was created, 
// even when it's called outside that scope
function createCounter(){
   

    let count = 0;
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




const counFun=()=>{
    return function(){
        let count =0
        count +=1;
        return count;
    };
}

const count = counFun();

console.log(count()); //1
console.log(count());//1
console.log(count());//1
console.log(count());//1
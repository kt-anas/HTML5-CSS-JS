
function outerFunction(){
    let a='outerFunction';

    function innerFunction(){
        console.log(a);
        
    }
    

    return innerFunction;
}


const MyFunction= outerFunction()

MyFunction()
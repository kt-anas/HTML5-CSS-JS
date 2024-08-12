
// Scop in javascriopt
// var  name = "nameles";


// function nameFunc(){
//     // var name1 = "name";
//     let age = 5;
//     // console.log(name);
   
// }


// {
    
//    var name = "na";
// //    console.log(age);
// }

// console.log(name)
// console.log(name)

//    nameFunc();  // nameles

//  console.log(name1);  // not defined


//  var: Function-scoped or globally-scoped variable, can be re-declared and updated.
// let: Block-scoped variable, can be updated but not re-declared in the same scope.
// const: Block-scoped variable, cannot be updated or re-declared.


function a(){
    let x = 10;
     return function b(){
        console.log(x);
     }
    
}

const c = a();
c();
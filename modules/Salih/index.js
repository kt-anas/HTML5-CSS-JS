//curried function
function curriedadd(a)
{
    return function(b){
        return function(c){
            return a+b+c
        }
    }
}
const add1=curriedadd(1)
const add1and2=add1(2)
const result=add1and2(3)
console.log(result)
//or
console.log(curriedadd(1)(2)(3))
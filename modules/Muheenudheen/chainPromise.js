
const promise1=new Promise((resolve,reject)=>{
    setTimeout(()=>resolve('first promise resolved'),1000)
})

const promise2=new Promise((resolve,reject)=>{
    setTimeout(()=>resolve('first promise resolved'),1000)
})

const promise3=new Promise((resolve,reject)=>{
    setTimeout(()=>resolve('first promise resolved'),1000)
})


promise1 
   .then((result1)=>{
    console.log(result1)
    return promise2
   })
   .then((result2)=>{
    console.log(result2);
    return promise3
    
   })
   .then((result3)=>{
    console.log(result3);
    
   })
   .catch((error)=>{
console.log(error);
})
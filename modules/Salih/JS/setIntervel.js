// setInterval(function, milliseconds);
// clearInterval(intervalID);

let interval =setInterval(()=>{
    console.log(`hii`)
},1000)

setTimeout(()=>{
    clearInterval(interval)
},10000)
const myPromise = new Promise(function(resolve, reject) {
    const isAvailable = false;  // Corrected the variable name
    
    if (isAvailable) {
        resolve("good");
        
        
    } else {
        reject("bad");
    }
});


myPromise
    .then(function(result){
        console.log(result);
    
    })
    .catch(function(error){
        console.log(error);
        
    })
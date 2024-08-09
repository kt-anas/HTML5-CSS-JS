// script1.js
const sumarray = (arr) => {
    let b = arr.reduce((acc, item) => acc + item, 0);
    console.log(b);
};
export{
    sumarray,

};
const sumNum=(a,b)=>console.log(a+b);
export default sumNum;
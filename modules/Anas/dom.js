 
 const dom = document.getElementById("dom");

  const myclass = document.getElementsByClassName("myclass");
  
  console.log(myclass);
 
  for (let i = 0; i <= myclass.length; i++) {
    // console.log(myclass[i].innerText);
    const delay = i * 1000;
    setTimeout(() => {
        myclass[i].style.color="red";
    }, delay);
   
  }
 

const myselector = document.querySelector(".myclass");
console.log(myselector ,"myselector");
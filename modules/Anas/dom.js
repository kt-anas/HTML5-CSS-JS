 
 const dom = document.getElementById("dom");

  const myclass = document.getElementsByClassName("myclass");
  
  console.log(myclass);
 
  for (let i = 0; i < myclass.length; i++) {
    // console.log(myclass[i].innerText);
    const delay = i * 1000;
    setTimeout(() => {
        myclass[i].style.color="red";
    }, delay);
   
  }

const myselector = document.querySelector(".myclass");

const myselectorAll = document.querySelectorAll(".myclass");

console.log(myselector.textContent ,"myselector");

console.log(myselectorAll[4].setAttribute("style","color:blue").textContent,"myselectorAll");

myselectorAll[1].createElement("p").textContent = "hello";

console.log(myselectorAll[1]);

// const get = myselectorAll[0].getAttribute("style");


// console.log("get" , get);
 
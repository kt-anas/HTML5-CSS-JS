

const btn = document.getElementsByTagName('button')[0]; 
const div = document.getElementsByClassName('hello')[0];


let per= div.innerHTML

btn.addEventListener('click', function() { 
    

    if(div.innerHTML === '<b>Hello World</b>') {
          div.innerHTML = per
    }else{
        div.innerHTML = '<b>Hello World</b>';
    }
 });


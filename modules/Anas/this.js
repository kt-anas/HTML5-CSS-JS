 
 console.log(this)

/**
 * This function defines a function named getName which logs the name property of an object,
 * when called as a method of that object.
 *
 * It creates an object with a name property and a getName method. It then logs the name property
 * of the object when the getName method is called on the object.
 */
function getName() {
    // Create an object with a name property and a getName method.
    const obj = {
        // The name property of the object.
        name: 'harry',
        // The getName method of the object.
        getName: function() {
            // Log the name property of the object when the getName method is called on the object.
            console.log(this.name);
        }
    };

    // Call the getName method on the object.
    obj.getName();
}



function getName1(){
     
}
getName()



const person1 = {
    name:'salih',
    getName:getName
      
}
person1.getName()
 

console.log(Object.keys(person1));


const map =new Map();
map.set('name','salih')
map.set('age',21)
map.set('city','karachi')
console.log(map.get('name'));
console.log(map.has('name'));
map.forEach((value,key)=>console.log(key,value))


function getperson(a,b,c,d){
    console.log(a,b,c,d)
    console.log(this.name)
}

const person = {
    name:'salih   kk',
     
}
 var b= 10;
getperson.call(person,"4","4","4",b); 
getperson.apply(person,["4","4","4",b]); 
// const persons =  getperson.bind(person);
// persons();
 

const name1 = {
    nameless:"nameless",
    age:10,
     b(){
        return  ageName =()=>{
            return  this
     }

    }
}

console.log(name1.b()());
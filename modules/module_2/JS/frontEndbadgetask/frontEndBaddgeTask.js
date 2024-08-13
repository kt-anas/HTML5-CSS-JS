const user = {
    id: 1,
    name: "John Doe",
    contact: {
      email: "john.doe@example.com",
      phone: "555-1234",
      address: {
        street: "123 Main St",
        city: "Springfield",
        state: "IL",
        postalCode: "62701"
      }
    },
    preferences: {
      notifications: {
        email: true,
        sms: false,
        push: true
      },
      theme: "dark"
    },
    orders: [
      {
        orderId: 1001,
        date: "2024-08-10",
        items: [
          { itemId: 501, name: "Laptop", price: 899.99 },
          { itemId: 502, name: "Mouse", price: 19.99 }
        ],
        total: 919.98
      },
      {
        orderId: 1002,
        date: "2024-08-11",
        items: [
          { itemId: 503, name: "Keyboard", price: 49.99 },
          { itemId: 504, name: "Monitor", price: 199.99 }
        ],
        total: 249.98
      }
    ]
  };
  // const a=[]
  function flat(obj){
      const result={}
      for(let i in obj){
          if(typeof obj[i]==='object' && !Array.isArray(obj[i])){
              const temp=flat(obj[i])
              for(let j in temp)
              result[i+'.'+j]=temp[j];
          }
          else{
              result[i]=obj[i]
          }
      }
      return result;
  }
  // console.log(typeof user.address==='array')
  // console.log(!Array.isArray(a))
  console.log(flat(user));
  
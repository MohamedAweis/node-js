const users = [
    {
       id: "1",
       firstName: "cali",
       lastName: "ahmed",
       age: "24",
       email: "cali2@gmail.com",
       password: "1234"
    },
   
    {
       id: "2",
       firstName: "nur",
       lastName: "wardi",
       age: "24",
       email: "nur@gmail.com",
       password: "1234"
    }
   
   ];
   
   
   //------------------//
   
   
   const getusers = () => {
       return users;
   }
   
   const getuser = (email) => {
       return users.filter(u=>u.email===email);
   }
   
   const getUserByEmailAndPassword = (email, password) => {
       return users.filter(u => u.email===email && u.password===password);
   }
   
   
   const create = (user) => {
       users.push(user);
       return true;
   }
   
   
   const updateUser = (user) => {
   
       // return users.filter(u => u.email === email)
   //    let getUpdated= users.filter(u => u.id === id);
   //    getUpdated.map(u=>u.)
   
       const objIndex = users.findIndex(obj => obj.id === user.id);
       users[objIndex].firstName = user.firstName;
       users[objIndex].lastName = user.lastName;
       users[objIndex].age = user.age;
   }
   
   
   const deleteUser = (id) => {
       const objIndex = users.findIndex(obj => obj.id == id);
       users.splice(objIndex, 1);
   }
   
   
   
   //.........//
   
   const isEmailExist = (email) => {
       return users.filter(u=>u.email===email).length > 0;
   }
   
   const isIdExist = (id) => {
       return users.filter(u => u.id == id);
   };
   
   
   module.exports = {
       create,
       updateUser,
       deleteUser,
       getusers,
       getuser,
       isEmailExist,
       isIdExist,
       getUserByEmailAndPassword
   }
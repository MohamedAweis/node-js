const {ApiError} = require("../payload/ApiError");
const db = require("../config/database");

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
   
   
   const getusers = async () => {
    return await db.executeQuery(`SELECT *  FROM nodejs`);
}
   
   const getuser = (email) => {
       return users.filter(u=>u.email===email);
   }
   
   const getUserByEmailAndPassword = async (email, password) => {

    let result = await db.executeQuery(`SELECT U.USERID, U.FULLNAME, U.EMAIL, R.ROLENAME
                                        FROM USERS U
                                                 INNER JOIN USERROLE UR on U.USERID = UR."userId"
                                                 INNER JOIN ROLES R on UR."roleId" = R.ROLEID
                                        WHERE EMAIL = :email
                                          AND PASSWORD = :password
                                          AND ACTIVE = 1`, [email, password])

    if (!result)
        return null;

    return result[0];
}

   
   
   const create =async (user) => {
    let email = user.email;
    let password = user.password;
    let fullName = user.fullName;
    let active = 0;

    let result = await db.executeQuery(`INSERT INTO USERS (USERID, EMAIL, PASSWORD, FULLNAME, ACTIVE)
                                        VALUES (USER_SEQ.nextval, :email, :password, :fullName,:active)`
                                        , [email, password, fullName, active]);
    if (result.rowsAffected === 1)
        return true;

    return false;
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
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
    return await db.executeQuery(`SELECT *  FROM USERS`,[]);
}
   
   const getuser = (email) => {
       return users.filter(u=>u.email===email);
   }
   
   const getUserByEmailAndPassword = async (email, password) => {

    let result = await db.executeQuery(`SELECT U.USERID, U.FULLNAME, U.EMAIL, R.ROLENAME
    FROM USERS U
             INNER JOIN USERROLE UR on U.USERID = UR.userid
             INNER JOIN ROLES R on UR.roleid = R.ROLEID
    WHERE EMAIL = :email
      AND PASSWORD = :password
      AND ACTIVE = 1`, [email, password])
      //console.log(result[0]);
    if (!result)
        return null;
        //console.log(result);
    return result[0];
}

   
   
   const create = async (user) => {
    //let userId = user.userId;
    let email = user.email;
    let password = user.password;
    let fullName = user.fullName;
    let active = user.active;

    let result = await db.executeQuery(`INSERT INTO USERS (USERID, EMAIL, PASSWORD, FULLNAME, ACTIVE)
                                        VALUES (USERS_SEQ.nextval, :email, :password, :fullName,:active)`
                                        ,[email, password, fullName, active]);
    if (result.rowsAffected === 1)
        return true;

    return false;
}

   
   
   const updateUser = async (user) => {
    let userId = user.userId;
    //let email = user.email;
    let password = user.password;
    let fullName = user.fullName;
    let active = user.active;

    let result = await db.executeQuery(`UPDATE USERS set  PASSWORD=:password, FULLNAME=:fullName, ACTIVE=:active where USERID=:userId`
                                        ,[password, fullName, active,userId]);
    if (result.rowsAffected === 1)
        return true;

    return false;
   }
   
   
   
   const deleteUser = (id) => {
       const objIndex = users.findIndex(obj => obj.id == id);
       users.splice(objIndex, 1);
   }
   
   
   
   //.........//
   
   const isEmailExist = (email) => {
       return users.filter(u=>u.email===email).length > 0;
   }
   
   const isIdExist = async(userId) => {
      let result = await db.executeQuery(` select *
       from USERS
           where USERID=:userId`, [userId]);
      if (result[0].IDALREADYEXIST > 0)
          return true;
  
      return false;
  }
   
   
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
const oracledb = require('oracledb');
const util = require("../utils/util");

const host     = process.env.DB_HOST;
const database = process.env.DB_DATABASE;
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;


const executeQuery = async (query, params) => {
  let connection;
  try {
      oracledb.initOracleClient({libDir: 'C:\\Users\\Mohamed\\Nodejs DB\\instantclient_21_3'});

      connection = await oracledb.getConnection({
          username: username,
          password: password,
          connectString: host + '/' + database
      });

      let result = await connection.execute(query);


      return util.parseDatabaseObject(result)

  }catch(err){
      console.log(`Error from database: ${err}`)
      return null;
  }finally{
      //connection.close();

  }
}

module.exports = {
  executeQuery
}


// checkConnection();

// async function checkConnection() {

//  try{

//     oracledb.initOracleClient({libDi: 'C:\\Users\Mohamed\Nodejs DB\instantclient_21_3'})

//     let connection = await oracledb.getConnection({
//         user: username,
//         password: password,
//         connectString: host + '/' + database

//     });


//     console.log('connected to databse');

//     let result = await connection.execute('SELECT * FROM nodejs');
//     console.log(result);

    

//   }catch(err){
//       console.error(err);
//   }

// }

// module.exports = {
//   checkConnection
// }

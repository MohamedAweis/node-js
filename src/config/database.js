const oracledb = require('oracledb');

const host ='15.15.0.59:1512';
const database = 'students';
const username = 'mohamedah';
const password = 'mohamedah';

checkConnection();

async function checkConnection() {

 try{

    oracledb.initOracleClient({libDi: 'C:\Users\Mohamed\Nodejs DB\instantclient_21_3'})

    let connection = await oracledb.getConnection({
        user: username,
        password: password,
        connectString: host + '/' + database

    });


    console.log('connected to databse');

    let result = await connection.execute('SELECT * FROM nodejs');
    console.log(result);

    await connection.close();

    //'SELECT * FROM nodejs'

  }catch(err){
      console.error(err);
  }

}

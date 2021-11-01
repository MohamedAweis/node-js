let status =  require('http-status');
const { ApiError } = require('../payload/ApiError');

const validate =(schema)=> (req, res, next) => {

    const {value, error} = schema.validate(req.body);
  
   if(error){

    const message = error.details[0].message;
    let state = status.BAD_REQUEST;


    return  res.status(state).send(new ApiError(state, message));

   }
    next();
    
}
 
module.exports = validate;

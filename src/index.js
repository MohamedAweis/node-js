require('dotenv').config();
const express = require('express');
const morganMiddleware = require('./middlewares/morgan');
const logger = require('./config/logger');
const httpStatus = require('http-status');
const { ApiError } = require('./payload/ApiError');
const helmet = require ('helmet');
const cors = require ('cors');



let app = express();
let port = process.env.PORT;


// middleware

app.use(express.json());

app.use(morganMiddleware);

// // adding Helmet to enhance your API's security
// app.use(helmet());
// // enabling CORS for all requests
// app.use(cors());





// Router middleware
// @type (Router)

let routeCatalog = require('./routes/v1');
const { error } = require('winston');
app.use(process.env.API_VERSION, routeCatalog);


// unknown API error Handling
app.use((req,res,next) => {
    // send 404 error as json

    let status = httpStatus.NOT_FOUND;
    let error = "Api not Found";
    res.status(status).send(new ApiError(status,error,));

})

// All error handling exception middleware

/*app.use((err, req, res, next) => {
    res.status(500).send(err)
})*/



app.listen(port, ()=>{
   
    logger.info(`the app is running on ${process.env.BASE_URL}:${port}`+'  '+ new Date());
})
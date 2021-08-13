const express= require('express');
const connectDB = require('./config/db');
const app = express();

const PORT=process.env.PORT || 3000;
 require('./config/db');
 connectDB();

 app.use(function (req, res, next) {
    //Enabling CORS
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization");
      next();
    }); 



 //Routes
 app.use('/api/files', require('./routes/files'));


app.listen(PORT,()=> {
console.log('server started at 3000');
})
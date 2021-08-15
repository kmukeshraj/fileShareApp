require('dotenv').config();

const mongoose= require('mongoose');
  
function connectDB() {
    // Database connection 
    //process.env.MONGO_CONNECTION_URL
    // mongoose.connect(process.env.MONGO_CONNECTION_URL, { useNewUrlParser: true, useCreateIndex:true, useUnifiedTopology: true, useFindAndModify : true });
    // const connection = mongoose.connection;
    // connection.once('open', () => {
    //     console.log('Database connected');
    // }).catch(err => {
    //     console.log(err);
    // });

    const url = process.env.MONGO_CONNECTION_URL;

    mongoose 
    .connect(url, {
           useNewUrlParser: true,
           useUnifiedTopology: true,
           useCreateIndex: true,   })   
    .then(() => console.log("Database connected!"))
    .catch(err => console.log(err));

    // const { MongoClient } = require("mongodb");
 
    // Replace the following with your Atlas connection string                                                                                                                                        
    // const client = new MongoClient(url,{useUnifiedTopology: true });
    // async function run() {
    //     try {
    //         await client.connect();
    //         console.log("Connected correctly to server");
    //     } catch (err) {
    //         console.log(err.stack);
    //     }
    //     finally {
    //         await client.close();
    //     }
    // }
    // run().catch(console.dir);


}

module.exports = connectDB;
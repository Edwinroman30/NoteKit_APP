require('dotenv').config();
const express = require('express');
const {router}= require('../routes/routes');

class Server{

    constructor(){
         
        //Instances and properties.
         this.app = express();
         this.port = process.env.PORT | 8080;
         this.apiPath = '/api/';


        //Middleware
        this.middleware();

        //DB Connection
        this.dbConnection();
    }

    async dbConnection(){
        return null;
    }

    middleware(){
        this.app.use( express.json() );
        this.app.use(this.apiPath, router);
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`Listening in port -> ${this.port}`);
        });
    }

}

module.exports = Server;
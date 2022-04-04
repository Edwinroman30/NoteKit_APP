require('dotenv').config();
const cors  = require('cors');
const express = require('express');
const dbConnection = require('../database/config'); 
const path = require('path');
const cookieParser = require('cookie-parser');

class Server{

    constructor(){
         
        //Instances and properties.
         this.app = express();
         this.port = process.env.PORT | 8080;
         this.apiNote = '/v1/api/note';
         this.apiUser = '/v1/api/user';
         this.apiAuth = '/v1/api/auth';

         
         //DB Connection
         this.dbConnectionServer();

         //Middleware
         this.middlewares();

         //Routes
         this.routes();
         

    }

    async dbConnectionServer(){
        await dbConnection();
    }

    middlewares(){

        //CORS.
        const corsOptionsDefault = {
            "origin": "*",
            "methods": "GET",
            "preflightContinue": false,
            "optionsSuccessStatus": 204
        }

        this.app.use( cors(corsOptionsDefault) );
        
        // let’s you use the cookieParser in your application
        this.app.use( cookieParser() );
        
        //JSON PARSER.
        this.app.use( express.json() );
        
        //Body-parsers data.
        this.app.use( express.urlencoded({extended : false}) );
        
        //Static Content.
        this.app.use( express.static('public') );

        //Setting the view-engine
        this.app.set( 'view engine', 'ejs' );
        this.app.set( 'views', path.join( process.cwd(), '/views' ) );

    }

    routes(){
      
        this.app.use( this.apiUser, require('../routes/usersRoutes') );
        this.app.use( this.apiAuth, require('../routes/loginRoutes') );
        this.app.use( this.apiNote, require('../routes/notesRoutes') );
        this.app.use('/', require('../routes/showingViews') );
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`Listening in port -> ${this.port}`);
        });
    }

}

module.exports = Server;
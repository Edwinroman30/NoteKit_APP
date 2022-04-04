const mongoose = require('mongoose');

const dbConnection = async () => {
    
    try {

        await mongoose.connect(process.env.MONGO_LOCAL_CONN,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                dbName: process.env.DBNAME
            });
        console.log('Data Bases is running....');

    } catch (error) {
        console.log(error);
        throw new Error(error);
    }

}

module.exports = dbConnection;
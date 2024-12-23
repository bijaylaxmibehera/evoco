const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Mama@098",
    database: "event_management"
})

const connectDB= async ()=>{
    try{
        await connection.connect();
        console.log("Connected to MySQL database successfully!")
    }catch(error){
        console.error("Error in connecting to the database: ", error);
    }
}

module.exports={connectDB};
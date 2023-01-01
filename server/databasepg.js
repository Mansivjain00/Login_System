const {Client} = require('pg');

const client =new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "Mansivjain@00",
    database: "Practice1"
})

client.connect();

client.query(`select * from "Users"`,(err,res)=>{
    if(!err){
        console.log(res.rows);
    }
    else{
        console.log(err.message);
    }
    client.end;
})
const express=require("express");
const app=express();

const notes_routes=require("./routes/notes_routes")
require("./config/db_connection")
const port=process.env.PORT||4000;
const bodyParser = require('body-parser');



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', notes_routes);
app.listen(port,()=>{
    console.log(`App is listening on port no ${port}`);
})
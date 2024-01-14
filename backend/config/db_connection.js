const mongoose=require("mongoose");

mongoose.connect("mongodb+srv://pratham123:pratham1@cluster0.kkgr6.azure.mongodb.net/?retryWrites=true&w=majority").then((status)=>{
    console.log("db is connected successfully");
}).catch((err)=>{
console.log("Something went wrong");
})
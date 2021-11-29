const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/amazynBase")

mongoose.connection.once("open",()=>{
    console.log("Connection has been made =)");
}).on("error", function(error){
    console.log("Connection fail: " + error);
});
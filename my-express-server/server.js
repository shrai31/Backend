const express = require("express");

const app = express();

app.get("/",function(request, response){
    //    console.log(request);
       response.send("Hello");
});

app.get("/about", function(request, response){
    response.send("<p>I am Himanshu Rai who write the code here</p>");
})
app.listen(3000, function(){
    console.log("server is running");
});
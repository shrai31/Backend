const express = require("express");
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));


app.get("/", function(req, res){
   res.sendFile(__dirname + "/index.html");
//    console.log(__dirname);
});

app.post("/", function(req, res){
    // res.send("Tata Bye Bye")
    console.log(req.body.num1);
    console.log(req.body.num2);
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var cal = num1 + num2;
    res.send("Sum is" + cal);
});

app.get("/bmiCalculator", function(req, res){
    //    res.sendFile(__dirname + "/index.html");
       res.sendFile(__dirname + "/bmiCalculator.html");
    
    //    console.log(__dirname);
    });

app.post("/bmiCalculator", function(req, res){
    
    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);
    var cal =  weight / (height*height);

    res.send("BMI is" + cal);
});

app.listen(3000, function(){
    console.log("Server is running");
});


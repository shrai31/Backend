const express = require("express");
const https = require("https");
const bodyParse = require("body-parser")

const app = express();

app.use(bodyParse.urlencoded({extended:true}));

app.get("/",function(req, res){
    // res.send("Server is up and running")
   res.sendFile(__dirname+"/index.html") 
})

app.post("/",function(req, res){
    // console.log("post required");
    // console.log("afdfdafaf"+ req.body.cityName);
    const apiKey = "29fdf3011293f617c00f314c1d013848"
    const query =req.body.cityName; 
    // const units = "metric"
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + apiKey + "&units=metric";
    // const url = "https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=29fdf3011293f617c00f314c1d013848&units=metric"
    https.get(url, function(response){
        console.log(response.statusCode);

        response.on("data",function(data){
            const weatherdata =JSON.parse(data)
            // console.log(weatherdata);
            const temp = weatherdata.main.temp
            const weatherDescription = weatherdata.weather[0].description;
            const icon = weatherdata.weather[0].icon;
            const img = "http://openweathermap.org/img/wn/"+icon+"@2x.png"
            //  console.log(temp,weatherDescription);

             res.write("<h2>The weather is currently"+weatherDescription+"</h2>")
             res.write("<h1>The Temperature of "+ query +" is" + temp +" degree Celcius</h1>")
             res.write("<img src="+img+">");
             res.send();
        })
    })

})

app.listen(3000,function(){
    console.log("Server is running on port 3000!")
})
const express = require("express");
const bodyParse = require("body-parser");
// const { urlencoded } = require("body-parser");

const date = require(__dirname + "/date.js")


const app = express();

var items = ["s","as","ad"];
var workItems = ["Hi","Himanshu"];


app.use(bodyParse.urlencoded({extended:true}));

app.use(express.static("public"));
app.set('view engine', 'ejs');

app.get("/", function( req, res){
    let day = date();
    res.render("list", {listTitle:day, newListItems: items});
   
//    res.sendFile(__dirname + "/index.html");
//    res.render('list', 
//    { kindOFDay: 'currentDay'}
//    );
});

app.get("/work", function(req,res){
    res.render("list", {listTitle:"work list", newListItems:workItems});
})

app.get("/about", function(req,res){
  res.render("about");
});

app.post("/", function(req, res){
    let item = req.body.todo;
    if(req.body.list==="work"){
        workItems.push(item);
        res.redirect("/work")
    }
    else{
        items.push(item);

        res.redirect("/")
    }
    // item = req.body.todo;
    // console.log(req.body.todo);
    
})

app.post("/work", function(req, res){
   
    let item = req.body.newitem;
    workItems.push(item);
    res.redirect("/work")
})
app.listen(3000, function(){
    console.log("Server is running on 3000 port!")
});
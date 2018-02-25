const express = require('express');
const path = require('path');

let app = express();

let PORT = process.env.PORT || 3000;

app.use(express.static("public"));

app.get("/", function(req,res){
    res.sendfile(path.join(__dirname,"index.html"));
});

app.get("/cleaning", function(req,res){
    res.sendfile(path.join(__dirname, "assets/pages/cleaning.html"));
});

app.get("/organizing", function(req,res){
    res.sendfile(path.join(__dirname, "assets/pages/organizing.html"));
});

app.get("/contact", function(req,res){
    res.sendfile(path.join(__dirname, "assets/pages/contact.html"));
});

app.get("/about", function(req,res){
    res.sendfile(path.join(__dirname, "assets/pages/about.html"));
});

//creating server
app.listen(PORT,function(){
    console.log("App listening on PORT " + PORT);
});
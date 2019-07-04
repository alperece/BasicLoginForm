// 1 Create variables and define the modules:
// 2 Define the express, use bodyParser: 
// 3 GET request - to get data  :
// 4 POST Request - to sent data from page : 
// 5 Listen the port : 

// *****************************************************

// npm init
// Every Node app is a package, and should have a package.json
// all modules are packages, but not all packages are module. 
// Modules will be installed in the package.json file, and placed into the node_modules folder


// REQUIREMENTS : *********************************************************
// Express - Install with command ( npm install express --save ).
// Body Parser - Install with command ( npm install body-parser --save ).

// *****************************************************

// 1 Create variables and define the modules: *********************************************************
// We need to include the packages in our Node.js application, create the following variables and require the modules:

var express = require("express");
var bodyParser = require("body-parser");

// 2 Define the express, use bodyParser: *********************************************************
// We use EXPRESS to initialize the useful packages like bodyparser 
var app = express();

//the bodyParser package will extract the form data from the index.html file.
//we have to use "body-parser" node module to read HTTP POST data

// bodyParser.urlencoded({ extended: true }) :
//if extended: true, then you can parse nested objects
// Nested Object = { person: { name: cw } }
app.use(bodyParser.urlencoded({extended:false}));

// 4 GET request - get data from the target web application : *************************************************
//When we open the page and refresh the page, the server will send the datas to the index.html file.
//GET is the HTTP method. GET means that we want to receive information from the target web application. 

app.get('/',function(req,res){
    res.sendfile("index.html");
});

// 5 POST Request - sent data from page to server : *********************************************************
//when the client enters new username and password in the login form and clicks the submit button, the form data will be sent to the server by POST request.

//we define POST request and function
//After, we create 2 variables (user_name, password)

//POST method : to post the information to the target web application 

app.post('/login',function(req,res){
    var user_name=req.body.user;
    var password=req.body.password;
    console.log("From Client Post request: User name="+user_name+" and password is"+password);
    // res.end() will end the response process
    res.end("yes");
});

// 7 Listen the port : *********************************************************
//Our web application needs to listen on a port, for testing purposes we'll use port 3000:
app.listen(3000,function(){
    console.log("Started on port 3000");
})
var express = require('express');
var app = express();
var bodyParser = require('body-parser')
var Connection = require('tedious').Connection;
var Request = require('tedious').Request;
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// File render
app.get('/',function(req,res){
     res.sendFile(__dirname+'/'+'sample.html');

});
// DB Configarations

app.listen(process.env.port|| process.env.PORT||4000, function(){
console.log("Server is running at 4000");
});

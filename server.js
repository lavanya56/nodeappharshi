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
var config =
    {
        userName: 'myadmin', // update me
        password: 'Miracle@123', // update me
        server: 'opentable.database.windows.net', // update me
        options:
        {
            database: 'opentable' //update me
            , encrypt: true
        }
    }


app.post('/sample',function(req,res){
console.log("Inside function API");
var user = req.body.username;
var pass = req.body.pass;

var connection = new Connection(config);
            connection.on('connect', function (err) {
                if (err) {
                    console.log(err)
                }
                else {
                    console.log("database connected")
                    
               
	request1 = new Request(
                                            "INSERT INTO SAMPLE_table(username,password) VALUES('" + user + "','" + pass + "')",
                                            function (err, re) {
                                                if (err) {
                                                    console.log(err)
                                                }
                                                else {
													console.log("Data inserted successfully")
													res.send("Login success");
												}
											});
											connection.execSql(request1);

											 }
            }
            );

});
app.listen(process.env.port|| process.env.PORT||4000, function(){
console.log("Server is running at 4000");
});

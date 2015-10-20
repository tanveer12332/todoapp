/// <reference path="./../typings/tsd.d.ts" />
import express = require('express');
var bodyParser = require('body-parser');
var viewRenderEngine = require('ejs');

var app:express.Express = express();

app.use(express.static('./public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('views','./src/views');
app.set('view engine','ejs');

//check route error
app.use(function (err:any, req, res, next){
	console.log(err + ":" + "Error");
	res.send(err);
	
});

app.get('/', function(req, res,next){
	res.render('index',{
		title : 'First TodoApp',
		supplies:	JSON.stringify([{id:1 , name: "Rehan", age: 24},
	{id:2 , name: "A", age: 24},
	{id:3 , name: "B", age: 24},
	{id:4 , name: "C", age: 24},
	{id:5 , name: "D", age: 24},
	{id:6 , name: "E", age: 24},
	{id:7 , name: "f", age: 24},
	{id:8 , name: "G", age: 24},])
	});
	
	
})
app.post('/', function(req,res,next){
	var data= res.json(req.body);
	res.render('index',{
		title : 'First TodoApp',
		supplies:	JSON.stringify([{id:1 , name: "Rehan", age: 24},
	{id:2 , name: "A", age: 24},
	{id:3 , name: "B", age: 24},
	{id:4 , name: "C", age: 24},
	{id:5 , name: "D", age: 24},
	{id:6 , name: "E", age: 24},
	{id:7 , name: "f", age: 24},
	{id:8 , name: "G", age: 24},])
	});
	next();
});




///server setting 
var port: number= process.env.PORT || 3000;
var server = app.listen(port, () => {
	var listeningPort: number = server.address().port;
	console.log('The Server is listening on port: ' + listeningPort)
});
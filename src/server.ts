/// <reference path="./../typings/tsd.d.ts" />
import express = require('express');
var bodyParser = require('body-parser');
var viewRenderEngine = require('ejs');

var app:express.Express = express();

app.use(express.static('./public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.set('views','./src/views');
app.set('view engine','ejs');

//check route error


var data= [{id:0,name:"Tanveer",email:"igm.tan@gmail.com"},{id:1,name:"Kamran",email:"kamran@gmail.com"}];
	
app.get('/', function(req, res,next){
	res.render('index',{
	title : 'First TodoApp',
	supplies:data
		
	});

})
app.post('/', function(req,res){
	data.push({id: (data.length + 1), name: req.body.inputname, email: req.body.inputEmail})
	res.redirect('/');
	
});
app.get('/:id', function(req,res, next){
data.forEach(function(val,index){
if(val.id == req.params.id){
 data.splice(index, 1);
 res.redirect('/');
}
})
next();
});

app.use(function (err:any, req, res, next){
	console.log(err + ":" + "Error");
	res.send(err);
	
});

///server setting 
var port: number= process.env.PORT || 3000;
var server = app.listen(port, () => {
	var listeningPort: number = server.address().port;
	console.log('The Server is listening on port: ' + listeningPort)
});

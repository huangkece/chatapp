var express = require('express');
var app = express();
app.use(express.static('public'));
app.use(express.static('public/css'));
app.use(express.static('public/img'));
app.use(express.static('public/js'));
app.use(express.static('public/webapp'));

app.post('/save',function(req, res){  
  res.contentType('text');
  
    var str = "";    
    req.on("data",function (chunk) {     
        str += chunk;    
         
    });    
    req.on("end",function () { 
        console.log(str);   
        res.send(str);    
         
    });


  
});  
var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
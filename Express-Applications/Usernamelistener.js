var express = require('express');
var app = express();
var cors = require('cors');
var fs = require('fs');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors());

app.post('/', function(req , res){
  console.log(req.body.name);
  if(req.body.name==''){
    res.send("false");
  }
  else{
    fs.appendFile('mynamefile.txt',req.body.name,function (err){
      if (err) throw err;
      console.log('saved!!!');
    })
    res.send('true');
  }
})
//start your server on port 3001
app.listen(8080, () => {
  console.log('Server started');
});

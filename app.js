var express = require('express');
var app = express();

var serv = require('http').Server(app);

app.engine('html', require('ejs').renderFile);

var links1 = ['https://echoar-storage.s3.us-east-2.amazonaws.com/0_model_samples/d686a655-e800-430d-bfd2-e38cdfb0c9e9.glb','https://echoar-storage.s3.us-east-2.amazonaws.com/0_model_samples/6af76ce2-2f57-4ed0-82d8-42652f0eddbe.glb']
var links2 = ['https://echoar-storage.s3.us-east-2.amazonaws.com/0_model_samples/d686a655-e800-430d-bfd2-e38cdfb0c9e9.usdz','https://echoar-storage.s3.us-east-2.amazonaws.com/0_model_samples/6af76ce2-2f57-4ed0-82d8-42652f0eddbe.usdz']
var names = ['skyscraper','fox']

app.get('/',function(req,res) {
	var index = Math.floor((Math.random() * 2) + 1)-1;
	res.render('template.html', {root: __dirname, name: names[index], link1: links1[index], link2: links2[index]})
});

app.use('/js',express.static('./js', { root: __dirname }));

serv.listen(process.env.PORT || 3000)
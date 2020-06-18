var express = require('express');
var app = express();

var serv = require('http').Server(app);

app.get('/',function(req,res) {
        res.sendFile('./index.html', { root: __dirname })
});

app.use('/client',express.static('./client', { root: __dirname }));

serv.listen(3000 || process.env.PORT);
var express = require('express');
var app = express();

var serv = require('http').Server(app);

app.get('/',function(req,res) {
        res.sendFile('./client/index.html', { root: __dirname })
});

app.use('/client',express.static('./client', { root: __dirname }));

serv.listen(process.env.PORT || 3000)
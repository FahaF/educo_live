let express = require('express');
let app = express();
let server = require('http').Server(app);
let io = require('socket.io')(server);
let stream = require('./ws/stream');
let path = require('path');
let favicon = require('serve-favicon');
let port = process.env.PORT || 8000

app.use(favicon(path.join(__dirname, 'favicon.ico')));
app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html'); // dirname onno jekono pc te jekono jaigai thakleo jeno html file ta pete pari sejonne, mane eta html file er location ta access kore
});

/*
 app.post() -->for sending back data
 mane server e data dibe. etar jonne npm install body parser lagbe
 eta diye input data access kore hisab nikash korte parbo
 */
io.of('/stream').on('connection', stream);


server.listen(port);
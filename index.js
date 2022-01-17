const express = require('express');

const requestIp = require('request-ip');


const app = express();

const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res)=> {
    console.log(requestIp.getClientIp(req), new Date().toString());
    res.render('pages/table');
})
app.get('/graph', (req, res)=> {
    console.log(requestIp.getClientIp(req), new Date().toString());
    res.render('pages/graph');
})
app.get('/table', (req, res)=> {
    console.log(requestIp.getClientIp(req), new Date().toString());
    res.render('pages/table');
})
app.listen(port, ()=>{
    console.log('server is running');
})
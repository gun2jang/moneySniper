const express = require('express');
const requestIp = require('request-ip');


const app = express();


const port = 3000;


const getFromExcel = require('./utils/getFromExcel');

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(express.json());

app.get('/', (req, res)=> {
    console.log(requestIp.getClientIp(req), new Date().toString());
    return res.redirect('/whatwedo')
})

app.get('/whatwedo', (req, res) => {
    res.render('pages/whatwedo');
})



// GET /graph
app.get('/graph', (req, res) => {
    return res.redirect('/graph/:BTC');
})
app.get('/graph/:ticker', (req, res)=> {
    res.render('pages/graph', {ticker:  req.params.ticker.slice(1)});
})
app.get('/graph/getData/:ticker', (req, res)=> {
    let jsonData = getFromExcel(req.params.ticker.slice(1));
    res.json({graphInfo : jsonData});
})


// GET /table
app.get('/table', (req, res) => {
    return res.redirect('/table/:BTC')
})
app.get('/table/:ticker', (req, res)=> {
    let jsonData = getFromExcel(req.params.ticker.slice(1));
    res.render('pages/table', {tableInfo : jsonData.reverse()});
})


app.listen(port, ()=>{
    console.log('server is running');
})
const http = require('http');
const dns = require('dns');
const express = require('express');
const app = express();
const port = 7000;

const url = "google.com";
app.get('/', (req, res) => {
    res.write('<h1>Type /getmeip above to get the ip address</h1>');
})
const server = app.get('/getmeip', (req, res) => {
    dns.resolve(url, (err, addresses) => {
        if (err) {
        res.send(err);
        } else {
        res.json({"addresses":addresses});
        }
    });
})


server.listen(port, function(error){
    if(error){
        console.log("Something went wrong", error);
    }else{
        console.log("Server is running on port ", port);
    }
})
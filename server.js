const db = require('./dbhelpers/db.js');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path')
const app = express();

const port = 3002

app.use(bodyParser.json());
// app.use(express.static('public/index.html'))
app.use(express.static('public'));
app.get("/", function(req,res ){
  res.sendFile(path.join(__dirname + "/public/index.html"))
});

app.get("/items", function(req, res) {
   db.getAll((err, data) => {
     res.send(data).status(200)
   });
})

app.listen(port, ()=> {
    console.log("slowly strolling at port " + port)
});
// var data = seeds;
//nothing to see here yet lol
// console.log(data.slice(0,2));
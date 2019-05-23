const db = require('./dbhelpers/db.js');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path')
const app = express();

const port = 3002

app.use(bodyParser.json());
// app.use(express.static('public/index.html'))
app.use(express.urlencoded())
app.use(express.static('public'));
app.get("/", function(req,res ){
  // console.log("BLAH")
  res.sendFile(path.join(__dirname + "/public/index.html"))
});

app.get("/items/:id", function(req, res) { // this route is pretty smart. you can either pass the array value which corrisponds to the tjnid which on item reads  {tjnid: "tjn-id24"} for example. All that is passed in for the id here is 24 in that case. This route is smart because it works equally as well with the item name.
  db.getOne(req.params.id, (err, data) => {
    if(err || data.length===0){
      res.status(404).send("error, item not found")
    }
    res.send(data).status(200);
  });
})

app.get("/items/", function(req, res) { // gets all items in db
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


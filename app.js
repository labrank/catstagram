var express = require("express");
var app = express();
const db = require('./DB-cats/db');
const util = require('./downloadImage');
var path = require('path');
var serveStatic = require('serve-static');

const port = process.env.PORT || 3000;
util.clearAll();
util.batchCats().then(() =>{
  console.log("download finished");
});


app.get("/cats", async(req, res, next) =>  {
  var cats = await db.buscar()
       .then(function(rows){
         return rows;
       })
         .catch(
           console.error);
 res.json(cats);
});
app.use(serveStatic(__dirname + "/dist"));
app.listen(port, () => {
 console.log("Server running on port 3000");
});

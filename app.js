var express = require("express");
var app = express();
const db = require('./DB-cats/db');
const util = require('./downloadImage');

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

app.listen(3000, () => {
 console.log("Server running on port 3000");
});

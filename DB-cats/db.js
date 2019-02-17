const sqlite3 = require('sqlite3').verbose();

async function insertar(id, url, nombre) {

  //const valores = require('./downloadImage');

  // open database in memory
  let userDB = new sqlite3.Database("DB-cats/cats.db",
    sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
    (err) => {
      // do your thing
    });

  userDB.run('CREATE TABLE IF NOT EXISTS  cats(id text, url text, ubicacion text)');
  userDB.run('CREATE TABLE IF NOT EXISTS favoriteCats(cookie text, id_cat text)');
  userDB.run('CREATE TABLE IF NOT EXISTS  users(cookie text)');
  // insert one row into the langs table
  userDB.run(`INSERT INTO cats(id, url,ubicacion) VALUES(? , ? , ?)`, [id, url, nombre], function(err) {
    if (err) {
      return console.log(err.message);
    }
    // get the last insert id
    console.log('Se inserto un valor');
  });
  // close the database connection
  userDB.close((err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Close the database connection.');
  });
}

async function buscar() {
  let db = new sqlite3.Database('DB-cats/cats.db');
  let sql = `SELECT 'static/images/'||ubicacion as ubicacion, id as id FROM cats
           ORDER BY id`;

  return new Promise(function(resolve, reject) {
      db.all(sql, [], (err, rows) => {
        if (err) {
          reject(new Error(err));
        } else {
          resolve(rows);
        }
      })
})
}
function borrar(){
  let db = new sqlite3.Database('DB-cats/cats.db');
  let sql = `DELETE FROM cats`;

  db.run(sql, [], function(err) {
  if (err) {
    return console.error(err.message);
  }
  console.log('no cats in database');
});
}
// buscar();
module.exports = {
  borrar,
  insertar,
  buscar
}

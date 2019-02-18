const image = require('./images')
const db = require('./DB-cats/db')
const Fs = require('fs')
const Path = require('path')
const Axios = require('axios')
const rimraf = require('rimraf');

  async function batchCats() {
    let cats = await image.getBreeds();
    console.log(`tenemos ${cats.data.length} gatos`);
    for (let i = 0; i < cats.data.length; i++) {
      var url = cats.data[i].url;
      var id = cats.data[i].id;
      downloadImage(url, id, i).catch(e => console.log(e));
  }
  }

function clearAll(){
  db.borrar();
  const directory = './dist/static/images';

Fs.readdir(directory, (err, files) => {
  if (err) throw err;

  for (const file of files) {
    Fs.unlink(Path.join(directory, file), err => {
      if (err) {
        console.log(err);
      };
    });
  }
});
}

    async function downloadImage (url, id, i) {
      //catstagram/static/images
      const path = Path.resolve(__dirname, './dist/static/images', `${id}.jpg`)
      const writer = Fs.createWriteStream(path)
      console.log(`${i}.- id:${id} ---- url:${url}`);
      db.insertar(id, url, `${id}.jpg`);
      const response = await Axios({
        url,
        method: 'GET',
        responseType: 'stream'
      })

      response.data.pipe(writer)

      return new Promise((resolve, reject) => {
        response.data.on('end', ()=>{
          resolve()
        })

        response.data.on('error', err =>{
          reject(err)
        })

      })
    }

    module.exports = {
      downloadImage,
      batchCats,
      clearAll
    }

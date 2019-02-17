const axios = require('axios')

const getBreeds = async () => {
  try {
    return await axios.get('https://api.thecatapi.com/v1/images/search?limit=10')
  } catch (error) {
    console.error(error)
  }
}

const countBreeds = async () => {

  const cats = await getBreeds()
  console.log(cats.data[0].url);
  if (cats.data.id) {
    console.log(`Got ${Object.entries(cats.data).length} breeds`)
  }
}

module.exports = {
  getBreeds
}
//countBreeds()

const connection = require('./index.js');
const Product = require('../db/index.js');


const get = (req, res) => (
  Product.find({})
  .then((data) => {res.status(200).send(data)})
  .catch((err) => {res.status(404).send('could not get data: ', err)})
)



module.exports = {get};
const router = require('express').Router()
const controller = require('./controller.js');

router
  .route('/products')
  .get(controller.get);




  module.exports = router;
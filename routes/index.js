const express = require('express');

let router = express.Router();

router.get('/', (req, res, next) => {
  res.send('INDEX PAGE - TEST');
})

module.exports = router;

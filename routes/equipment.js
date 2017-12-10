const express = require('express');

let router = express.Router();

router.get('/equipment', (req, res, next) => {
  res.send('EQUIPMENT PAGE - TEST');
})

module.exports = router;

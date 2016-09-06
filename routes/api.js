const express = require('express');

const router = express.Router();

router.post('/add', (req, res, next)=> {
  res.json({result: req.body.num1 + req.body.num2});
});

module.exports = router;

const express = require('express');

const router = express.Router();

router.post('/add', (req, res, next)=> {
  if(!req.body.num1 && !req.body.num2)
  return res.status(432).json({message: "No data"});

  res.json({result: req.body.num1 + req.body.num2});
});

router.post('/subtract', (req, res, next)=> {
  if(!req.body.num1 && !req.body.num2)
  return res.status(432).json({message: "No data"});

  res.json({result: req.body.num1 - req.body.num2});
});

router.post('/multiply', (req, res, next)=> {
  if(!req.body.num1 && !req.body.num2)
  return res.status(432).json({message: "No data"});

  res.json({result: req.body.num1 * req.body.num2});
});

router.post('/divide', (req, res, next)=> {
  if(!req.body.num1 && !req.body.num2)
  return res.status(432).json({message: "No data"});

  res.json({result: req.body.num1 / req.body.num2});
});


module.exports = router;

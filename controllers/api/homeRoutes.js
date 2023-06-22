const router = require('express').Router();
const { User } = require('../../models');

router.get('/', async (req, res) => {
  try {

console.log(req.json, res.json)
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
const router = require('express').Router();
const fetch = require('node-fetch');

router.get('/', async (req, res) => {
  
    res.render('./instructions')
    
});

module.exports = router;
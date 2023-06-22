const router = require('express').Router();
const fetch = require('node-fetch');

router.get('/', async (req, res) => {
    let options = {
        method: "GET",
        headers: { "X-Api-Key": "c6zYH9j97tY8e4IyXXNHfA==TrC4jZ68YEo2FrrD"}
    }
    try {
        const response = await fetch(`https://api.api-ninjas.com/v1/exercises?muscle=biceps`, options);
        if(!response.ok) {
            throw new Error('Failed to fetch data from the API')
        }
        const data = await response.json()
        console.log(data);
        return data;
      
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch data from the API'});
    };
});

// router.get('/', async (req, res) => {
//     res.render('workouts')
// })

module.exports = router;
const router = require('express').Router();
const { User } = require('../../models');

router.post('/signup', async (req, res) => {
    console.log("LOOK HERE")
    console.log(req.body)
    // const userInput = {
    //     name: req.body.userName,
    //     email: req.body.email,
    //     password: req.body.password
    // }
    // console.log(userInput)
    User.create({
        name: req.body.userName,
        email: req.body.email,
        password: req.body.password
    })
    .then(dbUserData => {
        console.log('THISISHTHEDOTTHENUSERDATA!!!!!!!!!!!')
        console.log(dbUserData);
        // res.json(dbUserData);
        req.session.save(() => {
            req.session.user_id = dbUserData.id;
            req.session.username = dbUserData.userName;
            req.session.loggedIn = true;

            res.json(dbUserData);
        })
    })
    // try {
    //     const userData = await User.create({ userInput })
    //     console.log('THIS IS WHERE THE USER DATA IS')
    //     console.log(userData)

    //     req.session.save(() => {
    //         req.session.username = userData.userName;
    //         req.session.user_id = userData.id;
    //         req.session.logged_in = true;

    //         res.status(200).json(userData);
    //     });
    // } catch (err) {
    //     res.status(400).json(err);
    // };
});

router.post('/login', async (req, res) => {
    console.log('THIS IS THE LOGIN ROUTE DATA')
    console.log(req.body)
    try {
        const userData = await User.findOne({ where: { email: req.body.email} });
        
        if (!userData) {
            res
            .status(400)
            .json({ message: 'incorrect email or password, please try again'});
            return;
        }
        const validPassword = await userData.checkPassword(req.body.password);

        if (!validPassword) {
            res
            .status(400)
            .json({ message: 'Incorrect email or password, please try again'});
            return
        }
        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;

            res.json({ user: userData, message: 'You are now logged in' });
        });
    } catch (err) {
        res.status(400).json(err);
    }
});

router.post('/logout', (req,res) => {
    if (req.session.logged_in) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();1
    }
});

module.exports = router;
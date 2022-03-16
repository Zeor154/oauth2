const { Router } = require('express');
const router = Router();
const passport = require('passport');

function unauth(req, res, next) {
    if (req.user) {
        next()
    } else {
        res.redirect('/auth/401')
    }
}

router.get('/', passport.authenticate('discord'))
router.get('/redirect', passport.authenticate('discord', {
    successRedirect: '/auth/success',
    failureRedirect: '/auth/401'
}))

router.get('/logout', (req, res) => {
    if (req.user) req.logout()
    res.redirect('/')
})

router.get('/success', unauth, (req, res) => {
    res.render('success', {
        user: req.user
    })
})

router.get('/401', (req, res) => {
    res.render('401')
})

module.exports = router;
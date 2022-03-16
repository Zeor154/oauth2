const { Router } = require('express');
const router = Router();

function unauth(req, res, next) {
    if (req.user) {
        next()
    } else {
        res.redirect('/auth/401')
    }
}

router.get('/', unauth, (req, res) => {
    res.render('dashboard', {
        user: req.user
    })
})

module.exports = router;
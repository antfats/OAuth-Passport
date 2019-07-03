const router = require('express').Router();
const passport = require('passport');

//auth login
router.get('/login', (req, res) => {
    res.render('login', { user: req.user });
});


// auth logout
router.get('/logout', (req, res) => {
    req.logout();
    // req.session.destroy();
    req.session = null;
    res.redirect('https://www.google.com/accounts/Logout?continue=https://appengine.google.com/_ah/logout?continue=http://localhost:3000');


});

//auth with google
router.get('/google', passport.authenticate('google', {
    scope: ['profile']
}));

//callback route for google to redirect to
router.get('/google/redirect', (req, res) => {

    res.send('You reached the redirect URI!');
});

module.exports = router;
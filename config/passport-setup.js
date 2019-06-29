const passport = require('passport');
const GoogleStragety = require('passport-google-oauth20');
const keys = require('./keys')


passport.use(
    new GoogleStragety({
        //options for the google stragety! aka OAuth

        callbackURL: '/auth/google/redirect',
        clientID: keys.google.clientID,
        clientSecret: keys.google.clientSecret
    }, () => {

    })
);
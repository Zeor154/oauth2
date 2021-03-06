const passport = require('passport');
const User = require('../models/User.js');
const { Strategy } = require('passport-discord').Strategy;

passport.serializeUser((user, done) => {
    done(null, user.id)
})

passport.deserializeUser(async(id, done) => {
    const user = await User.findById(id)
    if (user) done(null, user)
})

passport.use(new Strategy({
    clientID: '',
    clientSecret: '',
    callbackURL: '',
    scope: ['identify']
}, async(accessToken, refreshToken, profile, done) => {
    try {
        console.log(profile)

        const newUser = User({
            discordId: profile.id,
            username: profile.username,
            avatar: profile.avatar
        })

        console.log(newUser)
        const Userlol = await newUser.save()
        
        done(null, Userlol)
    } catch (err) {
        console.log(err)
        return done(err, null)
    }

}))

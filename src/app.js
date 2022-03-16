const express = require('express');
const app = express();
const path = require('path');
const session = require('express-session');
const passport = require('passport');
const MongoStore = require('connect-mongo');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname + '/views'))

app.use(session({
    store: MongoStore.create({
        mongoUrl: 'mongodb+srv://myuser:userman12@cluster0.5s0n3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
'
    }),
    secret: 'some random secret',
    saveUninitialized: false,
    resave: false,
    name: 'lol',
}))
app.use(passport.initialize())
app.use(passport.session())

app.use('/', require('./routes/index.routes.js'))
app.use('/dash', require('./routes/dashboard.routes.js'))
app.use('/auth', require('./routes/auth.routes.js'))

app.get('*', (req ,res) => {
    res.render('404')
})



module.exports = app;

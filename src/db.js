const { connect } = require('mongoose');

connect('mongodb+srv://myuser:userman12@cluster0.5s0n3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
')
    .then(() => { console.log('Connect to mongodb') })
    .catch((err) => { console.log(err) })

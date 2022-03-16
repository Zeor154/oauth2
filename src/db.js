const { connect } = require('mongoose');

connect('mongodb://localhost/discordapp')
    .then(() => { console.log('Connect to mongodb') })
    .catch((err) => { console.log(err) })
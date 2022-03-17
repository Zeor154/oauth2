const { connect } = require('mongoose');

connect('')
    .then(() => { console.log('Connect to mongodb') })
    .catch((err) => { console.log(err) })

const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    discordId: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
        required: true
    }
});

module.exports = model('User', userSchema);
const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {type: String, required: true},
    username: {type: String, required: true},
    password: {type: String},
    dob: {type: Date, required: true}
});

module.exports = mongoose.model('User', userSchema);
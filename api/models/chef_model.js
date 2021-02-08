const mongoose = require('mongoose');

const chefSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {type: String, required: true},
    username: {type: String, required: true},
    password: {type: String},
    specialty: {type: String}
});

module.exports = mongoose.model('Chef', chefSchema);
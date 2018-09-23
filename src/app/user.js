const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String
});

const User = mongoose.model('user', userSchema);
module.exports = User;
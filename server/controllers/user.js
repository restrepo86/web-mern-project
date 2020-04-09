const bcrypt = require('bcrypt-nodejs');
const User = require('../models/user');

function signUp(req, res) {
    console.log('EndPoint de Sign Up');
};

module.exports = {
    signUp
};
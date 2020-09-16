const constants = require("../config/constants.js");
const jwt = require("jsonwebtoken");

module.exports = {
    isValid,
    signToken
};

function isValid(user){
    return Boolean(user.username && user.password && typeof user.password === "string");
}

function signToken(user){
    const payload = {
        subject: user.id,
        username: user.username,
        department: user.department
    }
    const secret = constants.jwtSecret;
    const options = {
        expiresIn: '8h'
    }
    return jwt.sign(payload, secret, options)
}
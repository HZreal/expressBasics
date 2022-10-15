const jwt = require('jsonwebtoken')
const expressJwt = require('express-jwt')
const {jwtSecret} = require("../config/key");

function jwtEncode(payload) {
    return jwt.sign(payload, jwtSecret, {expiresIn: '2d'})
}


function jwtDecode(jwtStr) {
    return jwt.verify(jwtStr, jwtSecret)
}

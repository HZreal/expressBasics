/*
已经有封装好的express-jwt   故不需要自己写
 */

function jwtAuthMiddleware(req, res, next) {
    // jwt校验

    next()
}

module.exports = {
    jwtAuthMiddleware
}

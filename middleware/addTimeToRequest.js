// export const addRequestTime = (req, res, next) => {
//     req.requestTime = Date.now()
//     next()
// }

module.exports = (req, res, next) => {
    req.requestTime = Date.now()
    next()
}
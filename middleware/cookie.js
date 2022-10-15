const cookieValidator = require('../utils/validCookie');

// export const validateCookies = async  (req, res, next) => {
//     await cookieValidator(req.cookies)
//     next()
// }
module.exports = async (req, res, next) => {
  await cookieValidator(req.cookies);
  next();
};

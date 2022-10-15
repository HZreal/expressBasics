// export const cookieValidator = async (cookies) => {
//     try {
//         // await externallyValidateCookie(cookies.testCookie)
//         if (cookies.testCookie === 'hello'){
//             console.log('validate success')
//         }
//     } catch {
//         throw new Error('Invalid cookies')
//     }
// }

module.exports = async (cookies) => {
  try {
    // await externallyValidateCookie(cookies.testCookie)
    if (cookies.testCookie === 'hello') {
      console.log('validate success');
    }
  } catch {
    throw new Error('Invalid cookies');
  }
};

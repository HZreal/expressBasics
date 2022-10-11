var express = require('express');
const addRequestTime = require("../middleware/addTimeToRequest");
var router = express.Router();

router.use(addRequestTime)

/*
获取中间件中设置的字段
 */
router.get('/', function (req, res, next) {
    let responseText = 'Hello World!<br>'
    responseText += `<small>Requested at: ${req.requestTime}</small>`
    res.send(responseText)
});


module.exports = router;

const express = require('express');
const addRequestTime = require('../middleware/addTimeToRequest');
const {userList, userDetail} = require('../controller/user');
const router = express.Router();


router.get('/list', userList);
router.get('/detail', userDetail);


module.exports = router;

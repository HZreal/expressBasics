async function userList(req, res, next) {
    // 当指定了JWT认证后，就可以从req中获取认证成功的user(默认req中没有)
    const user = req.user
    console.log('user  ---->  ', user)


    res.json({
        code: 0,
        msg: 'success',
        data: [{
            username: 'qqq', phone: 13457637381,
        }, {username: 'qqq', phone: 13457637381}],
    });
}

async function userDetail(req, res, next) {
    res.json({code: 0, msg: 'success', data: 'user object'});
}

module.exports = {
    userList,
    userDetail
};

var express = require('express');
const path = require("path");
const {route} = require("express/lib/router");
var router = express.Router();

// 指定中间件
// router.use((req, res, next) => {
//     console.log('Time: ', Date.now())
//     next()
// })

/*
GET home page.
*/
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

/*
响应类型
 */
router.get('/res', (req, res, next) => {
    // 快速结束响应，不返回数据
    res.status(404).end()

    // 提供文件给client下载
    res.download('file path', (err) => {
    })

    // 可以指定多种类型数据返回，如string(json) object buffer boolean array
    res.send()

    //
    res.sendFile('path', {root: path.join(__dirname, 'public')})

    // 返回json
    res.json({code: 0, msg: 'success', data: null})

    //
    res.redirect('url')

    //
    res.render('index')
})

/*
回调函数的多种方式
 */
// 1.单个回调函数
router.get('/example/a', (req, res) => {
    res.send('Hello from A!')
})
// 2.多个回调函数，用next()连接
router.get('/example/b', (req, res, next) => {
    console.log('the response will be sent by the next function ...')
    next()
}, (req, res) => {
    res.send('Hello from B!')
})
// 3.多个回调函数数组形式
const cb0 = function (req, res, next) {
    console.log('CB0')
    next()
}
const cb1 = function (req, res, next) {
    console.log('CB1')
    next()
}
const cb2 = function (req, res) {
    res.send('Hello from C!')
}
router.get('/example/c', [cb0, cb1, cb2])
// 4.单个回调函数与回调函数数组的结合
const cb00 = function (req, res, next) {
    console.log('CB0')
    next()
}
const cb01 = function (req, res, next) {
    console.log('CB1')
    next()
}
router.get('/example/d', [cb00, cb01], (req, res, next) => {
    console.log('the response will be sent by the next function ...')
    next()
}, (req, res) => {
    res.send('Hello from D!')
})

/*
创建链式路由处理器
 */
router.route('/book')
    .get((req, res) => {
        res.send('Get a random book')
    })
    .post((req, res) => {
        res.send('Add a book')
    })
    .put((req, res) => {
        res.send('Update the book')
    })


module.exports = router;

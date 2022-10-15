// import * as path from "path";
// import * as express from 'express'
// import * as createError from 'http-errors'
// import * as cookieParser from 'cookie-parser'
// import * as logger from 'morgan'
// import * as indexRouter  from './routes/index'
// import * as usersRouter  from './routes/users'

const express = require('express');
const path = require('path');
const createError = require('http-errors');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const validateCookies = require('./middleware/cookie');

// 导入router
const indexRouter = require('./routes/index');
const userRouter = require('./routes/user');
// 导入中间件
const {jwtAuthMiddleware} = require("./middleware/jwtAuth");
const {errHandler} = require("./exception/errorHandler");
const cors = require("cors");
const expressJwt = require('express-jwt')
const {jwtSecret} = require("./config/key");

const app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// enable logger
app.use(logger('dev'));
//
app.use(express.json());
app.use(express.urlencoded({extended: false}));
// enable cookies
app.use(cookieParser());
app.use(validateCookies);
// 启用静态文件
app.use(express.static(path.join(__dirname, 'public')));

// 启用全局中间件
// 启用JWT认证，指定key和白名单
app.use(expressJwt({secret: jwtSecret})).unless({path: ['sys/register', 'sys/login']})

// JSONP接口
// 注意：JSONP接口必须在跨域之前，防止冲突
app.get('/api/jsonp', (req, res) => {
    const functionName = req.query.callback
    const data = JSON.stringify({num1: 22, num2: 13})

    const scriptStr = `${functionName}(${data})`
    res.send(scriptStr)
})

// cors
// 安装cors后注册到app即可
// 默认仅支持客户端向服务端发送9个请求头: Accept, Content-Type等
// TODO jwt认证在头部携带token是不是就要设置允许的头部字段？
app.use(cors())


// 加载路由controller模块
app.use('/', indexRouter);
app.use('/user', userRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
    next(createError(404));
});

// 异常处理器中间件
app.use(errHandler);


app.listen(3000, () => {
    console.log('server is listening 3000');
});

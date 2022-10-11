// import * as path from "path";
// import * as express from 'express'
// import * as createError from 'http-errors'
// import * as cookieParser from 'cookie-parser'
// import * as logger from 'morgan'
// import * as indexRouter  from './routes/index'
// import * as usersRouter  from './routes/users'

const express = require('express');
const path = require('path')
const createError = require('http-errors');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const validateCookies = require("./middleware/cookie");

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
app.use(validateCookies)
// root path of static file setup
app.use(express.static(path.join(__dirname, 'public')));

// 加载路由controller模块
app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
    next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

// module.exports = app;
app.listen(3000, () => {
    console.log('server is listening 3000')
})
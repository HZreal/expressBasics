const express = require('express');

const app = express()
const port = 3000

app.get('/get', (req, res) => {
    console.log(req)
    res.send({code: 0, msg: 'success', data: 'data'})
})

app.post('/post', (req, res) => {
    console.log(req)
    res.send({code: 0, msg: 'success', data: 'data'})
})

app.listen(port, () => {
    console.log(`server is listening at ${port} !    `)
})



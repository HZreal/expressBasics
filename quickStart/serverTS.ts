import * as express from 'express'


const app = express()

app.get('/get', (req, res) => {
    console.log(req)
    res.send({code: 0, msg: 'success', data: 'data'})
})

app.post('/post', (req, res) => {
    console.log(req)
    res.send({code: 0, msg: 'success', data: 'data'})
})


app.listen(80, () => {

})










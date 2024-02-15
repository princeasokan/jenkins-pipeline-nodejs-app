const express = require('express')
const cors = require('cors')
//const bodyParser = require('body-parser')
const routes = require('./routes')

const app = express()
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(routes)
app.post('/login', (req, res) => {
    if (req.body.username == 'user1' && req.body.password == 'u123') {
        return res.json({ user: '', status: true })
    }
    return res.json({ user: '', status: false })


})

app.listen(4000, () => { console.log('server started') })
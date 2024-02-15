const router = require('express').Router();
const path = require('path')
const fs = require('fs')
router.get('/upload', (req, res) => {
    let file = path.join(__dirname, 'data.json')

    let read = fs.createReadStream(file)
    read.on('data', (chuck) => {
        console.log(chuck.toString())
    })
    res.setHeader('Content-disposition', 'attachment;filename=abc.json')
    read.pipe(res)
    // return res.

})
module.exports = router;
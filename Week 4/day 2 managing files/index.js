const express = require('express')
const upload = require('express-fileupload')

const app = express()

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/index.html')
})
app.listen(5000)
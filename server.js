var express = require('express')
var app =express()

var router = require('./router.js')
app.use('/', router)

app.listen(8080,()=>{console.log("Server Running on http://localhost:8080")})


///always use a server file to run a MEAN app
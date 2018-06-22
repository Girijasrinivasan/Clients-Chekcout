var express = require('express')
var app = express()
var path=require('path')
var bodyParser = require('body-parser');
var db=require('./Database')//Database 

//important for get req body  from angular
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : true}))
app.get('/', function(req, res){
    res.sendFile(path.join(__dirname,'Client-Side/proj3.html'))
})
// app.use('/routing', express.static(path.join(__dirname, 'routing')))

app.use(express.static(path.join(__dirname, '/Client-Side/')))
app.use(express.static(path.join(__dirname, '/bin/')))



//  gets newCreate from angular
app.post('/newCreate',function(req, res){
    console.log(req.body)
    new db({name:req.body.name,email:req.body.email,phonenumber:req.body.phone_number,comments : req.body.comments }).save()
    // sent response to angular
    res.send('success')
})


//  gets  from angular
app.get('/getData',function(req, res){

    // getting data from db
    db.find({},function (err, data) { 
        if(err) {console.log(err)}
        res.send(data)//sending to angular
     })
})



app.get('/dalist',function(req,res){
    db.find({},function(err,data){
        console.log(data)
        res.json(data)
 })
 })




module.exports = app
//exporting all modules into our app ..which willl be a router
// app.listen(3000)
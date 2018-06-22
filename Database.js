var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/comments');

mongoose.connection.on('connected',()=>{console.log("mongoDB Connected")})
mongoose.connection.on('error',(err)=>{console.log(err)})

var daSchema = mongoose.Schema({
  name: String,
  email: {type:String},
  phonenumber: Number,
  comments: {type:String}
});

var ani = mongoose.model('Ani',daSchema);
module.exports = ani;
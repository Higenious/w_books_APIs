import mongoose from 'mongoose';
mongoose.Promise = Promise;
const Schema = mongoose.Schema;


let author = new Schema({
  name : {type:String, maxlength:20},
  email : {type:String, required:false},
  city : {type:String, required:true},
  uuid :{type:String, required:true},
  mobile : {type:Number, maxlength:11},
  password : {type: String, required:false},
  authToken : {type:String, required:false}
})


/**exporting modules */
module.exports.author = mongoose.model('author', author);

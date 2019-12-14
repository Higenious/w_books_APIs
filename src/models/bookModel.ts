import mongoose from 'mongoose';
mongoose.Promise = Promise;
const Schema = mongoose.Schema;


const book = new Schema({
  title : {type:String},
  description : {type:String},
  author : {type:String},
  cover :{type:String},
  price : {type:Number},
  publisher_uuid : {type:String},
  status:{type:String}
})


/**exporting modules */
module.exports.book = mongoose.model('book', book);

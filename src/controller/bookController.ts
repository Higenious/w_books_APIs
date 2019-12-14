import log4js from 'log4js';
const logger = log4js.getLogger();
logger.level = 'debug';
import mongoose from 'mongoose';
import e from 'express';
mongoose.Promise = Promise;
logger.debug("author Controller");
const book_model = require('../models/bookModel').book;
const author_model = require('../models/authorModel').author;
//const configg = require('../config/config.ts');








/** publish book */
async function publishBook(req, res) {
    if (req.body) {
        try {
            let {publisher_uuid} = req.body
            const reqBody = req.body;
            console.log('reqbdoy', publisher_uuid);
            const getresult = await author_model.findOne({"uuid":publisher_uuid});
            console.log('rgetting result', getresult);
            if(getresult){
                // reqBody.status= "published";
                logger.info('reqbody', reqBody);
                const data = await book_model(reqBody).save();
                if (data) {
                    res.send('successfully published book');
                }
                else {
                    res.send('Error while publishing book');
                }
            }else{
                res.send('Only Registered  AUthor can publish BookS!');
            }
           
        }
        catch (err) {
            logger.error('err hai bhai', err);
        }

    } else {
        res.send('req body should not be empty..please send required infomration');
    }
}




/** get All published Books */
async function getAllBooks(req, res) {
     try{
      const result =  await book_model.find({"status"  : "published"});
      res.send(result);
     }catch(err){
       logger.error('Error while fetching books', err);
     }
}





/** get by title */
async function getBookByTitle(req, res) {
    try{
        let {book_name}= req.body;
        const result =  await book_model.find({"title"  : book_name});
        if(result.length == 0){
            res.send('Entered book  is not available!');
        }else{
            res.send(result);
        }
       }catch(err){
         logger.error('error while fetching books', err);
       }
}





/** unpublishBook */
async function unpublishBook(req, res){
    try{
        let {book_name, author_uuid}= req.body;
        logger.info('book & uuid', book_name, author_uuid);
        const result =  await book_model.findOneAndUpdate({"title"  : book_name ,"publisher_uuid":author_uuid},{ $set: { status: "unpublished" } },{  new: true });
        if(!result){
            res.status(200).send('Please Enter Valid author id and Author book');   
        }else{
            res.send(result);
        }
       }catch(err){
         logger.error('error while fetching books', err);
       }

}





/** export modules */
module.exports.publishBook = publishBook;
module.exports.getAllBooks = getAllBooks;
module.exports.getBookByTitle = getBookByTitle;
module.exports.unpublishBook =unpublishBook;
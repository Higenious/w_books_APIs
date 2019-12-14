
import mongoose from 'mongoose';
import log4js from 'log4js';
const logger = log4js.getLogger();
logger.level = 'debug';
logger.debug("datbase Connection");
const url ='mongodb://127.0.0.1:27017/wookie_books';
//const url = 'mongodb://chetan:a123456.mlab.com:63988/user_api';
mongoose.connect(url,{ useNewUrlParser: true , useUnifiedTopology: true,  useFindAndModify: false  }  , function(err, result){
    if(!err){
        logger.info('successfully conneted to database!');
    }else
    {
        logger.error('Could not connect to the database. Exiting now...', err);
 
    }});


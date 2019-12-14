import log4js from 'log4js';
import passwordHash from 'password-hash';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
mongoose.Promise = Promise;
const logger = log4js.getLogger();
logger.level = 'debug';
logger.debug("author Controller");
const author_model = require('../models/authorModel').author;
const configg = require('../config/config');
const uuidv1 = require('uuid/v1');




/** Register Author */
async function registerUser(req, res) {
    if (req.body) {
        try {
            logger.info('req body got', req.body);
            const { name, password, email, city } = req.body;
            const passwordHash = require('password-hash');
            const hashedPassword = passwordHash.generate(password);
            const reqBody = req.body;
            reqBody.uuid = uuidv1();
            reqBody.password = hashedPassword;
            logger.info('reqbody', reqBody);
            let response = await author_model.find({ "email": email });
            if (response.length == 0) {
                const data = await author_model(reqBody).save();
                if (data) {
                    res.status(200).send('author has been created successfully!')
                } else {
                    res.status(400).send('failed to create author, please try again later!')
                }
            } else {
                res.status(400).send('author is already registered with us, please try toi log in!')
            }
        } catch (err) {
            logger.error('internal error', err);
        }
    } else {
        res.status(200).send('please provide valid data');
    }

}





/** login for author and create JWT auth token */
async function login(req, res) {
   if(req.body)
   {
    try{
      let {username, password}= req.body;
      logger.info('reqbody is ', req.body);      
      let respnse= await author_model.find({"email" :username});
      if(respnse.length>0){
          logger.info('response is', respnse);
          const pass = respnse[0].password;
          const verify= passwordHash.verify(password, pass);
          console.log('verfi', verify);
          if(verify === true){
            const token = jwt.sign({ username: username },
                configg.secret,
                {
                    expiresIn: '24h' // expires in 24 hours
                }
            );
            await author_model.updateOne({"email" :username}, { $set: { 'authToken': token } }, { returnNewDocument: true });
            respnse[0].authToken = token;
            const response = { message: `author is logged in successfully!`, statusCode: 200, status: "ok", success: true,  data:respnse };
            res.send(response);
          }else{
            res.status(200).send('please check Entered password');     
          }
        }
        else{
          res.status(200).send('Please insure entered Email id is registered !');
      }
    }catch(Err){
        logger.error('error while loggin', Err);
    }
   }
   else{
       res.status(200).send('Please Enter username & password');
   }
}












/** export modules */
module.exports.registerUser = registerUser;
module.exports.login = login;

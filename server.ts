import express from 'express';
import log4js, { getLogger } from 'log4js';
import bodyParser  from 'body-parser';
import cors from 'cors';
const allRoutes= require('./src/routes/allRoutes');
const dbconn = require('./src/dbconnection/dbconnection');
const app= express();
const port =5500;
const logger = log4js.getLogger();
logger.level = 'debug';
logger.debug("server");


// configure the app to use bodyParser()
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(cors());


// import all routes
app.all('*', allRoutes);
app.use('/api/v1',allRoutes);



/** index page called */
app.get('/',(req, res)=>{
    logger.info('welcome to booke shoopers');
    res.status(200).send('welcome to bookie bookies');
})


/** listen server on 5500 port */
app.listen(port,()=>{
    logger.info(`Server Started running on ${port}`);
})





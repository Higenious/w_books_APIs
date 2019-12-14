import express from 'express';
import Router from  'Router';
const router = express.Router();
const  bookController = require('../controller/bookController');
const authorController = require('../controller/authorController');
const middleware = require('../middleware/middleware');

 

/**Routes */
router.post('/user/createuser', authorController.registerUser);
router.post('/user/login',  authorController.login);
router.get('/book/getallbook', middleware.checkToken,  bookController.getAllBooks);
router.post('/book/getbookbytitle', middleware.checkToken, bookController.getBookByTitle);
router.post('/book/publishbook', middleware.checkToken, bookController.publishBook);
router.post('/book/unpublish',  middleware.checkToken,bookController.unpublishBook);





/** Exporting Routes */
module.exports = router;
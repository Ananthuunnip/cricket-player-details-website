const express = require('express');
const router = express.Router();
userController = require('../controller/user-controller')


router.use(express.static('public'));

router.get('/',userController.getmainpage);
router.post('/adddetails',userController.postadddetails);
router.get('/fetchdetails/:inputdata', userController.getfetchdetails)
// router.get('/postdata',userController.postdata);
// router.post('/fetchdetails', userController.fetchDetails);


module.exports = router;
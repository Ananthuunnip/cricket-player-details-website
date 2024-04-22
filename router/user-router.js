const express = require('express');
const router = express.Router();
userController = require('../controller/user-controller')


router.use(express.static('public'));

router.get('/',userController.getmainpage)
router.post('/adddetails',userController.postadddetails)


module.exports = router;
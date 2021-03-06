var router = require('express').Router();
var user = require('./user/index');
var chatroom = require('./chatroom/index');
var place = require('./place/index');
var supporter = require('./supporter/index');
var upload = require('./upload');

router.use('/user', user);
router.use('/chatroom', chatroom);
router.use('/place', place);
router.use('/supporter',supporter);
router.use('/images', upload);

module.exports = router;

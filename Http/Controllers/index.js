const express = require('express');
const router = express.Router();

router.use(require('./users'));
router.use(require('./authen'));

router.get('/', function(req, res, next){
    res.send('HOME PAGE');
});

module.exports = router;
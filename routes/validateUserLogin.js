var express = require('express');
var router = express.Router();

/* POST home page. */
router.post('/', function (req, res, next) {
    // console.log(req.body)
    var responseObj = {};
    if (req.body.accoutId == 'ayush' && req.body.passward == '1234') {
        responseObj.msg = 'valid'
    } else {
        responseObj.msg = 'inValid'
    }

    res.send(JSON.stringify(responseObj))
});

module.exports = router;
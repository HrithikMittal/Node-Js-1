var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    res.json({
        test: "Auth is success"
    });
});

module.exports = router;
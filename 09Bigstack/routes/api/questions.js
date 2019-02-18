var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    res.json({
        test: 'Question is added'
    });
});

module.exports = router;
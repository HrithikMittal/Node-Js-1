var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    res.json({
        test: 'Profile is Awesome'
    });
});

module.exports = router;
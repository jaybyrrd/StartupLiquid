var express = require('express');
var router = express.Router();
var addUser = require('../requests/addUser.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/', function(req, res) {
    app.post('/adduser', function(req, res) {
        var email = req.body['email'];
        addUser.addUser(facebookId, function(value, found, token) {
            res.status(value);
            res.json(found);
        });
    });
});

module.exports = router;

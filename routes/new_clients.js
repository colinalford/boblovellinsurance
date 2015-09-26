var express = require('express');
var router = express.Router();
var NewClients = require('../models/new_clients');

router.get('/', function(req, res) {
    NewClients.find({}, function(err, data) {
        if (err) {
            res.send('Error', err);
        } else {
            res.json(data);
        }
    });
});

router.post('/', function(req, res) {
    var newclient = new NewClients();
    newclient.firstName = req.body.firstName;
    newclient.lastName = req.body.lastName;
    newclient.email = req.body.email;
    newclient.phoneNumber = req.body.phoneNumber;
    newclient.city = req.body.city  ;
    newclient.state = req.body.state;

    newclient.save(function(err) {
        if (err) {
            res.send('Error', err);
        } else {
            res.send('Successfully submitted information. We will contact you shortly!');
        }
    })
});

router.put('/', function(req, res) {

});

router.delete('/', function(req, res) {

});

module.exports = router;

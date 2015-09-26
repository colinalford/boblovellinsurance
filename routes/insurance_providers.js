var express = require('express');
var router = express.Router();
var InsuranceProviders = require('../models/insurance_providers');

router.get('/', function(req, res) {
    InsuranceProviders.find(function(err, data) {
        if (err) {
            res.send(err);
        } else {
            res.json(data);
        }
    });
});

router.post('/', function(req, res) {
    var newProvider = new InsuranceProviders();
    newProvider.companyName = req.body.companyName;
    newProvider.logoUrl = req.body.logoUrl;

    newProvider.save(function(err) {
        if (err) {
            res.send(err);
        } else {
            res.json('Successfully added provider');
        }
    });
});

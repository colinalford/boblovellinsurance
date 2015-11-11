var express = require('express');
var router = express.Router();

/* GET home page. */

// Delete insurance companies when database route added
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Bob Lovell Insurance', insurance_companies: [{company_name:'cigna', img:'images/CIGNA-logo-vector.png'}, {company_name: 'transamerica', img: 'images/Transamerica_Corporation.png'}, {company_name: 'genworth', img: 'images/Genworth_Financial_logo.png'}, {company_name: 'mutual of omaha', img:'images/mutual_of_omaha_logo.png'}, {company_name: 'protective life', img:'images/Protective_Life_Logo.png'}, {company_name: 'humana', img: 'images/Humana_logo.png'}, {company_name: 'BlueCrossBlueShield', img: 'images/logo-bcbs-left.png'}, {company_name: 'silverscript', img: 'images/SilverScript-medicare-Part-D-logo.gif'}, {company_name: 'americo', img: 'images/americo_logo.png'}] });
});

router.get('/dashboard', function(req, res) {
  res.render('dashboard', {title: 'Dashboard'});
});

module.exports = router;

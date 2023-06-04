var express = require('express');


var router = express.Router();


const { processDonation } = require('../controllers/stripeController');


router.route('/stripe-donate').post(processDonation)

module.exports = router;
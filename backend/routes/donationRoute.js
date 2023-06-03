var express = require('express');
const { createDonation } = require('../controllers/donationController');


var router = express.Router();

router.route('/create-donation').post(createDonation)

module.exports = router;
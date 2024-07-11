const express = require('express');
const router = express.Router();
const homecontroller = require('../controllers/HomeController')

// Home Routes
router.get('/', homecontroller.homepage);

module.exports = router;
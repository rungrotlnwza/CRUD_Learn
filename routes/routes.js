const express = require('express');
const router = express.Router();

router.use('/api', require('./api/api.routes'));

module.exports = router;
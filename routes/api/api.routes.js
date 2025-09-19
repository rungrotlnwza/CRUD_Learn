const express = require('express');
const router = express.Router();

router.get('/example', (req, res) => {
    res.status(200).json({ message: "hrllo" })
});

module.exports = router;
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Getting books ...');
});

module.exports = router;
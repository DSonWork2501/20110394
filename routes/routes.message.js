const express = require('express');
const { messageRequest, messageidRequest } = require('../controllers/controller.mygroup');

const router = express.Router();

router.use((req, res, next) => {
    console.log("Routes My Message");
    if (req.method === "POST") {
        res.status(400).json({ error: 'Post is not allowing' });
    }
    next()
})

router.get('/', messageRequest);

router.get('/:messageID', messageidRequest);


module.exports = router
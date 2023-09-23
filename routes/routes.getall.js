const express = require('express');
const { allmemberRequest } = require('../controllers/controller.mygroup');

const router = express.Router();

router.use((req, res, next) => {
    console.log("Routes Get All");
    next()
})
router.get('/', allmemberRequest);

module.exports = router
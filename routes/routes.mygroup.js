const express = require('express');
const { memberRequest, memberPost } = require('../controllers/controller.mygroup');

const router = express.Router();

router.use((req, res, next) => {
    console.log("Routes My Group");
    // if (req.method === "POST") {
    //     req.on('data', (data) => {
    //         const newfriend = data.toString();
    //         console.log("hello")
    //         mygroup.push(JSON.parse(newfriend));
    //     });
    //     req.pipe(res);
    // }
    next()
})

router.post('/', memberPost);

router.get('/:memberID', memberRequest);

module.exports = router
const express = require('express');
const router = express.Router();
const { MainPageRequest, SingleBlogPageRequest, SearchBlogRequest, ManagePageRequest, AddBlogRequest } = require('../controllers/controllers.main');


router.get('/add-post', AddBlogRequest);

module.exports = router
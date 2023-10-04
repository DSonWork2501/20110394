const express = require('express');
const router = express.Router();
const { MainPageRequest, SingleBlogPageRequest, SearchBlogRequest, ManagePageRequest, AddBlogRequest } = require('../controllers/controllers.main');

router.get('/', MainPageRequest);
router.get('/post/:id', SingleBlogPageRequest);
router.get('/manage', ManagePageRequest);
router.get('/add-post', AddBlogRequest);
router.post('/search', SearchBlogRequest);

module.exports = router
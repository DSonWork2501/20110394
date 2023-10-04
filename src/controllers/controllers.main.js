const { blogdata } = require('../models/myblog');

function MainPageRequest(req, res) {
    res.render('home', {
        title: "Home Page",
        blogdata,
    });
}

function ManagePageRequest(req, res) {
    res.render('manage', {
        title: "Manage Page",
        blogdata
    });
}
// Manage Post
function AddBlogRequest(req, res) {
    res.render('/add-post', {
        title: 'Add Post',
    });
}

function SingleBlogPageRequest(req, res) {
    let slug = Number(req.params.id);
    let blog = blogdata[slug];
    res.render('post', {
        title: blog.title,
        blog,
    });
}

function SearchBlogRequest(req, res) {
    let searchTerm = req.body.searchTerm;
    let para = [];
    const searchNoSpecialCharacter = searchTerm.replace(/[^a-zA-Z0-9 ]/g, "")
    blogdata.map((item, index) => {
        if (item.title.startsWith(searchNoSpecialCharacter)) {
            para.push(item);
        }
    })
    res.render("searchpage", {
        para
    });
}


module.exports = {
    MainPageRequest,
    ManagePageRequest,
    SingleBlogPageRequest,
    SearchBlogRequest,
    AddBlogRequest
}
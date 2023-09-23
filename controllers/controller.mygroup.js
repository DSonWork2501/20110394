const { members } = require('../models/mygroup');

// Member Function
function memberRequest(req, res) {

    const ID = Number(req.params.memberID);
    const member = members[ID];
    if (member) {
        res.status(200).json(member);
    }
    else {
        res.status(400).json({ error: 'Not valid' });
    }
}

function allmemberRequest(req, res) {
    res.status(200).json(members);
}

// Message Function
function messageRequest(req, res) {
    if (req.method == "POST") {
        res.status(400).json({ error: 'Not valid' });
    }
    // In ra toàn bộ member dưới dạng html ở endpoint message
    members.map((item, index) => {
        res.status(200).write(`<html><body><ul><li>${item.name}</li></ul></body></html>`);
    })
    res.end();
}

function memberPost(req, res) {
    console.log(req.body);

    if (req.body.name === 'Dang Phuoc Truong Tai' || req.body.name === 'Danh Truong Son' || req.body.name === 'Dang Thanh Tuyen') {
        members.push({ id: Number(req.body.id), name: `${req.body.name}` });
        console.log(members)
    }
    else {
        console.log("Not Valid Name")
    }
}

function messageidRequest(req, res) {
    // Check id truyền vào với endpoint message
    const ID = Number(req.params.messageID);
    const member = members[ID];
    if (member) {
        res.status(200).write(`<html><body><ul><li>${member.name}</li></ul></body></html>`);
    }
    else {
        res.status(400).write('<html><body><ul><li>Not Valid</li></ul></body></html>');
    }
    res.end();
}

module.exports = {
    allmemberRequest,
    memberRequest,
    messageRequest,
    messageidRequest,
    memberPost,
}
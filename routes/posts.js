const express = require('express');
const router = express.Router();

let posts = [];

// 게시글 목록 가져오기
router.get('/', (req, res) => {
    res.json(posts);
});

// 새로운 게시글 작성
router.post('/', (req, res) => {
    const newPost = {
        id: posts.length + 1,
        title: req.body.title,
        content: req.body.content,
        anonymous: req.body.anonymous
    };
    posts.push(newPost);
    res.status(201).json(newPost);
});

module.exports = router;

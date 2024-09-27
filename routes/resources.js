const express = require('express');
const router = express.Router();

let resources = [];

// 자료 목록 가져오기
router.get('/', (req, res) => {
    res.json(resources);
});

// 새로운 자료 업로드
router.post('/', (req, res) => {
    const newResource = {
        id: resources.length + 1,
        description: req.body.description,
        category: req.body.category,
        url: `/uploads/${req.body.fileName}`
    };
    resources.push(newResource);
    res.status(201).json(newResource);
});

module.exports = router;

const express = require('express');
const router = express.Router();

let projects = [];

// 프로젝트 목록 가져오기
router.get('/', (req, res) => {
    res.json(projects);
});

// 새로운 프로젝트 등록
router.post('/', (req, res) => {
    const newProject = {
        id: projects.length + 1,
        title: req.body.title,
        description: req.body.description
    };
    projects.push(newProject);
    res.status(201).json(newProject);
});

module.exports = router;

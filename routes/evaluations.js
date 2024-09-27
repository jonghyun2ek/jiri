const express = require('express');
const router = express.Router();

let evaluations = [];

// 강의 평가 목록 가져오기
router.get('/', (req, res) => {
    res.json(evaluations);
});

// 새로운 강의 평가 작성
router.post('/', (req, res) => {
    const newEvaluation = {
        id: evaluations.length + 1,
        lectureName: req.body.lectureName,
        rating: req.body.rating,
        review: req.body.review
    };
    evaluations.push(newEvaluation);
    res.status(201).json(newEvaluation);
});

module.exports = router;

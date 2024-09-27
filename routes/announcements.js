const express = require('express');
const router = express.Router();

let announcements = [
    { id: 1, title: '공지사항 1', content: '첫 번째 공지사항입니다.' },
    { id: 2, title: '공지사항 2', content: '두 번째 공지사항입니다.' }
];

// 공지사항 목록 가져오기
router.get('/', (req, res) => {
    res.json(announcements);
});

// 새로운 공지사항 작성
router.post('/', (req, res) => {
    const newAnnouncement = {
        id: announcements.length + 1,
        title: req.body.title,
        content: req.body.content
    };
    announcements.push(newAnnouncement);
    res.status(201).json(newAnnouncement);
});

module.exports = router;

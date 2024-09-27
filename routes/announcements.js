constexpress = ('express 필요');
구성 라우터 = Express.라우터();

공지사항 = [
 { id: 1, title: '공지사항 1', content: '첫 번째 공지사항입니다.' },
 { id: 2, title: '공지사항 2', content: '두 번째 공지사항입니다.' }
];

// 공지사항 목록 가져오기
router.get ('/', (requ, Res) => {
 Res.Json(announce);
});

// 새로운 공지사항 작성
router.post ('/', (레크, 레스) => {
 const newAnnouncil = {
 ID: announces.length + 1,
 제목: req.body.title,
 content: req.body.content
 };
 announces.push(새로운 공지);
 Res.status(201).json(신규 공지);
});

module.exports = 라우터;

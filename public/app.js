document.addEventListener('DOMContentLoaded', () => {
    // 공지사항 목록 불러오기
    가지고 오다('/api/announce')
 .그런 다음(응답 => 응답.json ())
 .그러면 (데이터 => {
 건설 공고 목록 = document.getElementById('공지 목록');
 data.각자(발표 => {
 constlistItem = document.createElement('li');
 listItem.텍스트 내용 = '${announcent.title': ${announcent.content};
 공지사항List.appendChild(listItem);
 });
        })
 .catch(오류 => 콘솔.error('공지를 가져오는 동안 오류가 발생했습니다:', 오류);

    // 공지사항 작성 처리
 건설 공고 양식 = document.getElementById('새로운 공고 양식');
 announcementForm.addEventListener('제출', 함수(이벤트) {
 event.preventDefault();
 const title = document.getElementById('공지-제목').가치;
 contents = document.getElementById('공지-콘텐츠').가치;

 ('/API/announcements', {를 가져옵니다.
 방법: 'POST',
 헤더: { '콘텐츠 유형': '애플리케이션/json'},
 본문: JSON.stringify({ 제목: 제목, 내용: 내용 })
        })
 .그런 다음(응답 => 응답.json ())
 .then(새로운 공지 => {
 건설 공고 목록 = document.getElementById('공지 목록');
 constlistItem = document.createElement('li');
 listItem.텍스트 내용 = '${newAnnouncil.title': ${newAnnouncil.content};
 공지사항List.appendChild(listItem);
        })
 .catch(오류 => 콘솔.error('게시 공지 오류:', 오류);
 });
});

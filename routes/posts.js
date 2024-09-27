document.addEventListener('DOMContentLoaded', () => {
    // 게시글 작성 처리
 const postForm = document.getElementById('새로운 포스트폼');
 postForm.addEventListener('제출', 함수(이벤트) {
 event.preventDefault();
 const title = document.getElementById('포스트 타이틀').가치;
 contents = document.getElementById('후 콘텐츠').가치;
 const annonymous = document.getElementById('익명').확인;

 ('/api/posts', {를 가져옵니다.
 방법: 'POST',
 헤더: { '콘텐츠 유형': '애플리케이션/json'},
 본문: JSON.stringify({ 제목: 제목, 내용: 내용, 익명: 익명 })
        })
 .그런 다음(응답 => 응답.json ())
 .then(새 게시물 => {
 const postList = document.getElementById('포스트리스트');
 constlistItem = document.createElement('li');
 listItem.텍스트 내용 = '${newPost.title}(${newPost.익명 ? '익명' : '작성자'});
 postList.appendChild(listItem);
        })
 .catch(오류 => 콘솔.error('오류 게시:', 오류);
 });

    // 게시글 목록 불러오기
 가지고 오다('/API/posts')
 .그런 다음(응답 => 응답.json ())
 .그러면 (posts => {
 const postList = document.getElementById('포스트리스트');
 게시물.각각(게시물 => {
 constlistItem = document.createElement('li');
 listItem.textContent = '${post.title}(${post.익명? '익명' : '작성자'});;
 postList.appendChild(listItem);
 });
        })
 .catch(오류 => 콘솔.error('게시물 가져오는 중 오류 발생:', 오류);
});

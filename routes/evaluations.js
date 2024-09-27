document.addEventListener('DOMContentLoaded', () => {
    // 강의 평가 작성 처리
 구성 평가 양식 = document.getElementById('새로운 평가 양식');
 evaluationForm.addEventListener('제출', 함수(이벤트) {
 event.preventDefault();
 constructName = document.getElementById('강의 이름').가치;
 constiting = document.getElementById('등급').가치;
 const review = document.getElementById('review').value;

 ('/api/evalu', {를 가져옵니다.
 방법: 'POST',
 헤더: { '콘텐츠 유형': '애플리케이션/json'},
 본문: JSON.stringify({ 강의명: 강의명, 평점: 평점: 리뷰: })
        })
 .그런 다음(응답 => 응답.json ())
 .then(새로운 평가 => {
 구성 평가 목록 = document.getElementById('평가 목록');
 constlistItem = document.createElement('li');
 listItem.텍스트 내용 = '${newEvaluation.lelectureName} - 별점: ${newEvaluation.rating}, 리뷰: ${newEvaluation.review};
 evaluationList.appendChild(listItem);
        })
 .catch(오류 => 콘솔.error('오류 게시 평가:', 오류));
 });

    // 강의 평가 목록 불러오기
 가지고 오다('/API/evalu')
 .그런 다음(응답 => 응답.json ())
 .then(evalu => {
 구성 평가 목록 = document.getElementById('평가 목록');
 평가.각자(평가 => {
 constlistItem = document.createElement('li');
 listItem.텍스트 내용 = '${evaluation.lelectureName} - 별점: ${evaluation.rating}, 리뷰: ${evaluation.review};
 evaluationList.appendChild(listItem);
 });
        })
 .catch(오류 => 콘솔.error('평가를 가져오는 동안 오류가 발생했습니다:', 오류);
});

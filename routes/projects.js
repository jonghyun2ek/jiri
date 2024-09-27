document.addEventListener('DOMContentLoaded', () => {
     // 프로젝트 등록 처리
 projectForm = document.getElementById('새로운 프로젝트 양식')를 구성합니다;
 projectForm.addEventListener('제출', 함수(이벤트) {
 event.preventDefault();
 const title = document.getElementById('프로젝트 제목').가치;
 구성 설명 = document.getElementById('프로젝트 설명').가치;

 ('/api/projects', {를 가져옵니다.
 방법: 'POST',
 헤더: { '콘텐츠 유형': '애플리케이션/json'},
 본문: JSON.stringify({ 제목: 제목, 설명: 설명 })
        })
 .그런 다음(응답 => 응답.json ())
 .then(새 프로젝트 => {
 projectList = document.getElementById('project-list')를 구성합니다.
 constlistItem = document.createElement('li');
 listItem.텍스트 내용 = '${newProject.title': ${newProject.description};
 projectList.appendChild(listItem);
        })
 .catch(오류 => 콘솔.error('오류 게시 프로젝트:', 오류));
 });

    // 프로젝트 목록 불러오기
 가지고 오다('/API/projects')
 .그런 다음(응답 => 응답.json ())
 .그러면 (projects => {
 projectList = document.getElementById('project-list')를 구성합니다.
 프로젝트.각자(프로젝트 => {
 constlistItem = document.createElement('li');
 listItem.텍스트 내용 = '${project.title': ${project.desc};
 projectList.부록 차일드(listItem);
 });
        })
 .catch(오류 => 콘솔.error('프로젝트 가져오기 오류:', 오류));
});

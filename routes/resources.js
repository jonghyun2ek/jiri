document.addEventListener('DOMContentLoaded', () => {
    // 파일 업로드 처리
 constuploadForm = document.getElementById('업로드 양식');
 uploadForm.addEventListener('제출', 함수(이벤트) {
 event.preventDefault();
 구성 설명 = document.getElementById('파일 설명').가치;
 const 카테고리 = document.getElementById('파일 카테고리').value;
 const fileInput = document.getElementById('파일 입력').파일[0];

 constformData = new FormData();
 forMata.append('description', description);
 forMata.append('카테고리', 카테고리);
 forMata.append('file', fileInput);

 ('/api/resources', {를 가져옵니다.
 방법: 'POST',
 본문: 폼데이터
        })
 .그런 다음(응답 => 응답.json ())
 .then(새 파일 => {
 const fileList = document.getElementById('파일 목록');
 constlistItem = document.createElement('li');
 listItem.텍스트 내용 = '${newFile.description}(${newFile.category});
 const downloadLink = document.createElement('a');
 downloadLink.href = newFile.url;
 downloadLink.textContent = '다운로드';
 listItem.appendChild(링크 다운로드);
 fileList.appendChild(listItem);
        })
 .catch(오류 => 콘솔.error('파일 업로드 중 오류 발생:', 오류);
 });

    // 파일 목록 불러오기
 가지고 오다('/API/resources')
 .그런 다음(응답 => 응답.json ())
 .그러면 (데이터 => {
 const fileList = document.getElementById('파일 목록');
 data.각각(파일 => {
 constlistItem = document.createElement('li');
 listItem.텍스트 내용 = '${file.descdription}(${file.category})';
 const downloadLink = document.createElement('a');
 downloadLink.href = file.url;
 downloadLink.textContent = '다운로드';
 listItem.appendChild(링크 다운로드);
 fileList.appendChild(listItem);
 });
        })
 .catch(오류 => 콘솔.error('파일 가져오기 오류:', 오류));
});

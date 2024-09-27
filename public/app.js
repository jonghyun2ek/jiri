document.addEventListener('DOMContentLoaded', () => {
    // 공지사항 목록 불러오기
    fetch('/api/announcements')
        .then(response => response.json())
        .then(data => {
            const announcementList = document.getElementById('announcement-list');
            data.forEach(announcement => {
                const listItem = document.createElement('li');
                listItem.textContent = `${announcement.title}: ${announcement.content}`;
                announcementList.appendChild(listItem);
            });
        })
        .catch(error => console.error('Error fetching announcements:', error));

    // 공지사항 작성 처리
    const announcementForm = document.getElementById('new-announcement-form');
    announcementForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const title = document.getElementById('announcement-title').value;
        const content = document.getElementById('announcement-content').value;

        fetch('/api/announcements', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: title, content: content })
        })
        .then(response => response.json())
        .then(newAnnouncement => {
            const announcementList = document.getElementById('announcement-list');
            const listItem = document.createElement('li');
            listItem.textContent = `${newAnnouncement.title}: ${newAnnouncement.content}`;
            announcementList.appendChild(listItem);
        })
        .catch(error => console.error('Error posting announcement:', error));
    });

    // 파일 업로드 처리 (자료실)
    const uploadForm = document.getElementById('upload-form');
    uploadForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const description = document.getElementById('file-description').value;
        const category = document.getElementById('file-category').value;
        const fileInput = document.getElementById('file-input').files[0];

        const formData = new FormData();
        formData.append('description', description);
        formData.append('category', category);
        formData.append('file', fileInput);

        fetch('/api/resources', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(newFile => {
            const fileList = document.getElementById('file-list');
            const listItem = document.createElement('li');
            listItem.textContent = `${newFile.description} (${newFile.category})`;
            const downloadLink = document.createElement('a');
            downloadLink.href = newFile.url;
            downloadLink.textContent = ' 다운로드';
            listItem.appendChild(downloadLink);
            fileList.appendChild(listItem);
        })
        .catch(error => console.error('Error uploading file:', error));
    });

    // 게시글 작성 처리 (게시판)
    const postForm = document.getElementById('new-post-form');
    postForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const title = document.getElementById('post-title').value;
        const content = document.getElementById('post-content').value;
        const anonymous = document.getElementById('anonymous').checked;

        fetch('/api/posts', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: title, content: content, anonymous: anonymous })
        })
        .then(response => response.json())
        .then(newPost => {
            const postList = document.getElementById('post-list');
            const listItem = document.createElement('li');
            listItem.textContent = `${newPost.title} (${newPost.anonymous ? '익명' : '작성자'})`;
            postList.appendChild(listItem);
        })
        .catch(error => console.error('Error posting post:', error));
    });

    // 프로젝트 등록 처리
    const projectForm = document.getElementById('new-project-form');
    projectForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const title = document.getElementById('project-title').value;
        const description = document.getElementById('project-description').value;

        fetch('/api/projects', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: title, description: description })
        })
        .then(response => response.json())
        .then(newProject => {
            const projectList = document.getElementById('project-list');
            const listItem = document.createElement('li');
            listItem.textContent = `${newProject.title}: ${newProject.description}`;
            projectList.appendChild(listItem);
        })
        .catch(error => console.error('Error posting project:', error));
    });

    // 강의 평가 작성 처리
    const evaluationForm = document.getElementById('new-evaluation-form');
    evaluationForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const lectureName = document.getElementById('lecture-name').value;
        const rating = document.getElementById('rating').value;
        const review = document.getElementById('review').value;

        fetch('/api/evaluations', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ lectureName: lectureName, rating: rating, review: review })
        })
        .then(response => response.json())
        .then(newEvaluation => {
            const evaluationList = document.getElementById('evaluation-list');
            const listItem = document.createElement('li');
            listItem.textContent = `${newEvaluation.lectureName} - 별점: ${newEvaluation.rating}, 리뷰: ${newEvaluation.review}`;
            evaluationList.appendChild(listItem);
        })
        .catch(error => console.error('Error posting evaluation:', error));
    });

    // 강의 평가 목록 불러오기
    fetch('/api/evaluations')
        .then(response => response.json())
        .then(evaluations => {
            const evaluationList = document.getElementById('evaluation-list');
            evaluations.forEach(evaluation => {
                const listItem = document.createElement('li');
                listItem.textContent = `${evaluation.lectureName} - 별점: ${evaluation.rating}, 리뷰: ${evaluation.review}`;
                evaluationList.appendChild(listItem);
            });
        })
        .catch(error => console.error('Error fetching evaluations:', error));
});
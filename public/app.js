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
});

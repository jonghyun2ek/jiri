document.addEventListener('DOMContentLoaded', () => {
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
});
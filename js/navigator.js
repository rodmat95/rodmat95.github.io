function changeContent(contentId) {
    const contentContainers = document.querySelectorAll('.content');
    contentContainers.forEach(content => {
        content.style.display = 'none';
    });
    const selectedContent = document.getElementById(contentId);
    selectedContent.style.display = 'block';
}
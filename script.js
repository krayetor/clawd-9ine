document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');

    // Dynamic Scroll Progress Initialization
    const progContainer = document.createElement('div');
    progContainer.className = 'scroll-progress-container';
    const progBar = document.createElement('div');
    progBar.className = 'scroll-progress-bar';
    progContainer.appendChild(progBar);
    document.body.prepend(progContainer);

    window.addEventListener('scroll', () => {
        const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
        progBar.style.width = `${scrolled}%`;
    });

    if (!themeToggle) return;

    // 1. Sync button icon with the root HTML element class
    if (document.documentElement.classList.contains('light-mode')) {
        themeToggle.textContent = '☀️';
    } else {
        themeToggle.textContent = '🌙';
    }

    // 2. Toggle root element class and save to storage on click
    themeToggle.addEventListener('click', () => {
        document.documentElement.classList.toggle('light-mode');
        
        if (document.documentElement.classList.contains('light-mode')) {
            themeToggle.textContent = '☀️';
            localStorage.setItem('project-theme', 'light');
        } else {
            themeToggle.textContent = '🌙';
            localStorage.setItem('project-theme', 'dark');
        }
    });
});
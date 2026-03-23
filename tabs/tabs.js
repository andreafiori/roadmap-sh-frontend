document.addEventListener('DOMContentLoaded', () => {
    const tabContainer = document.querySelector('.tabs'); // parent wrapper
    const contents = document.querySelectorAll('.tab-content');

    if (!tabContainer) return;

    tabContainer.addEventListener('click', (e) => {
        const button = e.target.closest('.tab');
        if (!button) return;

        const tabButtons = tabContainer.querySelectorAll('.tab');

        // Remove active from all tabs
        tabButtons.forEach(tab => tab.classList.remove('active'));
        button.classList.add('active');

        // Hide all content
        contents.forEach(content => content.classList.remove('active'));

        // Show selected content
        const selectedTab = button.dataset.tab;
        const target = document.getElementById(`content-${selectedTab}`);

        if (target) {
            target.classList.add('active');
        }
    });
});
const acc = document.getElementsByClassName('accordion');
let i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener('click', function() {
        // Close all panels
        const allPanels = document.getElementsByClassName('panel');
        for (let j = 0; j < allPanels.length; j++) {
            allPanels[j].style.display = 'none';
        }

        // Remove 'active' class from all buttons
        for (let k = 0; k < acc.length; k++) {
            acc[k].classList.remove('active');
        }

        // Toggle current button and panel
        this.classList.toggle('active');

        const panel = this.nextElementSibling;
        panel.style.display = (panel.style.display === 'block') ? 'none' : 'block';
    });
}
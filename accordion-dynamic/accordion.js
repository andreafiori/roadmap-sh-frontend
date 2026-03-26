// Fetch the JSON file
fetch('faq.json')
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById('faq-container');

        // Loop through each FAQ item and create accordion elements
        data.forEach(item => {
            const accordion = document.createElement('div');
            accordion.className = 'accordion';
            accordion.innerHTML = `${item.question} <span>&or;</span>`;

            const panel = document.createElement('div');
            panel.className = 'panel';
            panel.innerHTML = `<p>${item.answer}</p>`;

            container.appendChild(accordion);
            container.appendChild(panel);
        });

        // Add event listeners to all accordion elements
        const acc = document.getElementsByClassName('accordion');
        for (let i = 0; i < acc.length; i++) {
            acc[i].addEventListener('click', function() {
                const allPanels = document.getElementsByClassName('panel');
                for (let j = 0; j < allPanels.length; j++) {
                    allPanels[j].style.display = 'none';
                }

                for (let k = 0; k < acc.length; k++) {
                    acc[k].classList.remove('active');
                }

                this.classList.toggle('active');
                const panel = this.nextElementSibling;
                panel.style.display = (panel.style.display === 'block') ? 'none' : 'block';
            });
        }
    })
    .catch(error => console.error('Error loading FAQ data:', error));
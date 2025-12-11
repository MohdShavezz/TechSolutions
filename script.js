
        const menuToggle = document.getElementById('menuToggle');
        const navMenu = document.getElementById('navMenu');
        
        menuToggle.addEventListener('click', function() {
            if (navMenu.classList.contains('active')) {
                navMenu.style.display = 'none';
                navMenu.classList.remove('active');
            } else {
                navMenu.style.display = 'flex';
                navMenu.classList.add('active');
            }
        });
        
        const navLinks = document.querySelectorAll('nav ul li a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
            });
        });        
        
        const contactForm = document.getElementById('contactForm');        
        contactForm.addEventListener('submit', function(e) {
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });
        
        // Dark mode toggle
        const themeToggle = document.getElementById('themeToggle');
        
        themeToggle.addEventListener('click', function() {
            document.body.classList.toggle('dark-mode');
            
            if (document.body.classList.contains('dark-mode')) {
                themeToggle.textContent = 'Light Mode';
            } else {
                themeToggle.textContent = 'Dark Mode';
            }
        });
        
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });
        
        const currentYear = new Date().getFullYear();
        const copyrightElement = document.querySelector('.copyright p');

        if (copyrightElement) {
            const currentText = copyrightElement.textContent;
            const updatedText = currentText.replace('2023', currentYear.toString());
            copyrightElement.innerHTML = updatedText;
        }
    
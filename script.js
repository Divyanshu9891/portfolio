document.addEventListener('DOMContentLoaded', function() {

    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');
    const navLinksItems = document.querySelectorAll('.nav-links li');
    
    burger.addEventListener('click', () => {
       
        navLinks.classList.toggle('active');
        
        
        navLinksItems.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
        
        
        burger.classList.toggle('toggle');
    });
    
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
            
         
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                burger.classList.remove('toggle');
                navLinksItems.forEach(link => {
                    link.style.animation = '';
                });
            }
        });
    });
    
    
    const downloadCvBtn = document.getElementById('download-cv');
    downloadCvBtn.addEventListener('click', function(e) {
        e.preventDefault();
       
        alert('Downloading CV...');
        
    });
    
   
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Message sent! Thank you for reaching out.');
            this.reset();
        });
    }
    
    
    const sr = ScrollReveal({
        origin: 'top',
        distance: '30px',
        duration: 1000,
        reset: true
    });
    
    sr.reveal('.hero-content, .hero-image', { delay: 200 });
    sr.reveal('.about-text, .about-image', { delay: 200, origin: 'left' });
    sr.reveal('.skill-category', { delay: 200, interval: 200 });
    sr.reveal('.timeline-item', { delay: 200, interval: 200 });
    sr.reveal('.contact-info, .contact-form', { delay: 200, origin: 'bottom' });
});


const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= (sectionTop - 300)) {
            current = section.getAttribute('id');
        }
    });
    
    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href') === `#${current}`) {
            item.classList.add('active');
        }
    });
});
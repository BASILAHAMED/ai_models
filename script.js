// script.js

// Add event listener to navigation bar links
const navbarLinks = document.querySelectorAll('.navbar a');

navbarLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = e.target.href.split('#')[1];
        const sectionId = target.replace(/-/g, '_');
        const section = document.getElementById(sectionId);
        section.scrollIntoView({ behavior: 'smooth' });
    });
});

// Add event listener to contact form
const contactForm = document.querySelector('form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = contactForm.name.value;
    const email = contactForm.email.value;
    const message = contactForm.message.value;

    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);

    // Clear form fields
    contactForm.reset();
});

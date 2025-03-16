// Yazi animasyonu
// new TypeIt("#title", {
//     strings: "Find Your Way.",
//     speed: 100,
//     waitUntilVisible: true,
// }).go();


//--------------------------------------------------------------
// Menu icon


const menuIcon = document.getElementById('menu-icon');
const navUl = document.querySelector('nav ul');
const initialTop = 40;

menuIcon.addEventListener('click', () => {
    
    const isMenuActive = navUl.classList.toggle('active');
    menuIcon.classList.toggle('active');

    if (isMenuActive) {
        
        window.addEventListener('scroll', scrollHandler);
    } else {
        
        window.removeEventListener('scroll', scrollHandler);
        resetMenuIconPosition();
    }
});

function scrollHandler() {
    const scrollPosition = window.scrollY;
    const newTop = initialTop + scrollPosition;

    menuIcon.style.top = newTop + 'px';
}

function resetMenuIconPosition() {
    
    menuIcon.style.top = initialTop + 'px';
}




//--------------------------------------------------------------


const links = document.querySelectorAll('a[href^="#"]');


links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});






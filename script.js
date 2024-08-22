document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.fade-in');

    function fadeInElements(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }

    const sectionObserver = new IntersectionObserver(fadeInElements, {
        root: null,
        threshold: 0.2 // Adjust as needed; controls when the animation starts
    });

    sections.forEach(section => {
        sectionObserver.observe(section);
    });
});



// Get the current year
const currentYear = new Date().getFullYear();

// Find the element with the id "current-year" and set its text content to the current year
document.getElementById('current-year').textContent = currentYear;


document.addEventListener("DOMContentLoaded", function() {
    var navbarToggler = document.getElementById('navbar-toggler');
    var navbarNav = document.getElementById('navbar-nav');

    navbarToggler.addEventListener('click', function() {
        navbarNav.classList.toggle('active');
    });

    // Close the menu when clicking outside of it
    document.addEventListener('click', function(event) {
        var isClickInside = navbarNav.contains(event.target) || navbarToggler.contains(event.target);
        if (!isClickInside) {
            navbarNav.classList.remove('active');
        }
    });
});



const wave = document.querySelector('.wave path');

let wavePoints = 5; // Adjust the number of wave points for complexity
let waveAmplitude = 50; // Adjust the wave height

function animateWave() {
    let path = `M0,160`;

    for (let i = 0; i < wavePoints; i++) {
        let x = (i + 1) * (1440 / wavePoints);
        let y = Math.sin((Date.now() / 1000) + (i * Math.PI / 2)) * waveAmplitude + 160;
        path += `L${x},${y}`;
    }

    path += `L1440,320L0,320Z`;
    wave.setAttribute('d', path);

    requestAnimationFrame(animateWave);
}

animateWave();
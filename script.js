document.addEventListener("DOMContentLoaded", () => {
    // Dark Mode Functionality
    const toggleButton = document.getElementById('dark-mode-toggle');
    const toggleIcon = document.getElementById('toggle-icon');

    if (localStorage.getItem('dark-mode') === 'enabled') {
        document.body.classList.add('dark-mode');
        toggleIcon.src = 'images/moon.jpg'; 
    }

    toggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode'); 

        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('dark-mode', 'enabled');
            toggleIcon.src = 'images/moon.jpg';
        } else {
            localStorage.removeItem('dark-mode');
            toggleIcon.src = 'images/sun.jpg';
        }
    });

    // Skills Scroll Functionality 
    const skillsScroll = document.querySelector('.skills-scroll');
    const scrollAmount = 120; 

    function cloneImages() {
        const items = Array.from(skillsScroll.children);
        const cloneItems = items.map(item => item.cloneNode(true)); 
        cloneItems.forEach(item => skillsScroll.appendChild(item)); 
    }

    cloneImages();

    function continuousScroll() {
        
        skillsScroll.scrollBy({ left: scrollAmount, behavior: 'smooth' });

        if (skillsScroll.scrollLeft + skillsScroll.offsetWidth >= skillsScroll.scrollWidth) {
            setTimeout(() => {
                skillsScroll.scrollLeft = 0;
            }, 500); 
        }
    }

    setInterval(continuousScroll, 30);

    // Grades Scroll Functionality
    const gradesScroll = document.querySelector('.grades-scroll');
    
    function continuousGradesScroll() {
        gradesScroll.scrollBy({ left: scrollAmount, behavior: 'smooth' });

        if (gradesScroll.scrollLeft + gradesScroll.offsetWidth >= gradesScroll.scrollWidth) {
            setTimeout(() => {
                gradesScroll.scrollLeft = 0;
            }, 500); 
        }
    }

    setInterval(continuousGradesScroll, 30); 

    // Typing Effect Functionality
    const textElement = document.getElementById('typing-text');
    const textArray = [
        "Aspiring computer science professional.",
        "Eager to apply technical skills.",
        "Contributing to innovative solutions."
    ];
    const typingSpeed = 100; 
    const erasingSpeed = 50;
    const delayBetweenTexts = 2000;

    let textIndex = 0; 
    let charIndex = 0; 

    function type() {
        if (charIndex < textArray[textIndex].length) {
            textElement.textContent += textArray[textIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, typingSpeed);
        } else {
            setTimeout(erase, delayBetweenTexts);
        }
    }

    function erase() {
        if (charIndex > 0) {
            textElement.textContent = textArray[textIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, erasingSpeed);
        } else {
            textIndex = (textIndex + 1) % textArray.length;
            setTimeout(type, typingSpeed);
        }
    }

    type();
});

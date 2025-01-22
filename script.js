document.addEventListener("DOMContentLoaded", () => {
    // Dark Mode Functionality
    const toggleButton = document.getElementById('dark-mode-toggle');
    const toggleIcon = document.getElementById('toggle-icon');
    const skillsScroll = document.querySelector('.skills-scroll');

    if (localStorage.getItem('dark-mode') === 'enabled') {
        document.body.classList.add('dark-mode');
        toggleIcon.src = 'images/dark_mode_toggle/moon.jpg'; 
        skillsScroll.style.backgroundColor = 'white';
    }

    toggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode'); 

        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('dark-mode', 'enabled');
            toggleIcon.src = 'images/dark_mode_toggle/moon.jpg';
            skillsScroll.style.backgroundColor = 'white';
        } else {
            localStorage.removeItem('dark-mode');
            toggleIcon.src = 'images/dark_mode_toggle/sun.jpg';
            skillsScroll.style.backgroundColor = '';
        }
    });


    // Skills Scroll Functionality
    const skillsSpeed = 2;

    function cloneSkills() {
        const items = Array.from(skillsScroll.children);
        const cloneItems = items.map(item => item.cloneNode(true));
        cloneItems.forEach(item => skillsScroll.appendChild(item));
    }

    cloneSkills();

    let skillsScrollPosition = 0;

    function scrollSkills() {
        skillsScrollPosition += skillsSpeed;
        if (skillsScrollPosition >= skillsScroll.scrollWidth / 2) {
            skillsScrollPosition = 0;
        }
        skillsScroll.scrollLeft = skillsScrollPosition;
    }

    setInterval(scrollSkills, 16);


    // Grades Scroll Functionality
    const gradesScroll = document.querySelector('.grades-scroll');
    const gradesSpeed = 1;

    function cloneGrades() {
        const items = Array.from(gradesScroll.children);
        const cloneItems = items.map(item => item.cloneNode(true));
        cloneItems.forEach(item => gradesScroll.appendChild(item));
    }

    cloneGrades();

    let gradesScrollPosition = 0;

    function scrollGrades() {
        gradesScrollPosition += gradesSpeed;
        if (gradesScrollPosition >= gradesScroll.scrollWidth) {
            gradesScrollPosition = 0;
        }
        gradesScroll.scrollLeft = gradesScrollPosition;
    }

    setInterval(scrollGrades, 16);


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

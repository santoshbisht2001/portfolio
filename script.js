var sentences = [
    "Web Development",
    "Frontend Development",
    "Competitive Coding",
    "Software Engineering"
]; 
var speed = 50; 
var container = document.getElementById('typing-container'); 


function typeWriter(index) {
    if (index < sentences.length) {
        var sentence = sentences[index]; 
        var typed = ""; 
        var i = 0; 

        
        function typeCharacter() {
            if (i < sentence.length) {
                typed += sentence.charAt(i); 
                container.innerHTML = typed; 
                i++;
                setTimeout(typeCharacter, speed); 
            } else {
                setTimeout(eraseText, 1000); 
            }
        }

        function eraseText() {
            if (typed.length > 0) {
                typed = typed.slice(0, -1); 
                container.innerHTML = typed; 
                setTimeout(eraseText, speed); 
            } else {
                setTimeout(function() { typeWriter(index + 1) }, 1000); 
            }
        }

        typeCharacter(); 
    } else {
        typeWriter(0); 
    }
}

typeWriter(0); 


document.addEventListener('DOMContentLoaded', function() {
    const scrollLinks = document.querySelectorAll('.scroll-to');

    scrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const offset = 70; 
                const targetOffset = targetSection.offsetTop - offset;
                window.scrollTo({
                    top: targetOffset,
                    behavior: 'smooth'
                });
            }
        });
    });
});

function openLink(url) {
    window.open(url, '_blank');
}

document.addEventListener("DOMContentLoaded", function() {
    
    const buttons = document.querySelectorAll(".logo, .dcv, .heading, .sub-heading");

   
    buttons.forEach(button => {
        button.classList.add("animate-slide-in");
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const aboutHeaders = document.querySelectorAll('.about-hd, .skills-hd');
    const aboutParagraphs = document.querySelectorAll('.about-p p');
    const aboutImage = document.querySelector('.abt-img');

    const revealOnScroll = () => {
        const triggerBottom = window.innerHeight / 5 * 4;

        aboutHeaders.forEach(header => {
            const headerTop = header.getBoundingClientRect().top;

            if (headerTop < triggerBottom) {
                header.classList.add('visible');
            } else {
                header.classList.remove('visible');
            }
        });

        aboutParagraphs.forEach(paragraph => {
            const paragraphTop = paragraph.getBoundingClientRect().top;

            if (paragraphTop < triggerBottom) {
                paragraph.classList.add('visible');
            } else {
                paragraph.classList.remove('visible');
            }
        });

        const imgTop = aboutImage.getBoundingClientRect().top;
        if (imgTop < triggerBottom) {
            aboutImage.classList.add('visible');
        } else {
            aboutImage.classList.remove('visible');
        }
    };

    window.addEventListener('scroll', revealOnScroll);

    
    revealOnScroll();
});


document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.card');

    const revealCards = () => {
        const triggerBottom = window.innerHeight / 5 * 4;

        cards.forEach((card, index) => {
            const cardTop = card.getBoundingClientRect().top;

            if (cardTop < triggerBottom) {
                setTimeout(() => {
                    card.classList.add('visible');
                }, index * 200); 
            }
        });
    };

    window.addEventListener('scroll', revealCards);

    revealCards();
});



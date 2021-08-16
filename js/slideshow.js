let slides = document.querySelectorAll("#slides > img");
let prev = document.getElementById("prev");
let next = document.getElementById("next");
let current = 0;
let box = document.getElementById("slideShow");
let isHover = false;

box.onmouseover = () => { isHover = true; };
box.onmouseleave = () => { isHover = false; };

function showSlides(n) {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[n].style.display = "block";
}

function prevSlide() {
    if (current > 0) {
        current -= 1;
    } else {
        current = slides.length - 1;
    }
    showSlides(current);
}
function nextSlide() {
    if (current < 2) {
        current += 1;
    } else {
        current = 0;
    }
    showSlides(current);
}

function autoSlide() {
    if (!isHover)
        nextSlide();
    setTimeout(autoSlide, 1500);
}

showSlides(current);
prev.onclick = prevSlide;
next.onclick = nextSlide;
setTimeout(autoSlide, 1500);

const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const dots = document.querySelectorAll('.dot');
const auto = true;
const intervalTime = 5000;
let slideInterval;
let dotInterval;

const nextSlide = () => {
    const current = document.querySelector('.current');
    current.classList.remove('current');
    if (current.nextElementSibling) {
        current.nextElementSibling.classList.add('current');
    } else {
       slides[0].classList.add('current');
    }
    setTimeout(() => current.classList.remove('current'));
}
const nextDot = () => {
    const currentDot = document.querySelector('.currentDot');
    currentDot.classList.remove('currentDot');
    if (currentDot.nextElementSibling) {
        currentDot.nextElementSibling.classList.add('currentDot');
    } else {
       dots[0].classList.add('currentDot');
    }
    setTimeout(() => currentDot.classList.remove('currentDot'));
}

const prevSlide = () => {
    const current = document.querySelector('.current');
    current.classList.remove('current');
    if (current.previousElementSibling) {
        current.previousElementSibling.classList.add('current');
    } else {
       slides[slides.length - 1].classList.add('current'); 
    }
    setTimeout(() => current.classList.remove('current'));
}
const prevDot = () => {
    const currentDot = document.querySelector('.currentDot');
    currentDot.classList.remove('currentDot');
    if (currentDot.previousElementSibling) {
        currentDot.previousElementSibling.classList.add('currentDot');
    } else {
       dots[dots.length - 1].classList.add('currentDot');
    }
    setTimeout(() => currentDot.classList.remove('currentDot'));
}

next.addEventListener('click', e => {
    nextSlide();
    nextDot();
    if (auto) {
        clearInterval(slideInterval);
        clearInterval(dotInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
        dotInterval = setInterval(nextDot, intervalTime);
    }
});

prev.addEventListener('click', e => {
    prevSlide();
    prevDot();
    if (auto) {
        clearInterval(slideInterval);
        clearInterval(dotInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
        dotInterval = setInterval(nextDot, intervalTime);
    }
});

if(auto) {
    slideInterval = setInterval(nextSlide, intervalTime);
    dotInterval = setInterval(nextDot, intervalTime);
}
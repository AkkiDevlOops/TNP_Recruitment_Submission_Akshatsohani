let currentSlide = 0;

    function showSlide(index) {
        const slides = document.querySelector('.slides');
        const totalSlides = document.querySelectorAll('.slide').length;
        if (index >= totalSlides) {
            currentSlide = 0;
        } else if (index < 0) {
            currentSlide = totalSlides - 1;
        } else {
            currentSlide = index;
        }
        slides.style.transform = 'translateX(' + (-currentSlide * 100) + '%)';
    }

    function changeSlide(direction) {
        showSlide(currentSlide + direction);
    }

    setInterval(() => {
        changeSlide(1);
    }, 2000);

    

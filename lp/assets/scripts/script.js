document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.getElementById('carousel');
    const images = carousel.children;
    let index = 0;

    function showImage(newIndex) {
        if (newIndex >= images.length) newIndex = 0;
        if (newIndex < 0) newIndex = images.length - 1;
        carousel.style.transform = `translateX(-${newIndex * 100}%)`;
        index = newIndex;
    }

    function nextImage() {
        showImage(index + 1);
    }

    function prevImage() {
        showImage(index - 1);
    }

    document.querySelector('.carousel-control.next').addEventListener('click', nextImage);
    document.querySelector('.carousel-control.prev').addEventListener('click', prevImage);

    setInterval(nextImage, 5000); // Change image every 5 seconds
});

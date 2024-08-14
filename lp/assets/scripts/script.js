// CARROUSEL

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


// COUNTDOWN

document.addEventListener('DOMContentLoaded', () => {
    // Function to show the pop-up
    function showPopup() {
        const popup = document.querySelector('.pop-up');
        popup.style.display = 'block';
    }

    // Show the pop-up after 5 seconds
    setTimeout(showPopup, 2000);

    // Countdown functionality (previous code)
    let count = 7;
    const countdownElement = document.getElementById('countdown');

    function updateCountdown() {
        countdownElement.textContent = count;
        count--;

        if (count > 0) {
            const randomDelay = Math.floor(Math.random() * 2000) + 2000;
            setTimeout(updateCountdown, randomDelay);
        }
    }

    updateCountdown(); // Start the countdown
});

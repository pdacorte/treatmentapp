document.addEventListener('DOMContentLoaded', function() {
    // Carousel functionality
    const slideTrack = document.getElementById('slideTrack');
    const prevButton = document.getElementById('prevSlide');
    const nextButton = document.getElementById('nextSlide');
    let currentSlide = 0;
    const treatments = [
        { title: 'ANTI WRINKLE INJECTIONS', category: 'SKIN' },
        { title: 'MASSETER REDUCTION', category: 'FACE' },
        { title: 'SKIN BOOSTERS', category: 'SKIN' },
        { title: 'TEAR TROUGH', category: 'FACE' },
        { title: 'MICRONEEDLING', category: 'SKIN' },
        { title: 'MEDICAL GRADE SKINCARE', category: 'SKIN' },
        { title: 'SMILE LINES', category: 'FACE' },
    ];

    // Generate slides
    treatments.forEach((treatment, index) => {
        const slide = `
            <div class="w-full flex-shrink-0 px-4">
                <div class="relative aspect-[16/9] bg-gray-100 rounded-lg overflow-hidden">
                    <img src="/placeholder.svg" alt="${treatment.title}" class="w-full h-full object-cover">
                    <div class="absolute inset-0 bg-black/30 p-8 flex flex-col justify-end">
                        <div class="text-white">
                            <p class="text-sm mb-2">${treatment.category}</p>
                            <h3 class="text-2xl font-light mb-4">${treatment.title}</h3>
                            <a href="#" class="inline-block border border-white text-white px-6 py-2 text-sm hover:bg-white hover:text-black">
                                VIEW TREATMENT
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        `;
        slideTrack.insertAdjacentHTML('beforeend', slide);
    });

    // Update slide position
    function updateSlidePosition() {
        slideTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
    }

    // Next slide function
    function nextSlide() {
        currentSlide = (currentSlide + 1) % treatments.length;
        updateSlidePosition();
    }

    // Previous slide function
    function prevSlide() {
        currentSlide = (currentSlide - 1 + treatments.length) % treatments.length;
        updateSlidePosition();
    }

    // Event listeners for carousel buttons
    nextButton.addEventListener('click', nextSlide);
    prevButton.addEventListener('click', prevSlide);

    // Optional: Auto-play functionality
    let autoplayInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds

    // Pause autoplay on mouse enter
    slideTrack.addEventListener('mouseenter', () => {
        clearInterval(autoplayInterval);
    });

    // Resume autoplay on mouse leave
    slideTrack.addEventListener('mouseleave', () => {
        autoplayInterval = setInterval(nextSlide, 5000);
    });

    // Cookie warning functionality
    const cookieBanner = document.getElementById('cookieBanner');
    const acceptCookiesButton = document.getElementById('acceptCookies');
    const closeCookieBannerButton = document.getElementById('closeCookieBanner');

    // Function to hide cookie banner
    function hideCookieBanner() {
        cookieBanner.style.display = 'none';
        localStorage.setItem('cookiesAccepted', 'true');
    }

    // Check if user has already accepted cookies
    if (localStorage.getItem('cookiesAccepted') === 'true') {
        cookieBanner.style.display = 'none';
    }

    // Event listeners for cookie banner buttons
    acceptCookiesButton.addEventListener('click', hideCookieBanner);
    closeCookieBannerButton.addEventListener('click', hideCookieBanner);
});
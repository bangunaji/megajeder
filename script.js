
// Intersection Observer for about section animation
document.addEventListener("DOMContentLoaded", function () {
    const aboutSection = document.querySelector(".about-section");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                aboutSection.classList.add("visible");
            }
        });
    });
    observer.observe(aboutSection);
});

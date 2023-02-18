// Gets 'lazyload' class elements
// Set options IntersectionObserver
const images = document.querySelectorAll('.lazyload');
const options = {
    rootMargin: '0px',
    threshold: 0.1
};

// Define callback function for IntersectionObserver
// Load image and stop observing it
const handleIntersection = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
            const img = entry.target;
            const src = img.getAttribute('data-src');
            img.setAttribute('src', src);
            img.classList.add('lazyloaded');
            observer.unobserve(img);
        }
    });
};

// Create a new IntersectionObserver and start observing each image
const observer = new IntersectionObserver(handleIntersection, options);
images.forEach(image => {
    observer.observe(image);
});

// `hidePlaceholder` function 
// is called when an image has finished loading. 
function hidePlaceholder(event) {
    const img = event.target;
    const placeholder = img.previousElementSibling;
    if (placeholder && placeholder.tagName === "img") {
        placeholder.style.display = "none";
    }

    img.style.opacity = "1";
}

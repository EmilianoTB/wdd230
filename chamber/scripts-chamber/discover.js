// Gets 'lazyload' class elements
// Set options IntersectionObserver
const images = document.querySelectorAll('.discover-img');
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

/* `hidePlaceholder` function 
 is called when an image has finished loading.*/  
function hidePlaceholder(event) {
    const img = event.target;
    const placeholder = img.previousElementSibling;
    if (placeholder && placeholder.tagName === "img") {
        placeholder.style.display = "none";
    }

    img.style.opacity = "1";
}


// initialize display elements
const visitsDisplay = document.querySelector("#timeSinceLastVisit");

let numVisits = Number(window.localStorage.getItem("visits-ls")); 

// determine if this is the first visit or display the number of visits.
if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit!`;
}


numVisits++;
localStorage.setItem("visits-ls", numVisits);
todayDisplay.textContent = Date.now();

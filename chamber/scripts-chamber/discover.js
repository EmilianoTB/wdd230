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


// get the last visit date from local storage
let lastVisit = localStorage.getItem('lastVisit');

// if there is no previous visit date, set it to the current time
if (!lastVisit) {
  lastVisit = Date.now();
  localStorage.setItem('lastVisit', lastVisit);
} else { /*calculate the time difference in days
     display the time difference in days on the page
     update the last visit date in local storage to the current time */
  const timeDiffMs = Date.now() - lastVisit;
  const timeDiffDays = Math.round(timeDiffMs / (1000 * 60 * 60 * 24));

  
  document.getElementById('timeSinceLastVisit').innerHTML = `${timeDiffDays} days`;
  localStorage.setItem('lastVisit', Date.now());
} 

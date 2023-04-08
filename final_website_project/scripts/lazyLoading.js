function lazyLoadBackgrounds() {
    let lazyBg = document.querySelectorAll('.envelope');
    lazyBg.forEach(function(bg) {
      if (bg.getBoundingClientRect().top < window.innerHeight) {
        bg.style.backgroundImage = 'url(' + bg.dataset.src + ')';
        bg.classList.remove('envelope');
      }
    });
  }
  
  window.addEventListener('scroll', lazyLoadBackgrounds);
  window.addEventListener('resize', lazyLoadBackgrounds);
  window.addEventListener('orientationchange', lazyLoadBackgrounds);
  
  lazyLoadBackgrounds();
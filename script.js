document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.slide');
  const totalSlides = slides.length;
  let currentSlide = 0;

  // UI Elements
  const btnPrev = document.getElementById('btn-prev');
  const btnNext = document.getElementById('btn-next');
  const slideNumber = document.getElementById('slide-number');
  const progressBar = document.getElementById('progress-bar');
  const slideDotsContainer = document.getElementById('slide-dots');
  const menuToggle = document.getElementById('menu-toggle');
  const quickMenu = document.getElementById('quick-menu');
  const quickMenuClose = document.getElementById('quick-menu-close');
  const quickMenuList = document.getElementById('quick-menu-list');

  // Create Slide Dots
  for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement('div');
    dot.classList.add('slide-dot');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToSlide(i));
    slideDotsContainer.appendChild(dot);
  }
  const dots = document.querySelectorAll('.slide-dot');

  // Create Quick Menu Items
  slides.forEach((slide, index) => {
    const category = slide.querySelector('.slide-category')?.textContent || `Folie ${index + 1}`;
    const title = slide.querySelector('.slide-title')?.textContent || 'Startseite';
    const item = document.createElement('li');
    item.classList.add('quick-menu-item');
    if (index === 0) item.classList.add('active');
    item.innerHTML = `<strong>${category}</strong>: ${title}`;
    item.addEventListener('click', () => {
      goToSlide(index);
      closeMenu();
    });
    quickMenuList.appendChild(item);
  });
  const menuItems = document.querySelectorAll('.quick-menu-item');

  function updateSlides() {
    slides.forEach((slide, index) => {
      slide.classList.remove('active', 'prev-slide');
      if (index === currentSlide) {
        slide.classList.add('active');
      } else if (index < currentSlide) {
        slide.classList.add('prev-slide');
      }
    });

    // Update buttons
    btnPrev.disabled = currentSlide === 0;
    btnNext.disabled = currentSlide === totalSlides - 1;

    // Update slide number
    slideNumber.textContent = `${currentSlide + 1} / ${totalSlides}`;

    // Update progress bar
    const progress = (currentSlide / (totalSlides - 1)) * 100;
    progressBar.style.width = `${progress}%`;

    // Update dots
    dots.forEach((dot, index) => {
      if (index === currentSlide) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });

    // Update menu selection
    menuItems.forEach((item, index) => {
      if (index === currentSlide) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
  }

  function goToSlide(index) {
    if (index >= 0 && index < totalSlides) {
      currentSlide = index;
      updateSlides();
    }
  }

  function nextSlide() {
    if (currentSlide < totalSlides - 1) {
      currentSlide++;
      updateSlides();
    }
  }

  function prevSlide() {
    if (currentSlide > 0) {
      currentSlide--;
      updateSlides();
    }
  }

  // Navigation Event Listeners
  btnPrev.addEventListener('click', prevSlide);
  btnNext.addEventListener('click', nextSlide);

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
      e.preventDefault();
      nextSlide();
    } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
      e.preventDefault();
      prevSlide();
    } else if (e.key === 'Home') {
      e.preventDefault();
      goToSlide(0);
    } else if (e.key === 'End') {
      e.preventDefault();
      goToSlide(totalSlides - 1);
    } else if (e.key === 'm' || e.key === 'M') {
      toggleMenu();
    } else if (e.key === 'Escape') {
      closeMenu();
      closeLightbox();
    }
  });

  // Menu toggles
  function toggleMenu() {
    quickMenu.classList.toggle('open');
  }

  function closeMenu() {
    quickMenu.classList.remove('open');
  }

  menuToggle.addEventListener('click', toggleMenu);
  quickMenuClose.addEventListener('click', closeMenu);

  // Interactive Flip Cards (on Slide 8 or any other slide)
  const flipCards = document.querySelectorAll('.flip-card');
  flipCards.forEach(card => {
    card.addEventListener('click', () => {
      card.classList.toggle('flipped');
    });
  });

  // Lightbox Zoom functionality for screenshots
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const lightboxClose = document.getElementById('lightbox-close');
  const screenshotCards = document.querySelectorAll('.screenshot-card');

  screenshotCards.forEach(card => {
    card.addEventListener('click', () => {
      const img = card.querySelector('.screenshot-img');
      const caption = card.querySelector('.screenshot-caption');
      if (img) {
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
        lightboxCaption.textContent = caption ? caption.textContent : img.alt;
        lightbox.classList.add('open');
      }
    });
  });

  function closeLightbox() {
    lightbox.classList.remove('open');
  }

  lightboxClose.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => {
    // Close when clicking on background or container padding
    if (e.target === lightbox || e.target.id === 'lightbox') {
      closeLightbox();
    }
  });

  // Initialize
  updateSlides();
});

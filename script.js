
// Theme Toggle Functionality
document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;

  // Check if user has previously set a theme preference
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    body.classList.toggle('dark-theme', savedTheme === 'dark');
  }

  // Add toggle functionality
  themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    // Save preference to localStorage
    const isDarkTheme = body.classList.contains('dark-theme');
    localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light');
  });

  // Mobile menu functionality
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('navLinks');

  menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
  });

  // Close menu when clicking on a link (for mobile)
  const navItems = document.querySelectorAll('.nav-links a');
  navItems.forEach(item => {
    item.addEventListener('click', () => {
      menuToggle.classList.remove('active');
      navLinks.classList.remove('active');
    });
  });

  // Image Slider for homepage
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');
  const prevBtn = document.getElementById('prevSlide');
  const nextBtn = document.getElementById('nextSlide');
  let currentSlide = 0;
  let sliderInterval;

  // Only initialize slider if it exists on the page
  if (slides.length > 0) {
    // Function to change slide
    function goToSlide(index) {
      // Remove active class from all slides and dots
      slides.forEach(slide => slide.classList.remove('active'));
      dots.forEach(dot => dot.classList.remove('active'));

      // Set the current slide and add active class
      currentSlide = index;
      slides[currentSlide].classList.add('active');
      dots[currentSlide].classList.add('active');
    }

    // Next and previous slide functions
    function nextSlide() {
      const next = (currentSlide + 1) % slides.length;
      goToSlide(next);
    }

    function prevSlide() {
      const prev = (currentSlide - 1 + slides.length) % slides.length;
      goToSlide(prev);
    }

    // Event listeners for slider controls
    prevBtn?.addEventListener('click', () => {
      prevSlide();
      resetSliderInterval();
    });

    nextBtn?.addEventListener('click', () => {
      nextSlide();
      resetSliderInterval();
    });

    // Dot navigation
    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        goToSlide(index);
        resetSliderInterval();
      });
    });

    // Auto slide functionality
    function startSliderInterval() {
      sliderInterval = setInterval(() => {
        nextSlide();
      }, 5000); // Change slide every 5 seconds
    }

    function resetSliderInterval() {
      clearInterval(sliderInterval);
      startSliderInterval();
    }

    // Start the auto slider
    startSliderInterval();
  }

  // Testimonial slider functionality
  const testimonialSlides = document.querySelectorAll('.testimonial-slide');
  const testimonialDots = document.querySelectorAll('.testimonial-dots .dot');
  const prevTestimonialBtn = document.getElementById('prevTestimonial');
  const nextTestimonialBtn = document.getElementById('nextTestimonial');
  let currentTestimonial = 0;
  let testimonialInterval;

  // Only initialize testimonial slider if it exists on the page
  if (testimonialSlides.length > 0) {
    // Function to change testimonial
    function goToTestimonial(index) {
      // Remove active class from all testimonials and dots
      testimonialSlides.forEach(slide => slide.classList.remove('active'));
      testimonialDots.forEach(dot => dot.classList.remove('active'));

      // Set the current testimonial and add active class
      currentTestimonial = index;
      testimonialSlides[currentTestimonial].classList.add('active');
      testimonialDots[currentTestimonial].classList.add('active');
    }

    // Next and previous testimonial functions
    function nextTestimonial() {
      const next = (currentTestimonial + 1) % testimonialSlides.length;
      goToTestimonial(next);
    }

    function prevTestimonial() {
      const prev = (currentTestimonial - 1 + testimonialSlides.length) % testimonialSlides.length;
      goToTestimonial(prev);
    }

    // Event listeners for testimonial controls
    prevTestimonialBtn?.addEventListener('click', () => {
      prevTestimonial();
      resetTestimonialInterval();
    });

    nextTestimonialBtn?.addEventListener('click', () => {
      nextTestimonial();
      resetTestimonialInterval();
    });

    // Dot navigation for testimonials
    testimonialDots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        goToTestimonial(index);
        resetTestimonialInterval();
      });
    });

    // Auto testimonial functionality
    function startTestimonialInterval() {
      testimonialInterval = setInterval(() => {
        nextTestimonial();
      }, 6000); // Change testimonial every 6 seconds
    }

    function resetTestimonialInterval() {
      clearInterval(testimonialInterval);
      startTestimonialInterval();
    }

    // Start the auto testimonial
    startTestimonialInterval();
  }

  // Portfolio filter functionality
  const filterBtns = document.querySelectorAll('.filter-btn');
  const portfolioItems = document.querySelectorAll('.portfolio-item');

  // Only initialize portfolio filter if it exists on the page
  if (filterBtns.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        // Remove active class from all filter buttons
        filterBtns.forEach(filterBtn => {
          filterBtn.classList.remove('active');
        });
        
        // Add active class to clicked button
        btn.classList.add('active');
        
        // Get filter value
        const filter = btn.getAttribute('data-filter');
        
        // Filter portfolio items
        portfolioItems.forEach(item => {
          if (filter === 'all' || item.classList.contains(filter)) {
            item.style.display = 'block';
          } else {
            item.style.display = 'none';
          }
        });
      });
    });
  }

  // Accordion functionality
  const accordionHeaders = document.querySelectorAll('.accordion-header');
  
  // Only initialize accordion if it exists on the page
  if (accordionHeaders.length > 0) {
    accordionHeaders.forEach(header => {
      header.addEventListener('click', () => {
        // Toggle active class on the accordion item
        const accordionItem = header.parentElement;
        accordionItem.classList.toggle('active');
        
        // Toggle plus/minus icon
        const icon = header.querySelector('i');
        icon.classList.toggle('fa-plus');
        icon.classList.toggle('fa-minus');
      });
    });
  }

  // Contact form validation
  const contactForm = document.getElementById('contactForm');
  
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Simple form validation
      let isValid = true;
      const requiredFields = contactForm.querySelectorAll('[required]');
      
      requiredFields.forEach(field => {
        if (!field.value.trim()) {
          isValid = false;
          field.classList.add('error');
        } else {
          field.classList.remove('error');
        }
      });
      
      if (isValid) {
        // Show success message (in a real application, this would submit to a server)
        alert('¡Mensaje enviado con éxito! Nos pondremos en contacto con usted a la brevedad.');
        contactForm.reset();
      } else {
        alert('Por favor complete todos los campos obligatorios.');
      }
    });
  }
});

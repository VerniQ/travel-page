const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
  
  
    burger.addEventListener('click', () => {
      
      nav.classList.toggle('nav-active');
  
      navLinks.forEach((link, index) => {
        link.style.animation = ''; 
        if (nav.classList.contains('nav-active')) {
             link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
        }
      });
  
       burger.classList.toggle('active');
     });
   };
   navSlide();
  const contactForm = document.getElementById('contactForm');
  const formMessage = document.getElementById('formMessage');

  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');
  
  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const messageError = document.getElementById('messageError');
  
  const validateEmail = (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
  };
  
  const validateInput = (input, errorElement, errorMessage) => {
      if (input.value.trim() === '') {
          errorElement.textContent = errorMessage;
          errorElement.style.display = "block";
          return false;
      } else {
          errorElement.textContent = '';
          errorElement.style.display = "none";
          return true
      }
  }
  
  contactForm.addEventListener('submit', function (event) {
      event.preventDefault();
  
      const isNameValid = validateInput(nameInput, nameError, "Imię jest wymagane");
      const isEmailValid = validateInput(emailInput, emailError, "Niepoprawny adres email") && validateEmail(emailInput.value);
      const isMessageValid = validateInput(messageInput, messageError, "Wiadomość jest wymagana");
  
  
      if (isNameValid && isEmailValid && isMessageValid) {
          formMessage.textContent = "Wiadomość wysłana!";
          formMessage.style.color = "green";
          contactForm.reset();
          setTimeout(() => {
              formMessage.textContent = "";
          }, 3000);
      } else {
          formMessage.textContent = "Formularz zawiera błędy";
          formMessage.style.color = "red";
      }
  });
  
  const slider = document.querySelector('.slider');
  const slides = document.querySelectorAll('.slide');
  const prevBtn = document.querySelector('.slider-prev');
  const nextBtn = document.querySelector('.slider-next');
  
  let currentSlide = 0;
  
  function showSlide(slideIndex) {
      slides.forEach(slide => slide.classList.remove('active'));
      slides[slideIndex].classList.add('active');
  }
  
  function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
  }
  
  function prevSlide() {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      showSlide(currentSlide);
  }
  
  let sliderInterval = setInterval(nextSlide, 5000);
  
  slider.addEventListener("mouseenter", ()=> clearInterval(sliderInterval));
  slider.addEventListener("mouseleave", ()=> sliderInterval = setInterval(nextSlide, 5000))
  
  prevBtn.addEventListener('click', () => {
    clearInterval(sliderInterval);
    prevSlide();
  });
  nextBtn.addEventListener('click', () => {
    clearInterval(sliderInterval);
    nextSlide();
  });
  
  showSlide(currentSlide);
  
  const galleryItems = document.querySelectorAll('.gallery-item img');
  const lightbox = document.getElementById('lightbox');
  const lightboxImage = document.querySelector('.lightbox-image');
  const closeLightbox = document.querySelector('.close-lightbox');
  
  galleryItems.forEach(item => {
      item.addEventListener('click', () => {
          lightbox.classList.add('active');
          lightboxImage.src = item.src;
      });
  });
  
  closeLightbox.addEventListener('click', () => {
      lightbox.classList.remove('active');
  });
  
  lightbox.addEventListener('click', (event) => {
      if (event.target === lightbox) {
        lightbox.classList.remove('active');
      }
  })
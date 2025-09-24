document.addEventListener('DOMContentLoaded', function () {
  
  const burgerBtn = document.getElementById('burgerBtn');
  const slideMenu = document.getElementById('slideMenu');
  const closeMenu = document.getElementById('closeMenu');
  const overlay = document.getElementById('overlay');

  burgerBtn?.addEventListener('click', (e) => {
    e.preventDefault();
    slideMenu?.classList.add('active');
    overlay?.classList.add('active');
  });

  function closeSlideMenu() {
    slideMenu?.classList.remove('active');
    overlay?.classList.remove('active');
  }

  closeMenu?.addEventListener('click', closeSlideMenu);
  overlay?.addEventListener('click', closeSlideMenu);

  window.addEventListener('click', function (e) {
    if (
      slideMenu && burgerBtn && overlay &&
      !slideMenu.contains(e.target) &&
      !burgerBtn.contains(e.target) &&
      !overlay.contains(e.target)
    ) {
      closeSlideMenu();
    }
  });

  
  const items = document.querySelectorAll("#main .swiper_wrapper2 ul li");
  const visibleCount = 4;
  let startIndex = 0;

  function renderItems() {
    items.forEach((el, i) => {
      el.style.display = (i >= startIndex && i < startIndex + visibleCount) ? "block" : "none";
    });
  }

  document.querySelector(".game_btn2")?.addEventListener("click", () => {
    if (startIndex + visibleCount < items.length) {
      startIndex += 1;
      renderItems();
    }
  });

  document.querySelector(".game_btn1")?.addEventListener("click", () => {
    if (startIndex > 0) {
      startIndex -= 1;
      renderItems();
    }
  });

  renderItems();

  // --- 슬라이드 자동 전환 (3개) ---
  const slides = [
    document.querySelector('#main .swiper_side'),
    document.querySelector('#main .swiper_side_2'),
    ...document.querySelectorAll('#main .swiper_side_3')
  ].filter(Boolean); 

  let currentSlide = 0;

  function showSlide(index) {
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.classList.add('active');
    } else {
      slide.classList.remove('active');
    }
  });
}

  showSlide(currentSlide);

  setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }, 5000);
});

const slides = [
  document.querySelector('#main .swiper_side'),
  document.querySelector('#main .swiper_side_2'),
  ...document.querySelectorAll('#main .swiper_side_3')
].filter(Boolean); 

const bullets = document.querySelectorAll(
  "#main .promotionBannerPaginationWrapper .swiper-pagination-bullet"
);

let currentSlide = 0;

function showSlide(index) {
  
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });

  
  bullets.forEach((bullet, i) => {
    bullet.classList.toggle("active", i === index);
  });
}

showSlide(currentSlide);

setInterval(() => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}, 5000);
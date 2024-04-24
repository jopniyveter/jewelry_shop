let input = document.querySelector('.search-input');
let inputParent = document.querySelector('.search-block');
document.addEventListener('click', function(e) {
    let menuBtn = document.querySelector('.menu-btn');
    let menu = document.querySelector('.menu');
    if(e.target.closest('.menu-btn') || e.target.closest('.menu-close')) {
        menuBtn.classList.toggle('active');
        menu.classList.toggle('active');
    }
    let search = document.querySelector('.search');
    if(e.target.closest('.search-open')) {
      search.classList.toggle('search-active');
      inputParent.classList.remove('search-visible');
    } else if (search.closest('.search') && !e.target.closest('.search-block') && search.closest('.search-active')) {
      console.log(input);
      search.classList.remove('search-active');
      inputParent.classList.remove('search-visible');
    }
    if(e.target.closest('.search-clear')) {
      inputParent.classList.remove('search-visible');
    }
})

const swiperIntro = new Swiper('.intro-sliders');

const swiperNew = new Swiper('.new-sliders', {
  slidesPerView: 3,
  navigation: {
    nextEl: '.new-button-next',
    prevEl: '.new-button-prev',
  },
});
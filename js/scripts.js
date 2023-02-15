/*- menu-btn -*/
var siteToggle = $('.menu-btn'),
  siteMenu= $('.main-nav');

siteToggle.on('click', function(){
  $(this).toggleClass('open');
  siteMenu.toggleClass('show');
});

/*- tabs -*/
const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget)
    tabContents.forEach(tabContent => {
      tabContent.classList.remove('active')
    })
    tabs.forEach(tab => {
      tab.classList.remove('active')
    })
    tab.classList.add('active')
    target.classList.add('active')
  })
})

/*- partners-slider -*/
var swiper = new Swiper('.partners-slider', {
  slidesPerView: 'auto',
  centeredSlides: true,
  spaceBetween: 100,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});

/*- work-slider -*/
var swiper = new Swiper('.work-slider', {
  spaceBetween: 30,
  navigation: {
    nextEl: '.work-slider .swiper-button-next',
    prevEl: '.work-slider .swiper-button-prev',
  },
});

/*- person-slider -*/
var swiper = new Swiper('.person-slider', {
  slidesPerView: 'auto',
  centeredSlides: true,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: '.person-slider .swiper-button-next',
    prevEl: '.person-slider .swiper-button-prev',
  },
});

/*- info-slider -*/
var swiper = new Swiper('.info-slider', {
  spaceBetween: 15,
  pagination: {
    el: '.info-slider .swiper-pagination',
    clickable: true,
  },
});

/*- accordion -*/
const accordionContent = document.querySelectorAll('.accordion__content');

const accordion = document.querySelectorAll('.accordion__top-panel');

accordion.forEach((element) => {
  element.addEventListener('click', () => {
    element.classList.toggle('active');
    let panel = element.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + 'px';
    }
  });
});
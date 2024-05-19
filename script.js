/*=========== sticky navbar ===========*/
console.log("promtif")
window.onscroll = () => {
let header = document.querySelector('.header');
header.classList.toggle('sticky',window.scrolly>100);
};

/*=========== swiper ===========*/
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".singlePropertySwiper", {
      loop: false, // Infinite loop
   //   autoplay: {
    //     delay: 10000, // 5 seconds interval
     //    disableOnInteraction: false, // Keep autoplaying even after user interaction
      //  },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      effect: "fade", // Smooth fade transition
    });
  });
  
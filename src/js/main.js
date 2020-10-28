$('[data-fancybox]').fancybox({
	
    youtube : {
        controls : 1,
        showinfo : 1
    },
    vimeo : {
        color : 'f00'
    }
});



var mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  
  // Navigation arrows
  navigation: {
    nextEl: '.slide-right-arrow',
    prevEl: '.slide-left-arrow',
  },

  
})
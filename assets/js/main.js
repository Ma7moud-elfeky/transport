$('.owl-testimonials').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:2
        }
    }

})
$('.dh-container').directionalHover({
 
    // CSS class for the overlay
    overlay: "dh-overlay",
   
    // Linear or swing
    easing: "swing",
    speed: 400
     
  });

(function($) {
  'use strict'; 
  // place your code here

/* ===== start drawer mobile menu ===== */ 
$(document).ready(function(){
  // open drawer menu 
  $(".menu-open").click(function(){
    $(this).addClass('d-none');
    $(".drawer-menu").addClass('d-block').css({
      transform: 'translateX(0)',
      transition: '.5s'
    });
    $(".wrapper").css({
      transform: 'translateX(250px)',
      transition: '.5s'
    });
    $(".menu-close").removeClass('d-none').addClass('d-block');
  });

  // close drawer menu 
  $(".menu-close").click(function(){
    $(this).removeClass('d-block').addClass('d-none');
    $(".drawer-menu").addClass('d-block').css({
      transform: 'translateX(-250px)',
      transition: '.5s'
    });
    $(".wrapper").css({
      transform: 'translateX(0)',
      transition: '.5s'
    });
    $(".menu-open").removeClass( 'd-none');
  });
});
/* ===== end drawer mobile menu ===== */ 

/* ============ start activation for owl carousel ============= */
  jQuery(document).ready(function($){
    $('.your-class').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        autoplay:true,
        items:1,
        autoplayTimeout:6000,
        autoplaySpeed:2000,
    })
  });
/* ============ end activation for owl carousel ============= */


/* ============ start activation for slick slider ============= */
$(document).ready(function(){
  $('.single-item').slick({
    autoplay: false,
    autoplaySpeed: 3000,
  });
});
/* ============ end activation for slick slider ============= */


/* ============ start activation for wow js ============= */
  new WOW().init();
/* ============ end activation for wow js ============= */

/* ============ start activation for waypoints ============= */
  $(document).ready(function(){
    // hide your element on page load
    $('#element-to-animate').css('opacity', 0);

    // trigger animation
    $('#element-to-animate').waypoint(function() {
        $('#element-to-animate').addClass('fadeInLeft');
    }, { offset: '50%' });
  });
/* ============ end activation for waypoints ============= */

/* ============ start activation for isotope ============= */

  // init Isotope
  var $grid = $('.grid').isotope({
    itemSelector: '.element-item',
    layoutMode: 'fitRows'
  });


  // filter items on button click
  $('.portfolio-btn-group').on( 'click', 'li', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });

  // add btn-checked class on buttons
  $('.btn-check').click(function(){
    $('li').find('span').removeClass('btn-checked');
    $(this).addClass('btn-checked');
  });

/* ============ end activation for isotope ============= */

/* ============ start activation for lightcase ============= */
  jQuery(document).ready(function($){
    $('a[data-rel^=lightcase]').lightcase();
  });
/* ============ end activation for lightcase ============= */






/*============= Magnific pop up JS ================*/
    $(document).ready(function() {
      $('.video-play').magnificPopup({type:'iframe'});
    });
/*============= Magnific pop up JS ====================*/

})(window.jQuery);  


        
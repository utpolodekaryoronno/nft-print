$(document).ready(function(){
  // menu
  $('#nav-icon').click(function(){
    $(this).toggleClass('open');
    $('.header_nav').slideToggle();
 });

  // aos
  AOS.init();
  
  // owlCarousel
  $('.pay').owlCarousel({
    margin:30,
    loop:true,
    nav:true,
    autoplay:true,
    navText:['<i class="fa-solid fa-angle-left"></i>','<i class="fa-solid fa-angle-right"></i>'],
    responsive:{
      0:{
        items:1
      },
      320:{
        items:2,
        margin:20,
      },
      450:{
        items:3,
        margin:20,
      },
      575:{
        items:4
      },
      767:{
        items:6
      },
      991:{
        items:7
      },
    }
  });


  // owlCarousel
  $('.popular-main').owlCarousel({
    margin:30,
    loop:true,
    nav:true,
    center:true,
    autoHeight: true,
    // autoplay:true,
    navText:['<i class="fa-solid fa-angle-left"></i>','<i class="fa-solid fa-angle-right"></i>'],
    responsive:{
      0:{
        items:1,
        center:false,
      },

      575:{
        items:2
      },
      767:{
        items:2
      },
      991:{
        items:4
      },
     
    }
  });

  // social-club2-page 
  // form-area2
  $('.card-icon').click(function(){
		$('.form-area2').animate({
			width: 'show'
		});
	});
	$(".menu-crose-icon").click(function(){
		$('.form-area2').animate({
			width: 'toggle'
		});
	})
  
});


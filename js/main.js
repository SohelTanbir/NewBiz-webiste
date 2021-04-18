$(document).ready(function(){

    /*counter plugin*/
        $('.count').counterUp({
            delay:3,
            time:500
        });

    /* Portfolio items filter*/
    var mix = mixitup('.grid_container');
    $('.portfolio_nav ul li').click(function(){
        $(this).addClass('selected').siblings().removeClass('selected');
    });


    /*testimonial owl carousel*/
    $('#testimonial_section .owl-carousel').owlCarousel({
        items:1,
        autoplay:true,
        loop:Infinity
    });
    /* Scroll top button*/
    $(window).scroll(function(){
        if($(this).scrollTop() >200){
            $('.scroll_up_button').fadeIn(1000);
        }else{
            $('.scroll_up_button').fadeOut(500);
        }
    });
     /* back to top*/
     $('.scroll_up_button').click(function(){
        $('html,body').animate({
            scrollTop:0
        },2000);
        return false;
     });

    /*AOS initial*/
        AOS.init();

    /*mobile menu*/
     $('.mobile_btn').click(function(){
         $('.main_manu').slideToggle();
     });
    
   /* For preloader*/
   











});
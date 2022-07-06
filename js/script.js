$(document).ready(function () {

    /*=========product=slide==========*/
    $('.product-slide').slick({
    
        slidesToShow: 3,
        slidesToScroll: 2,
        arrows: false,
        dots: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToScroll: 2,
                    slidesToShow: 2,
                }
        
            },
            
            {
                breakpoint: 576,
                settings: {
                    slidesToScroll: 1,
                    slidesToShow: 1,
                }
        
            },
        ]
        
        
        
    });
    
    /*========Blog=slide========*/
    $('.show-slide').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
    })
    
    
    /*=======nav-slide======*/
  /*  $('.nav-btn').click(function () {

        $('.navi-nav').addClass('slide');

    })*/
    /*var myToggle = document.getElementById('menuBtn');

    menuBtn.onclick = function () {

        menuBtn.classList.toggle('active');

    }*/
    
    
    





})

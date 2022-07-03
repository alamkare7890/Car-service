$(document).ready(function () {

/*=========product=slide==========*/
    $('.product-slide').slick({
    
        slidesToShow: 3,
        slidesToScroll: 2,
        arrows: false,
    
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
        
    })
    
    
     
    
    





})

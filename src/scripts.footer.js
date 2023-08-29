$(document).ready(function() {

  $(".custom-footer__banner22").insertAfter( $("body"));

         $('.custom-footer__banner22').mouseenter(function() {
    
            $('.custom-footer__banner22').mouseenter(function() {
                $(this).animate({
                    left: '0'
                },320);
            });

            $('.custom-footer__banner22 ').mouseleave(function() {
                $(this).animate({
                    left: '-320px'
                }, 200);
            });
      });
    });
      

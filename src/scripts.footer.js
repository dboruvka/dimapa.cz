$(document).ready(function() {

    $(".custom-footer__banner22").insertAfter( $("body"));
    var breakpoint = document.documentElement.clientWidth;

    if (breakpoint > 768)  // desktop
    {
                

                        //    $('.custom-footer__banner22').mouseenter(function() {
                        $('.custom-footer__banner22').on('mouseenter', function() {
                            $(this).animate({
                                left: '0'
                            },100);
                        });

                $('.custom-footer__banner22').on('mouseleave click', function() {
                    //$('.custom-footer__banner22').on('touchend', function() {

                    //    $('.custom-footer__banner22').mouseleave(function() {
                $(this).animate({
                                left: '-320px'
                            }, 200);
                    
                });

    }

else // mobil

{

    var zobrazeno = false;


    $('.custom-footer__banner22').on('click', function() {

        zobrazeno = !zobrazeno;

        // Zobrazení nebo skrytí obrázku
        if (zobrazeno) {
          $(this).animate({
            left: '0'
          }, 100);
        } else {
          $(this).animate({
            left: '-320px'
          }, 200);
        }
              

      });

}


    });
      

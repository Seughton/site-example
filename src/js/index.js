import $ from 'jquery';
import popper from 'popper.js';
import 'slick-carousel'
import bootstrap from 'bootstrap';

/*app*/
/*toTop button*/
$(function() {

    $(window).scroll(function() {

        if($(this).scrollTop() != 0) {

            $('#toTop').fadeIn();

        } else {

            $('#toTop').fadeOut();

        }

    });

    $('#toTop').click(function() {

        $('body,html').animate({scrollTop:0},800);

    });

});
/*!toTop button*/

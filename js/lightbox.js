$(document).ready(function(){

    /* Open lightbox on button click */
    $('.imagesgrid img').click(function(){
        $('.backdrop').animate({'opacity':'.50'}, 300, 'linear').css('display', 'block');
        $('.box').fadeIn();

        //Check if lightbox has an image
        if ($('.box').contents('img')) {
            $('.box').contents().remove('img'); //If true, clear image
        }

        //Get text content in attribute
        var $altvalue = $(this).attr('alt'); //or var altvalue = $(this).attr('alt');

        if ($altvalue=="west river") {
            var img = $('#west:nth-child(1) img').clone(); //Duplicate DOM element
            $('.box').append(img); //Insert duplicated element in another element
        } else if ($altvalue=="north river") {
            var img = $('#north:nth-child(2) img').clone();
            $('.box').append(img);
        } else if ($altvalue=="east river") {
            var img = $('#east:nth-child(3) img').clone();
            $('.box').append(img);
        } else {
            var img = $('#south:nth-child(4) img').clone();
            $('.box').append(img);
        }
    });

    /* Click to close lightbox */
    $('.close, .backdrop').click(function(){
        $('.backdrop').animate({'opacity':'0'}, 300, 'linear', function(){
            $('.backdrop').css('display', 'none');
        });
        $('.box').fadeOut();
    });

});
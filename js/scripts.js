$(function(){
         
    $('#mycarousel').carousel({
        interval: 500
    });
    $('#carouselButton').on('click', function(){
        if($('#carouselButton').children('span').hasClass('fa-pause')){
 
            $('#mycarousel').carousel('pause');
            $('#carouselButton').children('span').removeClass('fa-pause');
            $('#carouselButton').children('span').addClass('fa-play');
        } else if($('#carouselButton').children('span').hasClass('fa-play')){
            
            $('#mycarousel').carousel('cycle');
            $('#carouselButton').children('span').removeClass('fa-play');
            $('#carouselButton').children('span').addClass('fa-pause');
        }
         
 
     } )

    $('#loginbutton').on('click', function(){
        $('#loginmodal').modal('show');
    });

    $('#reservebutton').on('click', function(){
        $('#reservemodal').modal('toggle');
    })

   


})

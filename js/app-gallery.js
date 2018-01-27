 $('[id^=carousel-selector-]').click(function () {
     var id_selector = $(this).attr("id");
     try {
         var id = /-(\d+)$/.exec(id_selector)[1];
         jQuery('#myCarousel').carousel(parseInt(id));
     } catch (e) {
         console.log('Regex failed!', e);
     }
 });

 $(window).scroll(function () {
     var sticky = $('.sticky'),
         scroll = $(window).scrollTop();

     if (scroll >= 100) sticky.addClass('fixed');
     else sticky.removeClass('fixed');
 });


 function fullscreen() {
     var current = $(".active").attr("id");
     $("#modal-img").html("<img class='img-fluid-gallery' src='../img/img-gallery-carousel/" + current + ".jpg'>")
 }
 $(".thumbnail").click(function () {
     var current = $(this).children("img").attr("src");
     var a = current.indexOf("(") + 1;
     var b = current.indexOf(")");
     current = current.slice(a,b);
    
     $("#modal-img").html("<img  style='border:2px solid #333333' class='img-fluid-gallery' src='../img/img-gallery-carousel/(" + current + ").jpg'>")
     $("#galleryModal").modal();

 });

 $(".thumbnail-rwd").click(function () {
     var current = $(this).attr("id");
     console.log("current: " + current);
     var lastChar = current.slice(-2);
     console.log(lastChar);
     if (lastChar.startsWith("-")) {
         var finalchar = lastChar.slice(-1);
         console.log("finalchar wielocyfrowy: " + finalchar);
     } else {
         var finalchar = lastChar;
         console.log("finalchar jedno: " + finalchar);
     }


     $("#modal-img").html("<img class='img-fluid-gallery' src='../img/img-gallery-carousel/(" + finalchar + ").jpg'>")
     $("#galleryModal").modal();
 });

 $("#galleryModal").click(function () {
     $("#galleryModal").modal('hide');
 });

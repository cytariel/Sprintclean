//    <!-- skrypt do określania aktywnego linku poprzez dodanie klasy active -->
$(function () {
    var current = location.pathname;
    $('nav li a').each(function () {
        var $this = $(this);
        if ($this.attr('href').indexOf(current) !== -1) {
            $this.addClass('active');
        }
    })
})
//skrypt navbara
var lastScrollTop = 0;
$(window).scroll(function (event) {
    var st = $(this).scrollTop();
    if (st > lastScrollTop) {
        $("nav").slideUp(400);

    } else {
        $("nav").slideDown(400);

    }
    lastScrollTop = st;
});

//skrypt dropdowna
//group1
$(".dropdown-toggle1").mouseover(
    function () {
        $('.dropdown-menu1').slideDown('fast');
    });

$(".dropdown-group1").mouseleave(
    function () {
        $('.dropdown-menu1').slideUp('fast');
    });
//group2
$(".dropdown-toggle2").mouseover(
    function () {
        $('.dropdown-menu2').slideDown('fast');
    });

$(".dropdown-group2").mouseleave(
    function () {
        $('.dropdown-menu2').slideUp('fast');
    });
//skrypt walidacji formularza
function formValidate() {
    var id = "#" + $(event.target).attr('id');
    if ($(id).val() == "") {
        $(id).removeClass("correct");
        $(id).addClass("wrong");
        $(id).next().remove('.mark');
        $(id).after('<i class="fas fa-times mark mark-wrong" ></i>');

    } else if ($(id).val() != "") {
        $(id).removeClass("wrong");
        $(id).addClass("correct");
        $(id).next().remove('.mark');
        $(id).next().remove('.mark')
        $(id).after('<i class="fas fa-check mark mark-ok"></i>');
    }
};
$(function (){
$("#phone").mask("999-999-999");
$("#tele").mask("999-999-999");
     })
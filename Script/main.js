$(function () {
    $('.counter').countUp();
    $('.menu .menu-item').click(function (){
        $('.menu .menu-item').removeClass("active");
        $(this).addClass("active");
    });
});

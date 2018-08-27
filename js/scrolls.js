$(window).scroll(function () {
    var scrollval = $(this).scrollTop();    // It will return scroll value
    $("#menu").css("opacity",scrollval/410)
    $("#waifu").css("transform", 'translateY(-' + scrollval / 2.6 + '%)');
    $("#play_btn").css("transform", 'translate(' + (toScreenSizeX(scrollval * 3.45) - 50) + '%,' + ((scrollval * 3.2) - 50) + '%)');
    $("#next_btn").css("transform", 'translate(' + (toScreenSizeX(scrollval * 3.45) - 50) + '%,' + ((scrollval * 2.8) - 50) + '%)');

});

var toScreenSizeX = function (a) {
    var result = a * ($(window).width() / 1900);
    return result;
}

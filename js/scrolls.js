$(window).scroll(function () {
    let scrollval = $(this).scrollTop();    // It will return scroll value
    $("#menu").css("opacity",scrollval/410);
    $("#player_title").css("opacity",scrollval/410);
    $("#next_btn").css("opacity",scrollval/420);
    $("#play_btn").css("opacity",scrollval/420);
    $("#player").css("opacity",1-scrollval/420);
    $("#linear-gradient").css("opacity",scrollval/420);
    $("#waifu").css("transform", 'translateY(-' + scrollval / 2.75 + '%)');
    $("#play_btn").css("transform", 'translate(' + (toScreenSizeX(scrollval * 3.45) - 50) + '%,' + ((scrollval * 3.2) - 50) + '%)');
    $("#next_btn").css("transform", 'translate(' + (toScreenSizeX(scrollval * 3.45) - 50) + '%,' + ((scrollval * 2.8) - 50) + '%)');
});

let toScreenSizeX = function (a) {
    let result = a * ($(window).width() / 1900);
    return result;
}

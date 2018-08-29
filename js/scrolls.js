$(window).scroll(function () {
    let scrollval = $(this).scrollTop();    // It will return scroll value
    var percent = (document.body.scrollTop + document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
    $("#menu").css("opacity",  percent);
    $("#player_title").css("opacity",  percent);
    $("#player").css("opacity", 1 -  percent);
    $("#linear-gradient").css("opacity",percent);
    $("#waifu").css("transform", 'translateY(-' + scrollval / 2.34 + '%)');
    //$("#next_btn").css("transform", 'translate(' + (toScreenSizeX(scrollval * 3.35) - 50) + '%,' + ((scrollval * 2.8) - 50) + '%)');
});

let toScreenSizeX = function (a) {
    let result = a * ($(window).width() / 1900);
    return result;
}


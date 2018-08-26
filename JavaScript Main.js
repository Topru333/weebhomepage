$(window).scroll(function(){
    var scrollval = $(this).scrollTop();    // It will return scroll value
    $("#waifu").css("transform",'translate(-50%,-' + scrollval/2.3 + '%)');
    $("#play_btn").css("transform",'translate(-50%,'+scrollval*2.5+'%)');

});

var p = document.getElementById ("player");
$(p).hide();

var tag = document.createElement('script');
tag.src = "//www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;

onYouTubeIframeAPIReady = function () {
    player = new YT.Player('player', {
        height: '100%',
        width: '100%',
        videoId: 'W2TE0DjdNqI',  // youtube video id
        playerVars: {
            'autoplay': 0,
            'rel': 0,
            'showinfo': 0,
            'modestbranding': 1,
            'autohide': 1,
            'controls': 0
        },
        events: {
            'onStateChange': onPlayerStateChange
        }
    });
}

onPlayerStateChange = function (event) {
    if (event.data == YT.PlayerState.ENDED) {
        $('.play_button').fadeIn('normal');
    }
}

$(document).on('click', '.play_button', function () {
    $(this).hide();
    $("#player").show();
    player.playVideo();
});

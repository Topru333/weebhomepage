$(window).scroll(function(){
    var scrollval = $(this).scrollTop();    // It will return scroll value

    $("#konata").css("transform",'translate(0px,-'+scrollval/2+'%)');
    $("#play_btn").css("transform",'translate(-50%,'+scrollval/3+'%)');
});

var p = document.getElementById ("video");
$(p).hide();

var t = document.getElementById ("thumbnail");
t.src = "http://img.youtube.com/vi/W2TE0DjdNqI/0.jpg";


var tag = document.createElement('script');
tag.src = "//www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;

onYouTubeIframeAPIReady = function () {
    player = new YT.Player('video', {
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
        $('#play_btn').fadeIn('normal');
    }
}

$(document).on('click', '#play_btn', function () {
    $(this).hide();
    $("#video").show();
    $("#thumbnail_container").hide();
    player.playVideo();
});

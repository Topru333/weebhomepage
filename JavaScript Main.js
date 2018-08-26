$(window).scroll(function(){
    var scrollval = $(this).scrollTop();    // It will return scroll value
    if(scrollval<=500){
      $("#konata").css("transform",'translate(0px,-'+scrollval/2+'%)');
    }
    $("#play_btn").css("transform",'translate(-50%,'+scrollval/3+'%)');
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
        playerId: 'W2TE0DjdNqI',  // youtube player id
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
    player.playplayer();
});

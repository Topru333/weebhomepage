var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;

onYouTubeIframeAPIReady = function () {
    $('#pause_img').hide();
    $('#next_btn').hide();
    document.getElementById( "player_title" ).innerText = "";
    player = new YT.Player('player', {
        height: '100%',
        width: '100%',
        playerVars: {
            'autoplay': 0,
            'rel': 0,
            'showinfo': 0,
            'modestbranding': 1,
            'autohide': 1,
            'controls': 0,
            'listType': 'playlist',
            'list': 'PLZqI45FsecAh9WOKC0LTnyFLd3UjyLiE0'
        },
        suggestedQuality: 'large',
        events: {
            'onStateChange': onPlayerStateChange
        }
    });

}

onPlayerStateChange = function (event) {
    if (event.data == YT.PlayerState.ENDED) {
        player.playVideoAt(newRandomNumber(player.getPlaylist().length));
    }
    document.getElementById( "player_title" ).innerText = player.getVideoData().title;
}

var playing = false;


var ranNumber = -1;

function newRandomNumber(max) {
    let oldNumber = ranNumber;
    ranNumber = Math.floor(Math.random() * max);
    if (ranNumber == oldNumber) {
        newRandomNumber();
    } else {
        return ranNumber;
    }
}

$(document).on('click', '.play_button', function () {
    if (playing) {
        playing = false;
        player.pauseVideo();
        $('#play_img').show();
        $('#next_btn').hide();
        $('#pause_img').hide();
        $("#player_title").hide();
    } else {
        playing = true;
        if(ranNumber==-1){
            player.playVideoAt(newRandomNumber(player.getPlaylist().length));
        }else{
            player.playVideo();
        }
        $("#player_title").show();
        $('#play_img').hide();
        $('#next_btn').show();
        $('#pause_img').show();
    }
});

$(document).on('click', '.next_button', function () {
    if (playing) {
        player.nextVideo();
    }
});



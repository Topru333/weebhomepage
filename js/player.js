let tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
let firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

class Player {
    constructor() {
        $('#pause_img').hide();
        $('#next_btn').hide();
        document.getElementById("player_title").innerText = "";
        this.iframe_player = new YT.Player('player', {
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
        this.playing = false;
        this.ranNumber = -1;
    }

    stateEvent(event) {
        switch (event.data) {
            case YT.PlayerState.ENDED:
                this.iframe_player.playVideoAt(this.newRandomNumber(this.iframe_player.getPlaylist().length));
                $("#player_title").hide();
                break;
            case YT.PlayerState.PLAYING:
                $("#player_title").show();
                break;
            case  YT.PlayerState.PAUSED:
                $("#player_title").hide();
                break;
            default:
                break;
        }
        this.updateTitle();
    }

    updateTitle() {
        let title = this.iframe_player.getVideoData().title;
        if (title.length > 40) {
            title = title.substr(0, 21);
        }
        document.getElementById("player_title").innerText = title;
    }

    newRandomNumber(max) {
        let oldNumber = this.ranNumber;
        this.ranNumber = Math.floor(Math.random() * max);
        if (this.ranNumber == oldNumber) {
            return this.newRandomNumber(max);
        } else {
            return this.ranNumber;
        }
    }

    play() {
        if (this.playing) {
            this.playing = false;
            this.iframe_player.pauseVideo();
            $('#play_img').show();
            $('#next_btn').hide();
            $('#pause_img').hide();
        } else {
            this.playing = true;
            if (this.ranNumber == -1) {
                this.iframe_player.playVideoAt(this.newRandomNumber(this.iframe_player.getPlaylist().length));
            } else {
                this.iframe_player.playVideo();
            }
            $('#play_img').hide();
            $('#next_btn').show();
            $('#pause_img').show();
        }
    }

    next() {
        if (this.playing) {
            this.iframe_player.playVideoAt(this.newRandomNumber(this.iframe_player.getPlaylist().length));
        }
    }
}


let player_class;

onYouTubeIframeAPIReady = function () {
    player_class = new Player();
}

onPlayerStateChange = function (event) {
    player_class.stateEvent(event);
}


$(document).on('click', '.play_button', function () {
    player_class.play();
});

$(document).on('click', '.next_button', function () {
    player_class.next();
});



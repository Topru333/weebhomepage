let tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
let firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

class Player {
    constructor() {
        document.getElementById("player_title").innerText = "";
        this.iframe_player = new YT.Player('video_holder', {
            height: '100%',
            width: '100%',
            playerVars: {
                'rel': 0,
                'playsinline': 1,
                'modestbranding' : 1,
                'listType': 'playlist',
                'list': 'PLZqI45FsecAh9WOKC0LTnyFLd3UjyLiE0'
            },
            suggestedQuality: 'hd1080',
            events: {
                'onStateChange': onPlayerStateChange,
                'onReady': function (event) {
                    setTimeout(function() {
                        event.target.setShuffle({'shufflePlaylist' : true});
                        event.target.playVideoAt(0);
                        event.target.stopVideo()
                    }, 100);
                }
            }
        });
    }

    stateEvent(event) {
        switch (event.data) {
            case YT.PlayerState.ENDED:
                $("#player_title").hide();
                break;
            case YT.PlayerState.PLAYING:
                this.playing = true;
                $("#player_title").show();
                break;
            case  YT.PlayerState.PAUSED:
                this.playing = false;
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

}


let player_class;

onYouTubeIframeAPIReady = () => player_class = new Player();
onPlayerStateChange = (event) =>  player_class.stateEvent(event);









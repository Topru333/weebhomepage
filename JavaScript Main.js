$(window).scroll(function(){
    var scrollval = $(this).scrollTop();    // It will return scroll value

    $("#konata").css("transform",'translate(0px,-'+scrollval/2+'%)');
    $("#btn").css("transform",'translate(-50%,'+scrollval/3+'%)');
});

var tag = document.createElement('script');
tag.src = "//www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;

function onYouTubePlayerAPIReady() {
  // create the global player from the specific iframe (#video)
  player = new YT.Player('video', {
    events: {
      // call this function when player is ready to use
      'onReady': onPlayerReady
    }
  });
}


function onPlayerReady(event) {

  // bind events
  var playButton = document.getElementsByClassName("waifu");
  playButton.addEventListener("click", function() {
    player.playVideo();
  });

}

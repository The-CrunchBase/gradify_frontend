function run(){
  next = "assets/videos/Digital_Grapes.mp4";
  console.log(next);
  videoPlayer = document.getElementById("video-bg").src = next;
  videoPlayer = document.getElementById("video-bg").loop = true;
}

function loading(){
  // Wait for window load
  $(window).load(function() {
    // Animate loader off screen
    $("#loader").animate({
      top: -200
    }, 1500);
  });
}
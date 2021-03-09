function run(){
  next = "assets/videos/Digital.mp4";
  console.log(next);
  videoPlayer = document.getElementById("video-bg").src = next;
  videoPlayer = document.getElementById("video-bg").loop = true;
}

function uppercase() {
  var x = document.getElementById("reg");
  x.value = x.value.toUpperCase();
}
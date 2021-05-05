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

const card = document.getElementById("card");
const circles = document.querySelectorAll(".circle");

document.getElementsByTagName("body")[0].addEventListener("mousemove", (e) => {
  const x = -(e.pageX + e.currentTarget.offsetLeft);
  const y = -(e.pageY + e.currentTarget.offsetTop);

  card.style.transform = `translate3d(${x / 20}px, ${y / 20}px, 0)`;

  Array.from(circles).forEach((circle) => {
    circle.style.transform = `translate3d(${x / 50}px, ${-y / 50}px, 0)`;
  });
});



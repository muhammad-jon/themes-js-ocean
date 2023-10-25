let input = document.getElementById("input");
let btn = document.getElementById("button");
let videos = document.getElementById("videos");
let clearVideos = document.getElementById("clear_videos");

let playlistName = "sevimlilar";

let playlistArr = [];
input.addEventListener("keyup", function (event) {
  if (event.key == "Enter") {
    playlistArr.push(youtube_parser(input.value));
    localStorage.setItem(playlistName, JSON.stringify(playlistArr));
    input.value = "";
  }
  addToUi();
});

if (localStorage.getItem(playlistName)) {
  playlistArr = JSON.parse(localStorage.getItem(playlistName));
}
addToUi();

function youtube_parser(url) {
  var regExp =
    /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  var match = url.match(regExp);
  return match && match[7].length == 11 ? match[7] : false;
}
function addToUi() {
  videos.innerHTML = "";
  playlistArr.map((el) => {
    let video = document.createElement("div");
    let removeButton = document.createElement("button");
    removeButton.textContent = "remove video";
    video.innerHTML = `<iframe
          width="100%" 
          height="100%"
          src="https://www.youtube.com/embed/${el}"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>`;

    video.appendChild(removeButton);
    videos.appendChild(video);
  });
}

clearVideos.addEventListener("click", () => {
  videos.innerHTML = "";
  localStorage.removeItem(playlistName);
});

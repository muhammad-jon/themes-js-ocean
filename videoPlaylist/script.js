const apiKey = "AIzaSyCB_9LAgLfMbZyK0fvtoPEMhD918LRHeHE";
let input = document.getElementById("input");
let btn = document.getElementById("button");
let videos = document.getElementById("videos");
let clearVideos = document.getElementById("clear_videos");

function getVideoName(videoId, i) {
  fetch(
    `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${apiKey}&part=snippet`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const videoInfo = data.items[0].snippet;
      const videoTitle = videoInfo.title;

      console.log("Video nomi:", videoTitle);
      document.querySelector(`div[videoId=${videoId + i}]`).innerText =
        videoTitle;
    })
    .catch((error) => {
      console.error("Xatolik:", error);
    });
}

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
  playlistArr.map((el, i) => {
    let video = document.createElement("div");
    let removeButton = document.createElement("button");
    removeButton.textContent = "remove video";
    video.innerHTML = `<iframe
          
          src="https://www.youtube.com/embed/${el}"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <div videoId=${el + i}></div>
        `;
    getVideoName(el, i);
    video.appendChild(removeButton);
    videos.appendChild(video);
  });
}

clearVideos.addEventListener("click", () => {
  videos.innerHTML = "";
  localStorage.removeItem(playlistName);
});

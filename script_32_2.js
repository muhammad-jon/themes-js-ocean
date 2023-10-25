let playlistName = "myFavouriteVideos";

let playlist = [];

// https://www.youtube.com/watch?v=Bl1FOKpFY2Q

<iframe
  width="1424"
  height="646"
  src="https://www.youtube.com/embed/Bl1FOKpFY2Q"
  title="#7 ReactJS Todo projecti to&#39;liq holati || React Uzbek"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowfullscreen
></iframe>;

// localStorage.getItem(playlistName);

if (localStorage.getItem(playlistName)) {
  playlist = JSON.parse(localStorage.getItem(playlistName));
  console.log(playlist);
}

// JSON.stringify(aaa) // stringga aylantiradi
// JSON.parse(value) // object/arrayga o'tqazadi
function youtube_parser(url) {
  var regExp =
    /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  var match = url.match(regExp);
  return match && match[7].length == 11 ? match[7] : false;
}

function addVideo() {
  playlist.push(youtube_parser(input.value));
  localStorage.setItem(playlistName, JSON.stringify(playlist));
  console.log(playlist);
}

input.addEventListener("keyup", (event) => {
  if (event.key == "Enter") {
    addVideo();
    outToUi();
  }
});

clear.addEventListener("click", () => {
  localStorage.removeItem(playlistName);
  outToUi();
});

function outToUi(videos) {
  document.getElementById("videos").innerHTML = "";
  playlist.map((el) => {
    document.getElementById("videos").innerHTML += `<div>
      <iframe
        width="100%"
        height="300"
        src=https://www.youtube.com/embed/${el}
        title="UMBRELLA | Oscar® Contender and Multi-Award Winning Animated Short Film"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe></div>`;
  });
}

outToUi();

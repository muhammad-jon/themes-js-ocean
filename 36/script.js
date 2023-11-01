// let start = document.querySelector("#start");
// let pause = document.querySelector("#pause");
// let reset = document.querySelector("#reset");
// let header = document.querySelector("h1");

// let hours = 0;
// let minutes = 0;
// let seconds = 0;
// let milliseconds = 0;
// let intervalID;

// start.addEventListener("click", () => {
//   start.style.display = "none";
//   pause.style.display = "inline-block";
//   intervalID = setInterval(showMilliSeconds, 10);
// });
// pause.addEventListener("click", () => {
//   start.style.display = "inline-block";
//   pause.style.display = "none";
//   clearInterval(intervalID);
// });
// reset.onclick = () => {
//   hours = 0;
//   minutes = 0;
//   seconds = 0;
//   milliseconds = 0;
//   showMilliSeconds();
// };
// showMilliSeconds();
// function showMilliSeconds() {
//   if (milliseconds == 100) {
//     seconds++;
//     milliseconds = 0;
//   }
//   if (seconds == 60) {
//     minutes++;
//     seconds = 0;
//   }
//   if (minutes == 60) {
//     hours++;
//     minutes = 0;
//   }
//   header.textContent =
//     hours + ":" + minutes + ":" + seconds + ":" + milliseconds++;
// }

///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////

// let div = document.querySelector("#foo");

// body.style.background = "red";

// div.style.width = "200px";
// div.style.backgroundColor = "white";
// div.style.padding = "30px";

let body = document.querySelector("#root");

let card = document.createElement("div");
card.style.padding = "20px";
card.style.maxWidth = "286px";
card.style.borderRadius = "15px";
card.style.border = "2px solid #606060";

let badgeBtn = document.createElement("button");
badgeBtn.style.border = "2px solid #606060";
badgeBtn.style.background = "#D6ED17";
badgeBtn.style.padding = "8px 20px";
badgeBtn.style.borderRadius = "5px";
badgeBtn.textContent = "Badge";
card.appendChild(badgeBtn);

let cardImage = document.createElement("div");
cardImage.style.borderRadius = "5px";
cardImage.style.height = "190px";
cardImage.style.background =
  "url(https://images.drive.com.au/driveau/image/upload/c_fill,f_auto,g_auto,h_1080,q_auto:eco,w_1920/v1/cms/uploads/imwxqjajhtbjsxz9dspn)";
cardImage.style.backgroundSize = "cover";
cardImage.style.backgroundPosition = "center";
cardImage.style.margin = "10px 0";

card.appendChild(cardImage);

let header = document.createElement("h1");
header.textContent = "CHALLENGER RACE III";
card.appendChild(header);
header.style.fontSize = "20px";
header.style.fontFamily = "Inter";

let info = document.createElement("p");
info.textContent =
  " Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam nihil ad cupiditate cumque, aliquam nobis quas natus, obcaecati molestias maxime labore repellat asperiores facere quos, eos odit expedita sapiente atque!";
card.appendChild(info);
info.style.fontFamily = "Inter";
info.style.margin = "10px 0";

let shareBtn = document.createElement("button");
shareBtn.style.border = "2px solid #606060";
shareBtn.style.background = "#D6ED17";
shareBtn.style.padding = "8px 20px";
shareBtn.style.borderRadius = "5px";
shareBtn.innerHTML = `Share <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-send-fill" viewBox="0 0 16 16">
<path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z"/>
</svg>`;
shareBtn.style.width = "130px";
card.appendChild(shareBtn);

body.appendChild(card);

let input = document.getElementById("input");
const shortUrls = document.querySelector(".short-urls");

let urls = [];
console.log(localStorage.getItem("urls"));

if (localStorage.getItem("urls")) {
  urls = JSON.parse(localStorage.getItem("urls"));
  console.log(urls);
  for (let i = 0; i < urls.length; i++) {
    shortUrls.innerHTML += `<div class="short-url mb-2 border p-2 d-flex align-items-center justify-content-between">
        <h6 class="m-0">${urls[i].url}</h6>
        <div class="d-flex align-items-center justify-content-between">
        <h6 class="m-0"><a href="${urls[i].short}">${urls[i].short}</a> </h6>
        <button onclick="copyContent('${urls[i].short}')" class="ms-4 btn btn-success">Copy</button>
        </div>
        </div>`;
  }
}

function copyContent1(link) {
  navigator.clipboard.writeText(link);
}

async function copyContent(shortUrl) {
  await navigator.clipboard.writeText(shortUrl);
}

async function shortenIt() {
  const url = "https://url-shortener-service.p.rapidapi.com/shorten";
  const options = {
    method: "POST",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "X-RapidAPI-Key": "01be257534msh781515b212f94d6p1ebcacjsn9e7080983ffd",
      "X-RapidAPI-Host": "url-shortener-service.p.rapidapi.com",
    },
    body: new URLSearchParams({
      url: input.value,
    }),
  };
  try {
    let res = "";
    const response = await fetch(url, options);
    if (!response.ok) {
      alert(response.status);
      return;
    }
    const result = await response.json();
    urls.push({
      url: input.value,
      short: result.result_url,
    });

    localStorage.setItem("urls", JSON.stringify(urls));
    console.log(result.result_url);
    res = result.result_url;

    shortUrls.innerHTML += `<div class="short-url mb-2 border p-2 d-flex align-items-center justify-content-between">
    <h6 class="m-0">${input.value}</h6>
    <div class="d-flex align-items-center justify-content-between">
        <h6 class="m-0"><a href="${res}">${res}</a> </h6>
        <button onclick="copyContent('${res}')" class="ms-4 btn btn-success">Copy</button>
    </div>
</div>`;
  } catch (error) {
    console.error(error);
  }
}

input.addEventListener("keyup", (e) => {
  if (e.key == "Enter") {
    shortenIt();
  }
});

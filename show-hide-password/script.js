// let sendBtn = document.getElementById("send-btn");

// sendBtn.addEventListener("click", (event) => {
//   event.preventDefault();
// });

let showPass = true;

showPassword.addEventListener("click", () => {
  eye_open.classList.toggle("hide");
  eye_close.classList.toggle("hide");
  showPass
    ? pass.setAttribute("type", "text")
    : pass.setAttribute("type", "password");
  showPass = !showPass;
});

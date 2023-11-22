let dayNightBtn = document.getElementById("dayNightBtn");
let addBtn = document.querySelector("#addBtn");
let inputField = document.getElementById("inputField");
let todos = document.getElementById("todos");

dayNightBtn.addEventListener("click", () => {
  document.body.classList.toggle("night");
  moon.classList.toggle("none");
  sun.classList.toggle("none");
});
let counter = 1;

function addTTodo() {
  if (inputField.value == "") return;
  todos.innerHTML += `<div class="border p-2 mb-2 d-flex align-items-center justify-content-between">
      <p class="m-0">${counter++ + ") " + inputField.value}</p>
      <button class="btn btn-success">Done</button>
    </div>`;
  inputField.value = "";
}

inputField.addEventListener("keyup", (event) => {
  if (event.key == "Enter") {
    addTTodo();
  }
});

addBtn.addEventListener("click", () => {
  addTTodo();
});

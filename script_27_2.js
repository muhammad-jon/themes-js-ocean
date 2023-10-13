// let input = document.createElement("input");
// root.appendChild(input);

// let div = document.createElement("div");
// div.textContent = "Salom dunyo";

// let className = document.createAttribute("class");
// className.value = "foo";

// div.setAttributeNode(className);

// root.appendChild(div);

let data = [
  {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false,
  },
  {
    userId: 1,
    id: 2,
    title: "quis ut nam facilis et officia qui",
    completed: false,
  },
  {
    userId: 1,
    id: 3,
    title: "fugiat veniam minus",
    completed: true,
  },
  {
    userId: 1,
    id: 4,
    title: "et porro tempora",
    completed: true,
  },
  {
    userId: 1,
    id: 5,
    title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
    completed: true,
  },
  {
    userId: 1,
    id: 6,
    title: "qui ullam ratione quibusdam voluptatem quia omnis",
    completed: true,
  },
  {
    userId: 1,
    id: 7,
    title: "illo expedita consequatur quia in",
    completed: false,
  },
  {
    userId: 1,
    id: 8,
    title: "quo adipisci enim quam ut ab",
    completed: true,
  },
];

let allElements = document.getElementsByTagName("*");

for (let i = 0, len = allElements.length; i < len; i++) {
  let element = allElements[i];
  element.style.padding = "0";
  element.style.margin = "0";
  element.style.boxSizing = "border-box";
}

let root = document.querySelector("#root");
root.style.maxWidth = "600px";
root.style.margin = "0 auto";
let header = document.createElement("h1");
header.textContent = "Todos";
root.appendChild(header);
let paragraph = document.createElement("p");
paragraph.innerText = "Bajariladigan ishlar ro'yxati";
paragraph.style.color = "red";
root.appendChild(paragraph);

let inputGroup = document.createElement("div");
root.appendChild(inputGroup);

let input = document.createElement("input");
input.style.width = "100%";
input.style.padding = "10px";
inputGroup.style.display = "flex";
inputGroup.style.alignItems = "center";
inputGroup.style.justifyContent = "space-between";

inputGroup.style.padding = "10px";

inputGroup.appendChild(input);

let button = document.createElement("button");
button.style.padding = "10px 20px";

button.addEventListener("click", addTodo);

function addTodo() {
  if (input.value == "") {
    alert("Inputga matn yozing");
  } else {
    let newTodo = {
      userId: 1,
      id: data.length + 1,
      title: input.value,
      completed: false,
    };
    data.push(newTodo);
    console.log(data);
    showTodos(data);
    input.value = "";
  }
}

let editing = false;
let editingTodoNumber = null;

button.textContent = "Add";

inputGroup.appendChild(button);

let okButton = document.createElement("button");
okButton.style.padding = "10px 20px";
okButton.textContent = "Done";

okButton.onclick = function () {
  data[editingTodoNumber].title = input.value;
  showTodos(data);
  input.value = "";
  editing = false;
  showAddOrEditButton();
};
showAddOrEditButton();

inputGroup.appendChild(okButton);

let ul = document.createElement("ul");
root.appendChild(ul);

function showTodos(todos) {
  ul.innerHTML = "";
  ul.style.listStyle = "none";
  ul.style.padding = "0";

  for (let i = 0; i < todos.length; i++) {
    let li = document.createElement("li");
    li.style.textDecoration = `${todos[i].completed ? "line-through" : ""}`;
    li.style.backgroundColor = "lightgray";
    li.style.display = "flex";
    li.style.alignItems = "center";
    li.style.justifyContent = "space-between";
    li.style.marginBottom = "5px";
    li.style.padding = "10px";
    let div = document.createElement("div");
    div.textContent = data[i].title;
    li.appendChild(div);

    div.addEventListener("click", function () {
      data[i].completed = !todos[i].completed;
      li.style.textDecoration = `${todos[i].completed ? "line-through" : ""}`;
      console.log(data);
    });

    let div2 = document.createElement("div");
    let edit = document.createElement("button");
    edit.style.backgroundColor = "green";
    edit.style.padding = "10px 20px";
    let del = document.createElement("button");
    del.style.backgroundColor = "red";
    del.style.padding = "10px 20px";
    edit.textContent = "Edit";

    edit.addEventListener("click", function () {
      editingTodoNumber = i;
      input.value = todos[i].title;
      editing = true;
      showAddOrEditButton();
    });

    del.textContent = "Delete";

    del.onclick = function () {
      // console.log(this.parentNode.parentNode);
      this.parentNode.parentNode.remove();
    };

    div2.appendChild(edit);
    div2.appendChild(del);
    li.appendChild(div2);
    ul.appendChild(li);
  }
}

showTodos(data);

function showAddOrEditButton() {
  button.style.display = `${editing ? "none" : ""}`;
  okButton.style.display = `${editing ? "" : "none"}`;
}

// let obj = {
//   num: 45,
//   num2: 65,
//   add: function () {
//     return this.num + this.num2;
//   },
// };

// console.log(obj.add());

// header.addEventListener("click", addTodo);

// createElement() // element yaratish
// appendChild() // bola qo'shish
// addEventListener() //

// document.querySelector("#push").onclick = function () {
//   if (document.querySelector("#newtask input").value.length == 0) {
//     alert("Please Enter a Task");
//   } else {
//     document.querySelector("#tasks").innerHTML += `
//             <div class="task">
//                 <span id="taskname">
//                     ${document.querySelector("#newtask input").value}
//                 </span>
//                 <button class="delete">
//                     <i class="far fa-trash-alt"></i>
//                 </button>
//             </div>
//         `;

//     let current_tasks = document.querySelectorAll(".delete");
//     for (let i = 0; i < current_tasks.length; i++) {
//       current_tasks[i].onclick = function () {
//         this.parentNode.remove();
//       };
//     }

//     let tasks = document.querySelectorAll(".task");
//     for (let i = 0; i < tasks.length; i++) {
//       tasks[i].onclick = function () {
//         this.classList.toggle("completed");
//       };
//     }

//     document.querySelector("#newtask input").value = "";
//   }
// };

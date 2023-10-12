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
    completed: false,
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
    completed: false,
  },
  {
    userId: 1,
    id: 6,
    title: "qui ullam ratione quibusdam voluptatem quia omnis",
    completed: false,
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

var allElements = document.getElementsByTagName("*");

for (var i = 0, len = allElements.length; i < len; i++) {
  var element = allElements[i];
  element.style.padding = "0";
  element.style.margin = "0";
  element.style.boxSizing = "border-box";
}

let root = document.querySelector("#root");

let header = document.createElement("h1");
header.textContent = "Todos";
root.appendChild(header);
let paragraph = document.createElement("p");
paragraph.textContent = "Bajariladigan ishlar ro'yxati";
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

button.textContent = "Add";
inputGroup.appendChild(button);
let ul = document.createElement("ul");
root.appendChild(ul);

function showTodos(todos) {
  ul.innerHTML = "";
  ul.style.listStyle = "none";
  ul.style.padding = "0";

  for (let i = 0; i < todos.length; i++) {
    let li = document.createElement("li");
    li.style.backgroundColor = "lightgray";
    li.style.display = "flex";
    li.style.alignItems = "center";
    li.style.justifyContent = "space-between";
    li.style.marginBottom = "5px";
    li.style.padding = "10px";

    let div = document.createElement("div");
    div.textContent = data[i].title;
    li.appendChild(div);
    let div2 = document.createElement("div");
    let edit = document.createElement("button");
    edit.style.backgroundColor = "green";
    edit.style.padding = "10px 20px";
    let del = document.createElement("button");
    del.style.backgroundColor = "red";
    del.style.padding = "10px 20px";
    edit.textContent = "Edit";
    del.textContent = "Delete";
    div2.appendChild(edit);
    div2.appendChild(del);
    li.appendChild(div2);
    ul.appendChild(li);
  }
}

showTodos(data);

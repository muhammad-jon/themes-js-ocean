let todosData = [
  {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: true,
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

function menu() {
  finish: while (true) {
    let menuId = +prompt(
      `1. Ishlar ro'yxati \n2. Bajarilmagan ishlar ro'yxati\n3. Tugallangan ishlar ro'yxati \n0. Chiqish`
    )[0];
    switch (menuId) {
      case 1:
        alert(getTodoList(todosData));
        break;
      case 2:
        unfinishedTodos(todosData);
      case 3:
        finishedTodos(todosData);
      case 0:
        break finish;
    }
  }
}
menu();

function getTodoList(todos) {
  let list = "";
  for (let i = 0; i < todos.length; i++) {
    list += "ID: " + todos[i].id + " | " + todos[i].title + "\n";
  }
  return list;
}
function unfinishedTodos(todos) {
  let unfinished = todos.filter((el) => {
    return el.completed === false;
  });
  let todoId = +prompt(
    getTodoList(unfinished) +
      "\nBajarilganligini o'zgartirish uchun id sini kiriting:"
  );
  for (let i = 0; i < todosData.length; i++) {
    if (todosData[i].id == todoId) {
      todosData[i].completed = confirm("Bajarildimi?");
    }
  }
  menu();
}
function finishedTodos(todos) {
  let finished = todos.filter((el) => el.completed === true);
  alert(getTodoList(finished));
  menu();
}
function addTodo() {}
function editTodo() {}
function deleteTodo() {}

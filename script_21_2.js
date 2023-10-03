let questions = [
  {
    question: " Piyoz taom adabiy tilda nima bo'ladi?",
    variants: ["tuxumbarak", "jarkob", "delfinni panjasidan qaynatma", "tuxum"],
    correctAnswer: "jarkob",
  },
  {
    question: " Dengiz nimasdaur ovqat adabiy tilda nima bo'ladi?",
    variants: ["tuxumbarak", "jarkob", "delfinni panjasidan qaynatma", "tuxum"],
    correctAnswer: "delfinni panjasidan qaynatma",
  },
  {
    question: " Yumurtqa adabiy tilda nima bo'ladi?",
    variants: ["tuxumbarak", "jarkob", "delfinni panjasidan qaynatma", "tuxum"],
    correctAnswer: "tuxum",
  },
];
stopApp: while (true) {
  let menu = +prompt(
    "1. Testni boshlash \n2. Testni tahrirlash \n3.Test qo'shish \n4.Test o'chirish\n5. Savollar\n0. Chiqish"
  );
  switch (menu) {
    case 1:
      let newRandomisedQuestions = Array.from(
        getRandomisedQuestions(questions)
      );
      startTest(newRandomisedQuestions);
      break;
    case 2:
      editTest(questions);
      break;
    case 3:
      addTest();
      break;
    case 4:
      deleteTest(questions);
      break;
    case 5:
      alert("Savollar\n" + getQuestionsList(questions));
      break;
    case 0:
      break stopApp;
    default:
      break;
  }
}

function editTest(questions) {
  let n = prompt(
    "Tahrirlamochi bo'lgan testni raqamini kiriting\n" +
      getQuestionsList(questions)
  );
  questions[n - 1] = {
    question: prompt("Savolni kiriting: ", questions[n - 1].question),
    variants: [
      prompt("a) variatni kiriting: ", questions[n - 1].variants[0]),
      prompt("b) variatni kiriting: ", questions[n - 1].variants[1]),
      prompt("c) variatni kiriting: ", questions[n - 1].variants[2]),
      prompt("d) variatni kiriting: ", questions[n - 1].variants[3]),
    ],
    correctAnswer: prompt("to'g'ri javob: ", questions[n - 1].correctAnswer),
  };
  alert(getQuestionsList(questions));
}

function getQuestionsList(savollar) {
  let list = "";
  for (let i = 0; i < savollar.length; i++) {
    list += i + 1 + savollar[i].question + "\n";
  }
  return list;
}

function deleteTest(savollar) {
  let n = prompt(
    "O'chirmoqchi bo'lgan testni raqamini kiriting\n" +
      getQuestionsList(savollar)
  );
  let newArr = savollar.filter((el, index) => {
    if (index != n - 1) return el;
  });
  questions = newArr;
}

function getRandomisedQuestions(questions) {
  let randomisedQuestions = new Set();

  do {
    let randomisedIndex = Math.floor(Math.random() * questions.length);
    randomisedQuestions.add(questions[randomisedIndex]);
  } while (randomisedQuestions.size != questions.length);

  //   for (let i = 0; i < questions.length; i++) {
  //     let randomisedIndex = Math.floor(Math.random() * questions.length);
  //     randomisedQuestions.add(questions[randomisedIndex]);
  //   }

  return randomisedQuestions;
}

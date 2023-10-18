let data = {
  module: {
    number: 1,
    name: "Mixed",
    questions: 10,
    revision: "2023-10-18",
  },
  questions: [
    {
      number: 1,
      question: "Eighteen thousandths, written as a decimal, is:",
      answers: ["0.0018", "0.018", "0.18", "1.8"],
      correct_answer: "0.0018",
    },
    {
      number: 2,
      question: "The next number in the sequence <b>1, 3, 6, 10, </b> is:",
      answers: ["12", "13", "14", "15"],
      correct_answer: "15",
    },
    {
      number: 3,
      question: "What is 7 multiplied by 9?",
      answers: ["56", "63", "72", "81"],
      correct_answer: "63",
    },
    {
      number: 4,
      question: "What is the square root of 144?",
      answers: ["12", "14", "16", "18"],
      correct_answer: "12",
    },
    {
      number: 5,
      question: "Which planet is known as the Red Planet?",
      answers: ["Earth", "Jupiter", "Mars", "Venus"],
      correct_answer: "Mars",
    },
    {
      number: 6,
      question: "What is the capital of France?",
      answers: ["Berlin", "London", "Madrid", "Paris"],
      correct_answer: "Paris",
    },
    {
      number: 7,
      question: "What is the largest mammal in the world?",
      answers: ["African Elephant", "Blue Whale", "Giraffe", "Lion"],
      correct_answer: "Blue Whale",
    },
    {
      number: 8,
      question: "Which gas do plants absorb from the atmosphere?",
      answers: ["Carbon Dioxide", "Oxygen", "Nitrogen", "Methane"],
      correct_answer: "Carbon Dioxide",
    },
    {
      number: 9,
      question: "What is the largest organ in the human body?",
      answers: ["Brain", "Heart", "Liver", "Skin"],
      correct_answer: "Skin",
    },
    {
      number: 10,
      question: "Which gas makes up the majority of Earth's atmosphere?",
      answers: ["Carbon Dioxide", "Oxygen", "Nitrogen", "Argon"],
      correct_answer: "Nitrogen",
    },
  ],
};

stop: while (true) {
  let menu = [
    "1. Testni boshlash",
    "2. Testni tahrirlash",
    "3. Testni qo'shish",
    "4. Testni o'chirish",
    "0. Chiqish",
  ];
  let n = +prompt(menu.join("\n"));
  switch (n) {
    case 1:
      startTest(data.questions);
      break;
    case 2:
      editTest(data.questions);
      break;
    case 3:
      addTest(data.questions);
      break;
    case 4:
      deleteTest(data.questions);
      break;
    case 0:
      break stop;
    default:
      alert("Menyudagi sonlardan birini tanlang");
  }
}

function startTest(questions) {}
function editTest(questions) {}
function addTest(questions) {}
function deleteTest(questions) {}

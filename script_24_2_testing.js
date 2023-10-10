let userName = document.querySelector("h1");
let question = document.querySelector(".question_text");
let answers = document.querySelectorAll(".answer");

userName.textContent = prompt("Ismingiz");

let savollar = [
  {
    question: " Piyoz taom adabiy tilda nima bo'ladi?",
    variants: ["tuxumbarak", "jarkob", "delfinni panjasidan qaynatma", "tuxum"],
    correctAnswer: "jarkob",
  },
  {
    question: " Dengiz nimasdaur ovqat adabiy tilda nima bo'ladi?",
    variants: ["fdsgs", "jarkob", "delfinni fsdafgdsg qaynatma", "tuxum"],
    correctAnswer: "delfinni panjasidan qaynatma",
  },
  {
    question: " Yumurtqa adabiy tilda nima bo'ladi?",
    variants: ["fds", "gfdg", "delfinni panjasidan qaynatma", "fds"],
    correctAnswer: "tuxum",
  },
];

let currentTest = 0;

function nextTest() {
  if (currentTest == savollar.length - 1) currentTest = savollar.length - 1;
  else currentTest++;
  generateTest(currentTest);
  clearChecked();
}
function prevText() {
  if (currentTest == 0) currentTest = 0;
  else currentTest--;
  generateTest(currentTest);
  clearChecked();
}

function generateTest(k) {
  question.textContent = `${currentTest + 1}` + savollar[k].question;
  for (let i = 0; i < answers.length; i++) {
    answers[i].textContent = savollar[k].variants[i];
  }
}
generateTest(currentTest);

function clearChecked() {
  let inputs = document.querySelectorAll("input");
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].checked = false;
  }
}

/// testing app

// questions = [1,2,3,4,5,6,7]
let questions = [
  {
    question: " Kartoshkadan taom adabiy tilda nima bo'ladi?",
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

let counter = 0;

function toVariant(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = String.fromCharCode(65 + i) + ") " + arr[i];
  }
  return arr;
}

for (let i = 0; i < questions.length; i++) {
  let userAnswer = prompt(
    1 +
      ")" +
      questions[i].question +
      "\n" +
      toVariant(questions[i].variants).join("\n")
  );
  if (userAnswer == questions[i].correctAnswer) {
    counter++;
  }
}

alert("Siz : " + counter + " ta savolga to'g'ri javob berdiongiz");

/////////////////////////////////////////////////////

// let questions = [
//   {
//     question: "Yumurtqa adabiy tilda nima bo`ladi",
//     variants: ["tuxum", "shashlik", "jarkob", "shakar"],
//     correctAnswer: "tuxum",
//   },

//   {
//     question: "Kartoshkadan taom tilda nima bo`ladi",
//     variants: ["padjarka", "kabob", "qovurma", "lays"],
//     correctAnswer: "padjarka",
//   },

//   {
//     question: "Dengiz nimasidandur ovqat nima bo`ladi",
//     variants: ["baliq", "akula", "ilon", "toshbaqa"],
//     correctAnswer: "baliq",
//   },
// ];

// let counter = 0;

// function toVariant(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     arr[i] = String.fromCharCode(65 + i) + ") " + arr[i];
//   }
//   return arr;
// }

// for (let i = 0; i < questions.length; i++) {
//   let userAnswer = prompt(
//     1 +
//       ") " +
//       questions[i].question +
//       "\n" +
//       toVariant(questions[i].variants).join("\n")
//   );

//   if (userAnswer.variants == questions[i].correctAnswer.toVariant) {
//     counter++;
//   }
// }

// alert("Siz: " + counter + " ta savolga to`g`ri javob berdingiz");

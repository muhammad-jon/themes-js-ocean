// "use strict";

// let data = {
//   module: {
//     number: 1,
//     name: "Mixed",
//     questions: 10,
//     revision: "2023-10-18",
//   },
//   questions: [
//     {
//       number: 1,
//       question: "Eighteen thousandths, written as a decimal, is:",
//       answers: ["0.0018", "0.018", "0.18", "1.8"],
//       correct_answer: "0.0018",
//     },
//     {
//       number: 2,
//       question: "The next number in the sequence <b>1, 3, 6, 10, </b> is:",
//       answers: ["12", "13", "14", "15"],
//       correct_answer: "15",
//     },
//     {
//       number: 3,
//       question: "What is 7 multiplied by 9?",
//       answers: ["56", "63", "72", "81"],
//       correct_answer: "63",
//     },
//     {
//       number: 4,
//       question: "What is the square root of 144?",
//       answers: ["12", "14", "16", "18"],
//       correct_answer: "12",
//     },
//     {
//       number: 5,
//       question: "Which planet is known as the Red Planet?",
//       answers: ["Earth", "Jupiter", "Mars", "Venus"],
//       correct_answer: "Mars",
//     },
//     {
//       number: 6,
//       question: "What is the capital of France?",
//       answers: ["Berlin", "London", "Madrid", "Paris"],
//       correct_answer: "Paris",
//     },
//     {
//       number: 7,
//       question: "What is the largest mammal in the world?",
//       answers: ["African Elephant", "Blue Whale", "Giraffe", "Lion"],
//       correct_answer: "Blue Whale",
//     },
//     {
//       number: 8,
//       question: "Which gas do plants absorb from the atmosphere?",
//       answers: ["Carbon Dioxide", "Oxygen", "Nitrogen", "Methane"],
//       correct_answer: "Carbon Dioxide",
//     },
//     {
//       number: 9,
//       question: "What is the largest organ in the human body?",
//       answers: ["Brain", "Heart", "Liver", "Skin"],
//       correct_answer: "Skin",
//     },
//     {
//       number: 10,
//       question: "Which gas makes up the majority of Earth's atmosphere?",
//       answers: ["Carbon Dioxide", "Oxygen", "Nitrogen", "Argon"],
//       correct_answer: "Nitrogen",
//     },
//   ],
// };

// stop: while (true) {
//   let menu = [
//     "1. Testni boshlash",
//     "2. Testni tahrirlash",
//     "3. Testni qo'shish",
//     "4. Testni o'chirish",
//     "5. Testlar ro'yxati",
//     "0. Chiqish",
//   ];
//   let n = +prompt(menu.join("\n"));
//   switch (n) {
//     case 1:
//       startTest(data.questions);
//       break;
//     case 2:
//       editTest(data.questions);
//       break;
//     case 3:
//       addTest(data.questions);
//       break;
//     case 4:
//       deleteTest(data.questions);
//       break;
//     case 5:
//       let n = prompt(getQuestionsList(data.questions));
//       if (n) {
//         alert(
//           "Savol " +
//             data.questions[n - 1].question +
//             "\n" +
//             "Javoblar " +
//             data.questions[n - 1].answers +
//             "\n" +
//             "To'g'ri javob " +
//             data.questions[n - 1].correct_answer
//         );
//       }
//       break;
//     case 0:
//       break stop;
//     default:
//       alert("Menyudagi sonlardan birini tanlang");
//   }
// }

// function getQuestionsList(questions) {
//   let list = "";
//   for (let index = 0; index < questions.length; index++) {
//     list += index + 1 + ") " + questions[index].question + "\n";
//   }
//   return list;
// }

// function startTest(questions) {}

// function editTest(questions) {
//   let n = +prompt(
//     "Tahrirlamoqchi bo'lgan savol raqamini kiriting\n\n" +
//       getQuestionsList(questions)
//   );
//   questions[n - 1].question = prompt(
//     "Savolini o'zgaritiring",
//     questions[n - 1].question
//   );
//   [...questions[n - 1].answers] = [
//     prompt("a:", questions[n - 1].answers[0]),
//     prompt("b:", questions[n - 1].answers[1]),
//     prompt("c:", questions[n - 1].answers[2]),
//     prompt("d:", questions[n - 1].answers[3]),
//   ];
//   questions[n - 1].correct_answer = prompt(
//     "To'g'ri javob: ",
//     questions[n - 1].correct_answer
//   );
//   alert("Muvoffaqiyatli tahrirlandi");
// }

// function addTest(questions) {
//   const question = prompt("Savolni kiriting: ");
//   const a = prompt("1-varianti kiriting: ");
//   const b = prompt("2-varianti kiriting: ");
//   const c = prompt("3-varianti kiriting: ");
//   const d = prompt("4-varianti kiriting: ");
//   const correct_answer = prompt("To'g'ri javobi kiriting");

//   const quizItem = {
//     number: questions.length + 1,
//     question: question,
//     answers: [a, b, c, d],
//     correct_answer: correct_answer,
//   };
//   questions.push(quizItem);
//   alert("Savolingiz qo'shildi!!!");
// }

// function deleteTest(questions) {
//   let n = +prompt(
//     "O'chirmoqchi bo'lgan savol raqamini kiriting\n\n" +
//       getQuestionsList(questions)
//   );
//   questions.splice(n - 1, 1);
//   alert(n + "-Savol o'chirildi");
// }

// foo = "Bu yerda stict mode ";

// console.log(foo);

let text =
  "Salom Idunyo lorem\nIpsum dollor sitta maeit\nIpsum dollor sitta maei\nIpsum dollor sitta maeit\nIpsum dollor sitta maeit\nIpsum dollor sitta maeit\n";

let n = text.match(/Ipsum/gim);

console.log(n);

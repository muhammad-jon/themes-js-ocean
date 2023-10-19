let questions = [
  {
    question: "Quyidagilarning qaysi biri  yuqoriroq yuridik kuchga ega?",
    variants: [
      "Qonun",
      "Vazirlar Mahkamsi qarori",
      "Konstitsiya",
      "Prezident farmoni",
    ],
    correctAnswer: "Konstitsiya",
  },
  {
    question: "Pulning qaysi vazifasi narxning shakllanishi bilan bog’liq?",
    variants: [
      "Qiymat o'lchovi",
      "Jamg'arma vositasi",
      "To'lov vositasi",
      "Muomala vositasi",
    ],
    correctAnswer: "Qiymat o'lchovi",
  },
  {
    question: "Axborot komunikatsiya texnologiyasi berilgan qatorni belgilang?",
    variants: ["Kompyuter", "Suv", "Havo", "Yulduz"],
    correctAnswer: "Kompyuter",
  },
  {
    question: "Eng katta juft soni belgilang?",
    variants: ["10", "44", "999", "77"],
    correctAnswer: "44",
  },
  {
    question: "Juft sonlar qatorini toping?",
    variants: ["17", "18", "21", "55"],
    correctAnswer: "18",
  },
  {
    question: "Toq soni toping?",
    variants: ["16", "15", "18", "20"],
    correctAnswer: "15",
  },
  {
    question: "Keng katta soni belgilang?",
    variants: ["12", "21", "15", "51"],
    correctAnswer: "51",
  },
  {
    question: "Qushlarni toping?",
    variants: ["Yaguar", "Laylak", "Toshbaqa", "Baliq"],
    correctAnswer: "Laylak",
  },
  {
    question: "Sonlarni toping?",
    variants: ["Yaguar", "55", "Toshbaqa", "Baliq"],
    correctAnswer: "55",
  },
  {
    question: "Quyidagilardan qaysi biri insoniyat tomonidan yaratilgan ?",
    variants: ["Yaguar", "Robit", "Toshbaqa", "Baliq"],
    correctAnswer: "Robit",
  },
];

// document.addEventListener("contextmenu", function (e) {
//   e.preventDefault();
// });

// document.onkeydown = (e) => {
//   if (e.key == 123) {
//     e.preventDefault();
//   }
//   if (e.ctrlKey && e.shiftKey && e.key.toUpperCase() == "I") {
//     e.preventDefault();
//   }
//   if (e.metaKey && e.shiftKey && e.key.toUpperCase() == "C") {
//     e.preventDefault();
//   }
//   if (e.ctrlKey && e.shiftKey && e.key.toUpperCase() == "C") {
//     e.preventDefault();
//   }
//   if (e.ctrlKey && e.shiftKey && e.key.toUpperCase() == "J") {
//     e.preventDefault();
//   }
//   if (e.ctrlKey && e.key.toUpperCase() == "U") {
//     e.preventDefault();
//   }
// };

let beat = new Audio("./emergency.mp3");
beat.autoplay = true;

let countLeaves = 0;
document.addEventListener("visibilitychange", (e) => {
  if (document.visibilityState === "visible") {
    console.log("user kirdi");
    beat.pause();
  } else {
    countLeaves++;
    beat.play();
    // alert("Boshqa sitega o'tishga harakat qilinmoqda");
  }
});

let IELTS = 1;
let stopApp = true;
let ismingiz = null;
while (stopApp) {
  let a = +prompt(
    "1.Testni boshlash \n 2.Testni tahrirlash \n 3.Savollar ro'yxati\n 4.Chet tilini bilish sertifikatini qo'shish\n 5.O'chirish\n 6.Savol qo'shish\n 0.Chiqish"
  );

  switch (a) {
    case 1:
      ismingiz = prompt("Ismingizni kiriting:");
      startTest(questions);
      break;
    case 2:
      let password = prompt("Parolni kiriting: ", "admin");
      if (password == "admin") editTest(questions);
      break;
    case 3:
      let n = prompt(getQuestionsList(questions));
      if (n) {
        alert(
          "Savol " +
            questions[n - 1].question +
            "\n" +
            "Javoblar " +
            questions[n - 1].variants +
            "\n" +
            "To'g'ri javobi " +
            questions[n - 1].correctAnswer
        );
      }
      // alert("Savollar ro'yxati: \n" + getQuestionsList(questions));

      break;
    case 4:
      let SertifikatRaqami = prompt("Setifikat raqamini kiriting: ", "uzb/32");

      if (SertifikatRaqami == "uzb/32") {
        IELTS = 1.3;
      }
      break;
    case 5:
      deleteTest(questions);
      break;
    case 6:
      addTest(questions);
      break;
    case 0:
      stopApp = false;
      break;
    default:
      alert("Menyudagi sonlardan birini tanlang!");
  }
}
// function randonTest(questions) {
// for (let i = 0; i < questions.length; i++) {
//   let randomIndex = Math.floor(Math.random() * questions.length);
//   questions[randomIndex];
//   console.log(questions[randomIndex]);
// }
// return randomIndex;
// }
function toVariant(arr) {
  let newArr = arr.map((el, i) => {
    return String.fromCharCode(65 + i) + ") " + el;
  });

  return newArr;
}

function randomisedQuestions(data) {
  let randomisedQuestionsSet = new Set();
  let randomised = [];
  let sttt = 0;
  here: while (true) {
    let index = Math.floor(Math.random() * data.length);

    randomisedQuestionsSet.add(data[index]);
    sttt++;
    if (randomisedQuestionsSet.size == data.length) {
      randomised = Array.from(randomisedQuestionsSet);
      break here;
    }
  }
  return randomised;
}

// let randomised = randomisedQuestions(questions);

function startTest() {
  let randomised = randomisedQuestions(questions);
  const startTime = new Date();
  let counter = 0;

  for (let i = 0; i < randomised.length; i++) {
    // console.log(Math.floor(Math.random() * randomised[i].variants.length));
    let randomVariants = randomisedQuestions(randomised[i].variants);
    console.log(randomVariants);
    let userAnswer = prompt(
      i +
        1 +
        ") " +
        randomised[i].question +
        "\n" +
        toVariant(randomVariants).join("\n")
    );
    let n = userAnswer.toLowerCase().charCodeAt(0) - 97;
    //                  51 === 51
    if (randomVariants[n] == randomised[i].correctAnswer) {
      ++counter;
    }
    if (n >= 4 && n < 0) {
      alert("Mavjud bo'lmagan variantni tanladingiz!");
      i--;
    }
  }

  const endTime = new Date();
  const sarflanganVaqt = endTime - startTime;
  const message =
    ismingiz +
    ", siz: " +
    counter +
    " ta savolga to`g`ri javob berdingiz" +
    "\n" +
    "Siz testdan olgan ballingiz: " +
    counter * 2.5 +
    " ball" +
    "\n" +
    "Sizda mavjud imtiyoz indeksi: " +
    IELTS +
    "\n" +
    "Sizning ummumiy to'plagan ballingiz: " +
    counter * 2.5 * IELTS +
    " ball" +
    "\n" +
    "Testni ishlash uchun ketgan vaqt: " +
    sarflanganVaqt +
    " ms";

  alert(message);

  const token = "6153004101:AAF4BHnvCWDASaIWkbFlfEULxnLrQyjEiOA";
  const chatId = "5006278841";

  fetch(
    `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${message}`
  )
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
}

function getQuestionsList(questions) {
  let questionsLest = "";
  for (let i = 0; i < questions.length; i++) {
    questionsLest += i + 1 + questions[i].question + "\n";
  }
  return questionsLest;
}

// Savolni taxrirlash funksiyasi
function editTest(questions) {
  let questionsLest =
    "Taxrirlamoqchi bo'lgan savolni raqamini kiriting:\n" +
    getQuestionsList(questions);

  let editIndext = +prompt(questionsLest);
  questions[editIndext - 1] = {
    question: prompt("Savolni kiriting: ", questions[editIndext - 1].question),
    variants: [
      prompt("a) variantni kiriting: ", questions[editIndext - 1].variants[0]),
      prompt("b) variantni kiriting: ", questions[editIndext - 1].variants[1]),
      prompt("c) variantni kiriting: ", questions[editIndext - 1].variants[2]),
      prompt("d) variantni kiriting: ", questions[editIndext - 1].variants[3]),
    ],
    correctAnswer: prompt(
      "To'g'ri javobni kiriting",
      questions[editIndext - 1].correctAnswer
    ),
  };
}
function deleteTest(data) {
  // let questionNumber = +prompt(
  //   "O'chirmoqchi bo'lgan savolni raqamini kiriting:\n" + getQuestionsList(data)
  // );

  // let newArr = data.filter((el, index) => index + 1 != questionNumber);
  // questions = newArr;
  let n = +prompt(
    "O'chirmoqchi bo'lgan savolni raqamini kiriting:\n" + getQuestionsList(data)
  );
  questions.splice(n - 1, 1);
  alert(n + "-Savol o'chirildi");
}
function addTest(data) {
  // let questionsLest =
  //   "Taxrirlamoqchi bo'lgan savolni raqamini kiriting:\n" +
  //   getQuestionsList(questions);

  const question = prompt("Savol kiriting");
  const a = prompt("a) variantni kiriting: ");
  const b = prompt("b) variantni kiriting: ");
  const c = prompt("c) variantni kiriting: ");
  const d = prompt("d) variantni kiriting: ");
  const correctAnswer = prompt("To'g'ri javobni kiriting");
  const quizItem = {
    number: questions.length + 1,
    question: question,
    variants: [a, b, c, d],
    correctAnswer: correctAnswer,
  };
  questions.push(quizItem);
  alert("Savol qo'shildi!");
}

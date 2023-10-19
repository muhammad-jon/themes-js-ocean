const questions = [
  {
    number: 1,
    question: "JavaScript (JS) tilida natija qanday konsolga chiqariladi?",
    answers: ["print()", "console.log()", "output()", "show()"],
    correct_answer: "console.log()",
  },
  {
    number: 2,
    question:
      "JavaScript dasturlash tili qanday qatorlar (statements) yordamida bajariladi?",
    answers: [
      "Ixtiyori kalit so'zlar bilan",
      "E'tibor so'zlar bilan",
      "Agar-shart operatori bilan",
      "Qatorni yakunlaydigan nukta bilan",
    ],
    correct_answer: "E'tibor so'zlar bilan",
  },
  {
    number: 3,
    question: "JavaScriptda dastur sintaksi qanday tuziladi?",
    answers: [
      "Qattiq qoidalar bo'yicha",
      "So'zlar tuzilishi",
      "Qattiq ko'nikmalar",
      "Barchasi to'g'ri",
    ],
    correct_answer: "Qattiq qoidalar bo'yicha",
  },
  {
    number: 4,
    question: "JavaScriptda izohlarni qanday yozish mumkin?",
    answers: ["// va /* */", "# va ##", "-- va ++", "/* */ va <>"],
    correct_answer: "// va /* */",
  },
  {
    number: 5,
    question: "JavaScriptda o'zgaruvchilar qanday e'lon qilinadi?",
    answers: [
      "let, var, const",
      "variable, var, let",
      "x, y, z",
      "const, function, if",
    ],
    correct_answer: "let, var, const",
  },
  {
    number: 6,
    question: "\"let\" orqali o'zgaruvchi qanday e'lon qilinadi JavaScriptda?",
    answers: [
      '"let a = 10;"',
      '"variable x = 5;"',
      '"const y = 3;"',
      '"let(a) = 7;"',
    ],
    correct_answer: '"let a = 10;"',
  },
  {
    number: 7,
    question: 'JavaScriptda "const" o\'zgaruvchilar nima uchun ishlatiladi?',
    answers: [
      "O'zgaruvchi qiymatini o'zgartirish uchun",
      "O'zgarmas qiymatni o'zlashtirish uchun",
      "O'zgaruvchini o'z ichiga oladigan qurilmalar uchun",
      "O'zgaruvchini o'z ichiga olish uchun",
    ],
    correct_answer: "O'zgarmas qiymatni o'zlashtirish uchun",
  },
  {
    number: 8,
    question: 'JavaScriptda "===" operatori qanday ishlaydi?',
    answers: [
      "Tenglikni tekshirish uchun",
      "Teng emasligni tekshirish uchun",
      "Katta yoki tenglikni tekshirish uchun",
      "Katta yoki tenglikni tekshirish uchun",
    ],
    correct_answer: "Tenglikni tekshirish uchun",
  },
  {
    number: 9,
    question: "JavaScriptda o'rtacha arifmetik amallar nima uchun ishlatiladi?",
    answers: [
      "Matnlarni yasash uchun",
      "Raqamlar ustida arifmetik amallar bajarish uchun",
      "Matnlarni almashtirish uchun",
      "Kiritilgan matnni qatorlarga bo'lish uchun",
    ],
    correct_answer: "Raqamlar ustida arifmetik amallar bajarish uchun",
  },
  {
    number: 10,
    question: '"x += 5;" natijasi nima bo\'ladi?',
    answers: [
      "x ning qiymati 5 ga oshiriladi",
      "x ni 5 ga bo'lgan yig'indisiga o'zlashtiradi",
      "x ni 5 ga bo'lgan ko'paytmasiga o'zlashtiradi",
      "x qiymatini 5 ga ko'paytiradi",
    ],
    correct_answer: "x ning qiymati 5 ga oshiriladi",
  },
  {
    number: 11,
    question: "JavaScriptda nechta ma'lumot turi mavjud?",
    answers: ["1 ta", "4 ta", "6 ta", "8 ta"],
    correct_answer: "8 ta",
  },
  {
    number: 12,
    question: "JavaScriptda funksiya qanday yaratiladi?",
    answers: [
      "createFunction()",
      "function myFunction()",
      "new myFunction()",
      "func => {}",
    ],
    correct_answer: "function myFunction()",
  },
  {
    number: 13,
    question: "JavaScript obyektlari qanday bo'ladi?",
    answers: [
      '{1: "one", 2: "two"}',
      '["apple", "banana", "cherry"]',
      "object.create()",
      '{name: "John", age: 30}',
    ],
    correct_answer: '{name: "John", age: 30}',
  },
  {
    number: 14,
    question:
      "JavaScriptda HTML elementlari qanday voqealar bilan bog'liq qilinadi?",
    answers: [
      "EventListeners orqali",
      "CSS qo'shish orqali",
      "JavaScriptda funksiyalar qo'shish orqali",
      "event() bilan",
    ],
    correct_answer: "EventListeners orqali",
  },
  {
    number: 15,
    question: "JavaScriptda matnlar (strings) qanday ifodalanadi?",
    answers: ["'Matn'", '"Matn"', "`Matn`", "Barchasi to'g'ri"],
    correct_answer: "Barchasi to'g'ri",
  },
  {
    number: 16,
    question:
      "JavaScriptda matnlar (strings) bilan ishlash uchun qaysi metodlar mavjud?",
    answers: [
      "push() va pop()",
      "slice() va splice()",
      "toUpperCase() va toLowerCase()",
      "append() va remove()",
    ],
    correct_answer: "toUpperCase() va toLowerCase()",
  },
  {
    number: 17,
    question: "Matnda (string) qanday matn qidirish mumkin?",
    answers: [
      "search() va find()",
      "search() va indexOf()",
      "find() va findIndex()",
      "search() va searchIndex()",
    ],
    correct_answer: "search() va indexOf()",
  },
  {
    number: 18,
    question:
      "JavaScriptda funksional matn (functional strings) qanday yaratish mumkin?",
    answers: [
      "'Matn' qo'shish bilan",
      '"Matn" qo\'shish bilan',
      "`Matn` qo'shish bilan",
      "/Matn/ qo'shish bilan",
    ],
    correct_answer: "`Matn` qo'shish bilan",
  },
  {
    number: 19,
    question: "JavaScriptda sonlar qanday ifodalaydilar?",
    answers: ["1, 2, 3", '"1", "2", "3"', "1.0, 2.0, 3.0", "Barchasi to'g'ri"],
    correct_answer: "Barchasi to'g'ri",
  },
  {
    number: 20,
    question: 'JavaScriptda "BigInt" nima uchun ishlatiladi?',
    answers: [
      "Uzoq matnlar (long strings) uchun",
      "O'nlik sanoq tizimi (decimal system) sonlar uchun",
      "Kattalik sonlar (large numbers) uchun",
      "Darrovazaviy sonlar (hexadecimal numbers) uchun",
    ],
    correct_answer: "Kattalik sonlar (large numbers) uchun",
  },
  {
    number: 21,
    question: "JavaScriptda sonlar bilan ishlash uchun qanday metodlar mavjud?",
    answers: [
      "toNumber() va toString()",
      "parseFloat() va parseInt()",
      "toFixed() va toPrecision()",
      "slice() va splice()",
    ],
    correct_answer: "parseFloat() va parseInt()",
  },
  {
    number: 22,
    question: 'JavaScriptda "Infinity" nima ifodalaydi?',
    answers: [
      "O'ng yonida bo'lib o'tkazilgan amal",
      "Ayrimlari e'lon qilingan",
      '"Sonsizlik"ni ifodalaydi',
      "Agar narxi uzun bo'lsa",
    ],
    correct_answer: '"Sonsizlik"ni ifodalaydi',
  },
  {
    number: 23,
    question: "JavaScriptda massiv (array) qanday yaratiladi?",
    answers: ["[1, 2, 3]", "{1, 2, 3}", "(1, 2, 3)", '"1, 2, 3"'],
    correct_answer: "[1, 2, 3]",
  },
  {
    number: 24,
    question:
      "JavaScriptda massivlarni qaysi metodlar orqali boshqarish mumkin?",
    answers: [
      "add() va remove()",
      "push() va pop()",
      "insert() va delete()",
      "append() va clear()",
    ],
    correct_answer: "push() va pop()",
  },
  {
    number: 25,
    question: "JavaScriptda massivni qaysi metodlar orqali saralash mumkin?",
    answers: [
      "sort() va reverse()",
      "add() va remove()",
      "insert() va delete()",
      "push() va pop()",
    ],
    correct_answer: "sort() va reverse()",
  },
  {
    number: 26,
    question:
      "Massivni har bir elementi uchun qanday operatsiyalar bajarish mumkin?",
    answers: [
      "forEach() va every()",
      "map() va filter()",
      "add() va remove()",
      "insert() va delete()",
    ],
    correct_answer: "map() va filter()",
  },
  {
    number: 27,
    question:
      "JavaScriptda qanday massivni o'zgartirmasdan e'lon qilish mumkin?",
    answers: [
      'const colors = ["red", "green", "blue"];',
      'var fruits = {"apple", "banana"};',
      "let numbers = ()=> [1, 2, 3];",
      "function getArray() { return [1, 2, 3]; }",
    ],
    correct_answer: 'const colors = ["red", "green", "blue"];',
  },
  {
    number: 28,
    question:
      "JavaScriptda qaysi obyekt sana va vaqt bilan ishlash uchun ishlatiladi?",
    answers: ["Date", "Time", "DateTime", "TimeSpan"],
    correct_answer: "Date",
  },
  {
    number: 29,
    question: "JavaScriptda sanani qanday formatda ifodalash mumkin?",
    answers: [
      "Sana vaqt obyekti orqali",
      "Matn (string) formatida",
      "Raqam (number) formatida",
      "Matn (string) va raqam (number) formatida",
    ],
    correct_answer: "Matn (string) formatida",
  },
  {
    number: 30,
    question: "JavaScriptda qanday sana vaqtni olish mumkin?",
    answers: [
      "getDate() va getTime()",
      "setMonth() va setYear()",
      "getHour() va getMinute()",
      "getDay() va getYear()",
    ],
    correct_answer: "getDate() va getTime()",
  },
  {
    number: 31,
    question: "JavaScriptda qanday sana vaqtni sozlash mumkin?",
    answers: [
      "setMonth() va setYear()",
      "setHour() va setMinute()",
      "setSecond() va setMillisecond()",
      "setDay() va setYear()",
    ],
    correct_answer: "setSecond() va setMillisecond()",
  },
  {
    number: 32,
    question: "JavaScriptda qanday matematik amallar bajarish mumkin?",
    answers: [
      "Math object orqali",
      "Arifmetik operatorlar orqali",
      "Sonlar obyekti bilan",
      "Math va numbers",
    ],
    correct_answer: "Math object orqali",
  },
  {
    number: 33,
    question: "JavaScriptda tasodifiy sonlar qanday olish mumkin?",
    answers: [
      "Math.random()",
      "Math.randint()",
      "Math.randomNumber()",
      "Random.number()",
    ],
    correct_answer: "Math.random()",
  },
  {
    number: 34,
    question: "JavaScriptda mantiqiy qiymatlar qanday ifodalaydi?",
    answers: ["true va false", '"true" va "false"', "1 va 0", '"yes" va "no"'],
    correct_answer: "true va false",
  },
  {
    number: 35,
    question: "JavaScriptda qanday taqqoslash amallari amalga oshiriladi?",
    answers: ["<, >, <=, >=", "+, -, *, /", "==, ===, !=, !==", "&&, ||"],
    correct_answer: "<, >, <=, >=",
  },
  {
    number: 36,
    question: "JavaScriptda shart operatorlari qanday ishlatiladi?",
    answers: [
      "if va else",
      "when va otherwise",
      "true va false",
      "check va perform",
    ],
    correct_answer: "if va else",
  },
  {
    number: 37,
    question: 'JavaScriptda "switch" operatori qanday ishlaydi?',
    answers: [
      'Shartlar ketma-ketligini tekshiradi va mos "case" ni bajaradi',
      "Shartni o'z ichiga oladi va bajaradi",
      'Shartni tekshiradi va "if-else" ni bajaradi',
      '"for" tsikl bilan birga ishlaydi',
    ],
    correct_answer:
      'Shartlar ketma-ketligini tekshiradi va mos "case" ni bajaradi',
  },
  {
    number: 38,
    question:
      'JavaScriptda qaysi tsikl operatori "for" bilan amalga oshiriladi?',
    answers: [
      "for tsikli",
      "Shartni tekshirish tsikli",
      "For-in tsikli",
      "To'g'ri javoblar tsikli",
    ],
    correct_answer: "Qattiq tsikl",
  },
  {
    number: 39,
    question: '"for-in" tsikli qaysi ma\'lumot turlari bilan ishlayadi?',
    answers: ["Massivlarni", "Qatorlarni", "Sonlarni", "Obyektlarni"],
    correct_answer: "Massivlarni",
  },
  {
    number: 40,
    question: '"for-of" tsikli qanday ma\'lumot turlari bilan ishlayadi?',
    answers: ["Massivlarni", "Qatorlarni", "Sonlarni", "Obyektlarni"],
    correct_answer: "Massivlarni",
  },
  {
    number: 41,
    question:
      'JavaScriptda qanday tsikl operatori "while" bilan amalga oshiriladi?',
    answers: [
      "while tsikl",
      "for tsikl",
      "Bir-marta tsikl",
      "Massivlarni aylanish tsikli",
    ],
    correct_answer: "while tsikl",
  },
  {
    number: 42,
    question: '"break" operatori qanday ishlatiladi JavaScriptda?',
    answers: [
      "Tsiklni to'xtatish uchun",
      "Obyektlarni o'z ichiga olish uchun",
      "Yangi funktsiyani chaqirish uchun",
      "Matnlar ustida ishlovchi",
    ],
    correct_answer: "Tsiklni to'xtatish uchun",
  },
  {
    number: 43,
    question: 'JavaScriptda qanday obyektlar "iterable" sifatida ishlaydilar?',
    answers: ["Massivlar", "Sonlar", "Matnlar", "Ob'ekt turlari"],
    correct_answer: "Massivlar",
  },
  {
    number: 44,
    question: 'JavaScriptda "Set" nima uchun ishlatiladi?',
    answers: [
      "Tasodifiy sonlar uchun",
      "Tasodifiy obyektlar uchun",
      "Bir hil bo'lmagan qiymatlarni saqlash uchun",
      "Massivlarni to'plash uchun",
    ],
    correct_answer: "Bir hil bo'lmagan qiymatlarni saqlash uchun",
  },
  {
    number: 45,
    question: '"Map" nima uchun ishlatiladi JavaScriptda?',
    answers: [
      "Massivlarni saqlash uchun",
      "Obyektlarni saqlash uchun",
      "Tasodifiy sonlar uchun",
      "Bir hil qiymatlarni saqlash uchun",
    ],
    correct_answer: "Obyektlarni saqlash uchun",
  },
  {
    number: 46,
    question: "JavaScriptda ma'lumot turlarini qanday tekshirish mumkin?",
    answers: ["typeof", "typeof[]", "typeof{}", "type()"],
    correct_answer: "typeof",
  },
  {
    number: 47,
    question: "JavaScriptda ma'lumot turlarini qanday o'zgartirish mumkin?",
    answers: [
      "Type Conversion orqali",
      "Matn orqali",
      "Son qo'shib",
      "Obektga saqlab",
    ],
    correct_answer: "Type Conversion",
  },
  {
    number: 48,
    question:
      "JavaScriptda qanday o'zgaruvchilarni bitwise amallar bilan bajarish mumkin?",
    answers: [
      '"&", "|", ">>"',
      "+, -, *, /",
      '"and", "or", "not"',
      '"add", "subtract", "multiply"',
    ],
    correct_answer: '"&", "|", ">>"',
  },
  {
    number: 49,
    question: '"RegExp" JavaScriptda nima uchun ishlatiladi?',
    answers: [
      "Matnlar bilan ishlash uchun",
      "Sonlar bilan ishlash uchun",
      "Obyektlarni o'z ichiga olish uchun",
      "Massivlarni yaratish uchun",
    ],
    correct_answer: "Matnlar bilan ishlash uchun",
  },
  {
    number: 50,
    question:
      "JavaScript operatorlarining oldindan (precedence) nima uchun foydalaniladi?",
    answers: [
      "Obyektlarni chaqirish uchun",
      "Operatorlar to'plamini yozish uchun",
      "Operatorlar tashqi qavslarini yozish uchun",
      "Operatorlar qo'shilishini belgilash uchun",
    ],
    correct_answer: "Operatorlar tashqi qavslarini yozish uchun",
  },
  {
    number: 51,
    question: "JavaScriptda xatolar qanday aniqlanadi?",
    answers: [
      "try-catch bloklari orqali",
      "if-else operatorlari orqali",
      "console.log() yordamida",
      "switch operatori orqali",
    ],
    correct_answer: "try-catch bloklari orqali",
  },
  {
    number: 52,
    question: 'JavaScriptda "scope" (miqyos) qanday ishlaydi?',
    answers: [
      "O'zgaruvchilarni tizimli qilish uchun",
      "O'zgaruvchilarni cheksiz o'zgartirish uchun",
      "O'zgaruvchilarni o'z ichiga oladigan qavslar uchun",
      "O'zgaruvchilarni o'z ichiga o'chirish uchun",
    ],
    correct_answer: "O'zgaruvchilarni o'z ichiga oladigan qavslar uchun",
  },
  {
    number: 53,
    question: 'JavaScriptda "hoisting" nima ma\'noni anglatadi?',
    answers: [
      "O'zgaruvchilarni o'chirish",
      "Funksiyalarni yuqoriga ko'tarish",
      "O'zgaruvchilarni tozalash",
      "Funksiyalarni tozalash",
    ],
    correct_answer: "Funksiyalarni yuqoriga ko'tarish",
  },
  {
    number: 54,
    question: 'JavaScriptda "strict mode" nima uchun ishlatiladi?',
    answers: [
      "Xatolarni o'tkazmasdan ishlatish uchun",
      "Kodni yozishni osonlashtirish uchun",
      "Boshqa dasturlash tillariga o'tish uchun",
      "Funksiyalar yaratish uchun",
    ],
    correct_answer: "Xatolarni o'tkazmasdan ishlatish uchun",
  },
  {
    number: 55,
    question: '"this" kaliti JavaScriptda qanday ishlaydi?',
    answers: [
      "Bitta tashqi `scope`ga murojaat etish uchun",
      "Obyektlarni o'z ichiga olish uchun",
      "Obyektlarni yaratish uchun",
      "Funksiyalarni chaqirish uchun",
    ],
    correct_answer: "Bitta tashqi `scope`ga murojaat etish uchun",
  },
  {
    number: 56,
    question:
      "JavaScriptda murojaat funksiyalari (arrow functions) qanday yaratiladi?",
    answers: ["() => {}", "function => {}", "(function) => {}", "func() => {}"],
    correct_answer: "() => {}",
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
            questions[n - 1].answers +
            "\n" +
            "To'g'ri javobi " +
            questions[n - 1].correct_answer
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
  let countQuestions = data.length;
  here: while (true) {
    console.log(data);
    let index = Math.floor(Math.random() * countQuestions);
    console.log(index);
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
    // console.log(Math.floor(Math.random() * randomised[i].answers.length));
    let randomVariants = randomisedQuestions(randomised[i].answers);
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
    answers: [
      prompt("a) variantni kiriting: ", questions[editIndext - 1].answers[0]),
      prompt("b) variantni kiriting: ", questions[editIndext - 1].answers[1]),
      prompt("c) variantni kiriting: ", questions[editIndext - 1].answers[2]),
      prompt("d) variantni kiriting: ", questions[editIndext - 1].answers[3]),
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
    answers: [a, b, c, d],
    correctAnswer: correctAnswer,
  };
  questions.push(quizItem);
  alert("Savol qo'shildi!");
}

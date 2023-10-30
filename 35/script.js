// let a;

// foo = function () {
//   a = 5;

//   console.log("funksiya ishladi");
// };

// foo();
// console.log(a);

// {
//   let a = 6;
//   console.log(a);
// }
// {
//   let a = 2345;
//   console.log(a);
// }

// let a;

// {
//   let b = 5467;
//   a = b;
//   function foo() {
//     a = 3;
//     console.log("function works");
//   }
// }

// console.log(b);

// foo();

// let i = null;

// for (i = 0; i < 3; i++) {
//   // the variable i is only visible inside this for
//   console.log(i); // 0, then 1, then 2
// }

// console.log("end: ", i);

// function makeCounter() {
//   let count = 0;

//   return function () {
//     return count++;
//   };
// }

// let counter = makeCounter();
// let counter2 = makeCounter();

// console.log("Counter", counter());
// console.log("Counter", counter());
// console.log("Counter", counter());

// console.log("counter2", counter2());
// console.log("counter2", counter2());
// console.log("counter2", counter2());
// console.log("counter2", counter2());
// console.log("counter2", counter2());

// let accauntBalance = 234567;
// console.log(accauntBalance);
// let accauntBalance = 0;
// console.log(accauntBalance);

// a = 5;

// let a ;
// a = 5;

// console.log(a);

// var a;

// let
// var
// const

//classlar

// class mathClass {
//   constructor(son1, son2) {
//     this.a = son1;
//     this.b = son2;
//   }
//   add() {
//     return this.a + this.b;
//   }
//   divide() {
//     return this.a / this.b;
//   }
//   multiple() {
//     return this.a * this.b;
//   }
// }

// let obj = {
//   a: 5,
//   b: 6,
//   changeA(k) {
//     this.a = k;
//   },
// };

// console.log(obj.a);
// obj.changeA(9);
// console.log(obj.a);

// let aAndB = new mathClass(5, 6);
// let aAndB = new mathClass(9, 34);

// let avab = {
//   a: 5,
//   b: 6,
//   add() {
//     return this.a + this.b;
//   },
//   divide() {
//     return this.a / this.b;
//   },
//   multiple() {
//     return this.a * this.b;
//   },
// };

// console.log("OBJ:", avab.multiple());
// console.log("CLASS:", aAndB.multiple());

// let property1 = "malumot birinchisi";
// let property2 = "malumot birinchisi";

// function foo(a, b) {
//   let c = a + b;
// }

// let obj = {
//   son: 1234,
//   matn: "fdfgfh",
//   raqam: 234,
//   foo() {
//     console.log(this.raqam);
//   },
// };

class Books {
  constructor(author, name, year) {
    this.author = author;
    this.name = name;
    this.year = year;
  }
  Info() {
    console.log("some info");
  }
}

class Ebook extends Books {
  constructor(author, name, year, size, narxi) {
    super(author, name, year);
    this.size = size;
    this.cost = narxi;
  }

  Info() {
    console.log(
      "Avtori: ",
      this.author,
      "\nKitob nomi: ",
      this.name,
      "\nYozilgan yili: ",
      this.year,
      "\nHajmi: ",
      this.size,
      "\nNarxi: ",
      this.cost
    );
  }
}

let book1 = new Ebook("Said ahmad", "Ufq romani", "1964-1974", 5.1, 5000);
book1.Info();

class paperBook extends Books {
  constructor(author, name, year, muqovasi, ogirligi, tarjimasi) {
    super(author, name, year);
    this.muqovasi = muqovasi;
    this.weight = ogirligi;
    this.language = tarjimasi;
  }
  Info() {
    console.log(
      this.author,
      this.name,
      this.year,
      this.muqovasi,
      this.weight,
      this.language
    );
  }
}

let paperBook1 = new paperBook(
  "Makedonskiy Aleksandr",
  "Iskandarlar shoxi",
  1200,
  "teri",
  120,
  "iskandar iroglaflari"
);
paperBook1.Info();
`
// let obj = {
//   author: "Makedonskiy Aleksandr",
//   name: "Iskandarlar shoxi",
//   year: 1200,
//   muqova: "teri",
//   weight: 120,
//   language: "iskandar iroglaflari",
//   Info() {
//     console.log(
//       this.author,
//       this.name,
//       this.year,
//       this.muqovasi,
//       this.weight,
//       this.language
//     );
//   },
// };

// console.log("Bu oddiy obj holatida: ", obj.author);

// class Dog extends Animal {
//   constructor(laqabi, oyoqlari, ovozi) {
//     super(laqabi, oyoqlari);
//     this.voice = ovozi;
//   }
//   makeSound() {
//     console.log("It :", this.voice, "shunaqa ovoz chiqadi");
//   }
// }

// let dog1 = new Dog("Tuzik", 4, "woff");

// dog1.makeSound();

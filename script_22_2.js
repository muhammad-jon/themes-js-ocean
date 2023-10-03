// {
//   let a = "Bret";
// }
// // function foo() {
// //   console.log("here: ", a);
// //   a = "John";
// // }

// console.log("Hello " + a);

// // // foo();

// {
//   let a = 6;
// }

// {
//   let a = 7;
// }

// if (true) {
//   let phrase = "Hello!";

//   console.log(phrase); // Hello!
// }

// console.log(phrase);

// function sayHiBye(firstName, lastName) {
//   function getFullName() {
//     return firstName + " " + lastName;
//   }
//   console.log("Hello, " + getFullName());
//   console.log("Bye, " + getFullName());
// }

// // sayHiBye("john", "Wick");

// getFullName();

// function makeCounter() {
//   let count = 0;

//   return function () {
//     return count++;
//   };
// }

// let counter = makeCounter();
// let counter2 = makeCounter();

// console.log(counter()); //
// console.log(counter()); //
// console.log(counter()); //
// console.log(counter()); //
// // console.log(counter2()); //

// function add(a, b) {
//   return a + b;
// }
// let k = add(4, 5);

// function outer() {
//   var x = 10;
//   function inner() {
//     return x; // Inchlik orqali x o'qib olish
//   }
//   return inner;
// }

// // var closureExample = outer();
// // console.log(closureExample());
// console.log(x);

// function foo() {
//   console.log("Hello foo");
// }

// console.log(foo());

// function foo() {
//   var result = 0;

//   return {
//     add: function (x) {
//       result += x;
//     },
//     subtract: function (x) {
//       result -= x;
//     },
//     getResult: function () {
//       return result;
//     },
//   };
// }

// var calculator = foo();
// var calculator1 = foo();
// var calculator2 = foo();

// calculator2.add(8);

// calculator.add(5);
// calculator.subtract(2);
// console.log(calculator.getResult()); // 3

// function foo(name) {
//   return function (surName) {
//     return name + surName;
//   };
// }

// let function1 = foo("Doe");
// console.log(function1("John"));

// function f() {
//   let value = Math.random();

//   return function () {
//     return value;
//   };
// }

// let arr = [f(), f(), f()];

// console.log(arr[0]());
// console.log(arr[1]());
// console.log(arr[2]());

// function sayHiBye(say) {
//   return function (name) {
//     console.log(`${say}, ${name}`);
//   };
// }

// let hi = sayHiBye("Hello");
// hi("Asadbek");
// hi("Quvonchbek");
// hi("Nurshod");

// let bye = sayHiBye("Bye");
// bye("Begzod");
// bye("Beknur");

// let a = sum(1)(2);
// console.log(a); //3

// function sum(a) {
//   return function (b) {
//     return function (c) {
//       return a + b + c;
//     };
//   };
// }

// let p = sum(3)(4)(9);
// console.log(p);

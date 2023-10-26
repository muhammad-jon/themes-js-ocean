// let user = {};

// user["koo"] = 45;
// user["foo"] = 89;

// console.log(user);

// let obj = {
//   age: 45,
//   name: "John",
//   objIn: {
//     number: 435,
//     kaa: "fadsfs",
//   },
//   address: "Amir temur",
//   book: "pushkin",
// };

// let newObj = { ...obj };

// newObj.objIn.number = 345678;
// console.log(obj);
// console.log(newObj);

// console.log(foo["name"]);

// let obj = { age: 45, name: "John" };
// let obj2 = { age: 45, name: "John" };
// console.log("[object Undefined]");
// console.log(toString(obj));

// let user = {
//   age: 32,
//   name: "John",
//   surname: "Wolt",
//   fullName: function () {
//     console.log(this.name + this.surname);
//   },
// };

// user.fullName();

// let user = { name: "John" };
// let admin = { name: "Admin" };

// function sayHi() {
//   console.log(this.name);
// }

// user.f = sayHi;
// admin.f = sayHi;

// user.f(); // John  (this == user)
// admin.f(); // Admin  (this == admin)

// // admin["f"]();
// let age = 45;

// let obj = {
//   age: 45,
//   foo: () => console.log(this.age),
// };
// obj.foo();

// function foo() {}
// foo = function () {};
// () => {};
// new Function();

// let obj = {
//   name: "John",
//   surname: "Smith",
//   age: 45,
//   address: {},
// };
// let obj2 = {
//   name: "John",
//   surname: "Smith",
//   age: 45,
//   address: {
//     street: {
//       number: 435,
//       name: "fsad",
//     },
//   },
// };

// console.log(obj.address?.street?.name);
// console.log(obj2.address?.street?.name);

// console.log("ishlamoqda");

// let id = Symbol("ID");
// let id2 = Symbol("ID");
// console.log(id.toString() == id2.toString());

// let user = {
//   name: "John",
// };

// let id = Symbol("id");

// user[id] = 23134567;

// console.log(user[id]);

// let id = Symbol("id");
// let user = {
//   name: "John",
//   age: 30,
//   [id]: 123,
// };

// for (let key in user) console.log(key); // name, age (no symbols)

// // the direct access by the symbol works
// console.log("Direct: " + user[id]);

// console.log(Symbol.hasInstance);

// let obj = {
//   name: "John",
//   age: 30,
// };
// let obj2 = {
//   name: "John",
//   age: 30,
// };

// // let str = JSON.stringify(obj);
// let number = Number(obj);
// let bool = Boolean(obj);
// let str = String(obj);

// console.log(obj + obj2);

// let user = {
//   name: "John",
//   money: 1000,

//   // for hint="string"
//   toString() {
//     return `{name: "${this.name}"}`;
//   },

//   // for hint="number" or "default"
//   valueOf() {
//     return this.money;
//   },
// };

// console.log(user.valueOf());

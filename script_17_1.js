// user has a reference to the object
// let user = {
//   name: "John",
// };

// console.log(user);

// let admin = user;
// user = {};
// user.name = "HEre";

// console.log(user);
// console.log(admin);

// function marry(man, woman) {
//   woman.husband = man;
//   man.wife = woman;

//   return {
//     father: man,
//     mother: woman,
//   };
// }

// let family = marry(
//   {
//     name: "John",
//   },
//   {
//     name: "Ann",
//   }
// );
// console.log(family);

// let a = new Map();
// a.entries;

// let user = {
//   name: "Muhammad",
// };
// let admin = user;

// user = null;
// user.name = "Admin";

// // admin.name = "Admin";

// console.log("User", user);
// console.log("Admin", admin);

// function marry(man, woman) {
//   woman.husband = man;
//   man.wife = woman;

//   return {
//     father: man,
//     mother: woman,
//   };
// }

// let family = marry(
//   {
//     name: "John",
//   },
//   {
//     name: "Ann",
//   }
// );
// console.log(family);

// let user = {}; // user has no address

// alert(user?.address?.street); // undefined (no error)

// let userAdmin = {
//   admin() {
//     alert("I am admin");
//   },
// };

// let userGuest = {};

// userAdmin.admin?.(); // I am admin

// userGuest.admin?.(); // nothing happens (no such method)

// let key = "firstName";

// let user1 = {
//   firstName: "John",
// };

// let user2 = null;

// console.log(user1?.[key]); // John
// console.log(user2?.[key]); // undefined

// let john = { name: "John" };

// let map = new Map();
// map.set(john, "...");

// // john = null; // overwrite the reference

// console.log(map.get(john));

// let now = new Date(0); //
// let end = new Date();
// console.log(end - now);

// let foo = new Date("2017-01-26");
// console.log(+foo);
// let date = new Date();
// date.setHours(0, 0);
// console.log(date.toString());

// let date = new Date(2013, 1, 32); // 32 Jan 2013 ?!?
// date.setDate(date.getDate() + 305);

// console.log(date); // ...is 1st Feb 2013!

// for (let i = 0; i < 100000; i++) {
//   let doSomething = i * i * i*i*i*i;
// }
// let end = new Date();

// let date = new Date();
// console.log(date.toISOString());

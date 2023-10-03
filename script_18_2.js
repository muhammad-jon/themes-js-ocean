// let user = {}; // a user without "address" property
// console.log("before");
// let user = {};

// console.log(user?.address?.street); // Error!

// // console.log("after");

// console.log(user.address ? user.address.street : undefined);

// let user = {
//   address: {},
// }; // user has no address

// console.log(user.address.street?.name);

// alert(user.address ? user.address.street ? user.address.street.name : null : null);

// let user = {
//   sayHi: function (a) {
//     return `${a} Hello `;
//   },
// };
// let x = 0;

// user?.sayHi(x++); // no "user", so the execution doesn't reach sayHi call and x++

// console.log(x); // 0, value not incremented

// let userAdmin = {
//   admin() {
//     alert("I am admin");
//   },
// };

// let userGuest = {};

// userAdmin.admin?.(); // I am admin

// userGuest.admin?.(); //

// let key = "firstName";

// let user1 = {
//   firstName: "John",
// };

// let user2 = null;

// console.log(user1?.[key]); // John
// console.log(user2?.[key]); // undefined
// let height;

// height = height ?? 100;

// console.log(height);

// // // after running the transpiler
// // height = height !== undefined && height !== null ? height : 100;

// let fooTrunc = function (number) {
//   return number < 0 ? Math.ceil(number) : Math.floor(number);
// };

// // console.log(fooTrunc(56.78));
// let a = 0;

// while (true) {
//   a++;
//   console.log("ssss");
//   if (a == 19999) {
//     break;
//   }
// }

// let savollar = [
//   {
//     savol: "lorem ispum ... (davom ettring)",
//     javoba: "dolor amet",
//     jabovb: "dolor sit amet",
//     javobc: "lorem ipsum",
//     javobd: "lorem ipsum",
//   },
//   {
//     savol: "lorem ispum ... (davom ettring)",
//     javoba: "dolor amet",
//     jabovb: "dolor sit amet",
//     javobc: "lorem ipsum",
//   },
//   {
//     savol: "lorem ispum ... (davom ettring)",
//     javoba: "dolor amet",
//     jabovb: "dolor sit amet",
//     javobc: "lorem ipsum",
//   },
//   {
//     savol: "lorem ispum ... (davom ettring)",
//     javoba: "dolor amet",
//     jabovb: "dolor sit amet",
//     javobc: "lorem ipsum",
//   },
// ];

// prompt("1.savol: gfhskfjhsdkjfs\na)fsdfasfsad\nb)fdsahfjskdahf\nc)fdsfsd");

// alert("Siz savoldan 3 tasiga ");

// let user = {
//   name: "Abdulla",
//   age: "12",
// }; // a user without "address" property

// console.log("before");
// console.log(user.address?.street); // undefined
// user.address = {};
// user.address.street = "Amir temur";
// console.log(user.address?.street); // undefined

// console.log("after");

// let user = {};
// console.log(user.address?.street);

// console.log(user.address ? user.address.street : undefined);

// let user = null;
// let x = 0;

// user?.sayHi(x++); // no "user", so the execution doesn't reach sayHi call and x++

// console.log(x); // 0, value not incremented

// let userAdmin = {
//   admin: function () {
//     console.log("I am admin");
//   },
// };

// let userGuest = {};

// userAdmin.admin?.(); // I am admin

// // console.log(userGuest.admin);
// userGuest.admin?.(); // nothing happens (no such method)

// let key = "firstName";

// let user1 = {
//   firstName: "John",
//   lastName: "Bro",
// };

// let user2 = {};
// delete user1?.["firstName"];

// alert(user1?.["firstName"]); // John
// alert(user2?.["firstName"]); // undefined

// let user = {
//   name: "John",
//   age: 30,

//   toString() {
//     return `{name: "${this.name}", age: ${this.age}}`;
//   },
// };

// console.log(user.toString()); // {name: "John", age: 30}

// let student = {
//   name: "John",
//   age: 30,
//   isAdmin: false,
//   courses: ["html", "css", "js"],
//   spouse: null,
// };

// let json = JSON.stringify(student);

// console.log(typeof json); // we've got a string!

// console.log(json);

// let user = {
//   sayHi: function () {
//     // ignored
//     alert("Hello");
//   },
//   [Symbol("id")]: 123, // ignored
//   something: undefined, // ignored
// };

// console.log(JSON.stringify(user)); // {} (empty object)

// let room = {
//   number: 23,
// };

// let meetup = {
//   title: "Conference",
//   participants: ["john", "ann"],
// };

// meetup.place = room; // meetup references room
// room.occupiedBy = meetup; // room references meetup

// console.log(JSON.stringify(meetup)); // Error: Converting circular structure to JSON

// let room = {
//   number: 23,
// };

// let meetup = {
//   title: "Conference",
//   participants: [{ name: "John" }, { name: "Alice" }],
//   place: room, // meetup references room
// };

// room.occupiedBy = meetup; // room references meetup
// console.log(JSON.stringify(meetup, ["title", "number", "place"]));

// let room = {
//   number: 23,
// };

// let meetup = {
//   title: "Conference",
//   participants: [{ name: "John" }, { name: "Alice" }],
//   place: room, // meetup references room
// };

// room.occupiedBy = meetup; // room references meetup

// console.log(
//   JSON.stringify(meetup, function replacer(key, value) {
//     console.log(`${key}: ${value}`);
//     return key == "occupiedBy" ? undefined : value;
//   })
// );
// let user = {
//   name: "John",
//   age: 25,
//   roles: {
//     isAdmin: false,
//     isEditor: true,
//   },
// };

// console.log(JSON.stringify(user, null, 4));
// /* two-space indents:
//   {
//     "name": "John",
//     "age": 25,
//     "roles": {
//       "isAdmin": false,
//       "isEditor": true
//     }
//   }
//   */

// /* for JSON.stringify(user, null, 4) the result would be more indented:
//   {
//       "name": "John",
//       "age": 25,
//       "roles": {
//           "isAdmin": false,
//           "isEditor": true
//       }
//   }
//   */

// let room = {
//   number: 23,
// };

// let meetup = {
//   title: "Conference",
//   date: new Date(Date.UTC(2017, 0, 1)),
//   room,
// };

// console.log(JSON.stringify(meetup));

// let room = {
//   number: 23,
//   toJSON() {
//     return this.number;
//   },
// };

// let meetup = {
//   title: "Conference",
//   room,
// };

// console.log(JSON.stringify(room)); // 23

// console.log(JSON.stringify(meetup));

// stringified array
// let numbers = "[0, 1, 2, 3]";

// numbers = JSON.parse(numbers);

// console.log(numbers); // 1

// let userData =
//   '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';

// let user = JSON.parse(userData);

// console.log(user); // 1

// let json = '{    name: "John",
//   "surname": 'Smith',
//     'isAdmin': false
//     "birthday": new Date(2000, 2, 3),
//     "friends": [0,1,2,3]}';

// console.log(JSON.parse(json));

// let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';

// let meetup = JSON.parse(str);

// console.log(meetup.date.getDate()); // Error!

// let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';

// let meetup = JSON.parse(str, function (key, value) {
//   if (key == "date") return new Date(value);
//   return value;
// });

// console.log(meetup.date.getDate()); // now works!

function makeChocolate(small, big, goal) {
  for (let j = big; j <= 0; j--) {
    for (let i = 0; i <= small; i++) {
      if (goal == 5 * j + i) {
        return i;
        // break stopLoop;
      }
    }
  }
  return -1;
}

// console.log(makeChocolate(9, 3, 18));

// let str = "";
// str.substr(i, 2);

// let a = {
//   name: "fsdaf",
//   age: 212,
// };

// let c = {
//   name: "fsdaf",
//   age: 213,
// };

// let a1 = JSON.stringify(a);
// let c1 = JSON.stringify(c);

// console.log(a1);
// console.log(c1);

// console.log(a1 == c1);

// let user = {
//   son: 0,
//   son2: 2134,
//   string: "",
//   strin2: "fdsaf",
//   rostmi: true,
//   sayHi() {
//     // ignored
//     alert("Hello");
//   },
//   [Symbol("id")]: 123, // ignored
//   something: undefined, // ignored
// };

// console.log(JSON.stringify(user)); // {} (empty object)

// console.log(JSON.stringify(1)); // 1

// // a string in JSON is still a string, but double-quoted
// console.log(JSON.stringify("test")); // "test"

// console.log(JSON.stringify(true)); // true

// console.log(JSON.stringify([1, 2, 3])); // [1,2,3]

// let room = {
//   number: 23,
// };

// let meetup = {
//   title: "Conference",
//   participants: ["john", "ann"],
// };

// meetup.place = room; // meetup references room
// room.occupiedBy = meetup; // room references meetup

// // JSON.stringify(meetup); // Error: Converting circular structure to JSON

// console.log(meetup);

// let room = {
//   number: 23,
// };

// let meetup = {
//   title: "Conference",
//   participants: [{ name: "John" }, { name: "Alice" }],
//   place: room,
// };

// room.occupiedBy = meetup;

// console.log(
//   JSON.stringify(meetup, ["title", "participants", "place", "number"])
// );

// // {"title":"Conference","participants":[{},{}]}

// let room = {
//   number: 23,
// };

// let meetup = {
//   title: "Conference",
//   participants: [{ name: "John" }, { name: "Alice" }],
//   //   place: room, // meetup references room
// };

// // room.occupiedBy = meetup; // room references meetup

// console.log(JSON.stringify(meetup, null, 1));

// let room = {
//   number: 23,
// };

// let meetup = {
//   title: "Conference",
//   date: new Date(Date.UTC(2017, 0, 1)),
//   room,
// };

// console.log(JSON.stringify(meetup, null, 2));
// /*
//     {
//       "title":"Conference",
//       "date":"2017-01-01T00:00:00.000Z",  // (1)
//       "room": {"number":23}               // (2)
//     }
//   */

// let room = {
//   number: 23,
//   name: "dsaf",
//   son: 213,
//   arr: [123, 42314, 123],
//   toJSON() {
//     return this.number;
//   },
// };

// let meetup = {
//   title: "Conference",
//   room,
// };

// console.log(JSON.stringify(room)); // 23
// // console.log(JSON.stringify(meetup));

// let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';

// let meetup = JSON.parse(str);

// console.log(meetup.date.getDate()); // Error!

// let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';

// let meetup = JSON.parse(str, function (key, value) {
//   if (key == "date") return new Date(value);
//   return value;
// });

// console.log(meetup.date.getDate()); // now works!

// let numbers = "[0, 1, 2, 3]";

// numbers = JSON.parse(numbers);

// console.log(numbers); // 1

// let json = {
//   name: "John",
//   surname: "Smith",
//   isAdmin: false,
//   birthday: new Date(2000, 2, 3),
//   friends: [0, 1, 2, 3],
// };

// savollar = [
//   {
//     savol: "fdsafsdf",
//     javoblar: ["231", "21312", "23143", "342432"],
//     javob: "21312",
//   },
// ];

// let ball = 0;

// let ans = prompt(`${savollar[0].savol} a)${savollar[0].javoblar[0]}`);

// 0. Savollar arrayini yarating
// 1. Savol, javobni chiqaramiz
// 2. Savolga kiritlgan javobni tekshiramiz
// 3. To'g'ri bo'lsa 1 ball qo'shamiz
// 4. For orqali barcha savollarni aylanadigan qilamiz
// 5. Oxirida loop tugagandan keyin natijani ekranga chiqaramiz.

for (let i = 0; i < 5; ) {
  let answer = prompt("i=" + i);
  if (
    answer[0] == "a" ||
    answer[0] == "b" ||
    answer[0] == "c" ||
    answer[0] == "d"
  ) {
    i++;
    continue;
  }

  if (
    answer[0] != "a" ||
    answer[0] != "b" ||
    answer[0] != "c" ||
    answer[0] != "d"
  ) {
    alert("To'g'ri varinatni tnlang");
  }
}

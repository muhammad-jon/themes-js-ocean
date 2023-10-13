//masssivlar
//arrays

// object  = {}

// let str = "fdsafs";
// let son = 324;
//

// let obj = {
//   son: 56,
//   str: "Matn",
//   rostOrYolgon: true,
//   obj: {},
//   bigInt: 2345678n,

// };

// let str = "";
// let son = 45;

// console.log(Boolean(son));

// let objNomi = {
//   son: "value",
//   key: "value",
//   key: "value",
//   key: "value",
//   key: "value",
//   key: "value",
//   key: "value",
// }; //object yaratish

// obj.key = "value"; // bu objectga ma'lumot qo'shish
// obj.son = "o'zgartikihsi kerak bo'lgan qiymat"; // bu objectdagi qiymatni o'zgartiradi
// delete obj.key; // objectdan key va valueni o'chiradi
// obj.key; /// bu objectdan key li ma'lumotni olish

// let obj = {
//   son: 56,
//   str: "Lorem ipsum dolor",
// };
// obj.llll = {}

// console.log(obj);

// delete obj.str;
// delete obj.son;

// console.log(obj);

// let matn = "lorem ifjlshfaskldfh ";

// console.log(matn);

// let userInfo = {
//   age: 20,
//   name: "Qilichbek",
//   surname: "Normo'minov",
//   address: {
//     region: "surxondaryo",
//     city: "Bandixon",
//     street: "Navro'z sayli",
//     homeNumber: 77,
//   },
//   married: false,
//   contact: {
//     mobileNumber: 882440436,
//     post: "qilichbek@gmail.com",
//   },
// };

// userInfo.family = {
//   father: "",
//   mother: "",
//   brother: [],
//   sister: [],
// };

// delete userInfo.family.father;

// console.log(userInfo);
// console.log(userInfo.address.street);

// usersInfo = [
//   {
//     age: 20,
//     name: "Qilichbek",
//     surname: "Normo'minov",
//     address: {
//       region: "surxondaryo",
//       city: "Bandixon",
//       street: "Navro'z sayli",
//       homeNumber: 77,
//     },
//     married: false,
//     contact: {
//       mobileNumber: 882440436,
//       post: "qilichbek@gmail.com",
//     },
//   },
//   {
//     age: 20,
//     name: "Qilichbek",
//     surname: "Normo'minov",
//     address: {
//       region: "surxondaryo",
//       city: "Bandixon",
//       street: "Navro'z sayli",
//       homeNumber: 77,
//     },
//     cars: ["bmw", "porsche", "gm", "toyota"],
//     married: false,
//     contact: {
//       mobileNumber: 882440436,
//       post: "qilichbek@gmail.com",
//     },
//   },
//   {
//     age: 20,
//     name: "Qilichbek",
//     surname: "Normo'minov",
//     address: {
//       region: "surxondaryo",
//       city: "Bandixon",
//       street: "Navro'z sayli",
//       homeNumber: 77,
//     },
//     married: false,
//     contact: {
//       mobileNumber: 882440436,
//       post: "qilichbek@gmail.com",
//     },
//   },
// ];

let userInfo = {
  age: 20,
  name: "Qilichbek",
  surname: "Normo'minov",
  address: {
    region: "surxondaryo",
    city: "Bandixon",
    street: "Navro'z sayli",
    homeNumber: 77,
  },
  married: false,
  contact: {
    mobileNumber: 882440436,
    post: "qilichbek@gmail.com",
  },
};

// for (let uuuu in userInfo) {
//   console.log(userInfo[uuuu]);
// }

// let products = [
//   {
//     name: "smart watch",
//     cost: 1250000,
//     images: ["", "", "", ""],
//     fedbacks: 34,
//     sells: 45,
//     seens: 4,
//     color: ["black", "red", "white"],
//     count: [45, 43, 1],
//   },
//   {
//     name: "smart tv",
//     cost: 2250000,
//     images: ["", "", "", ""],
//     fedbacks: 65,
//     sells: 1,
//     seens: 100,
//     color: ["black"],
//     count: [9],
//   },
//   {
//     name: "smart tv",
//     cost: 2250000,
//     images: ["", "", "", ""],
//     fedbacks: 65,
//     sells: 1,
//     seens: 100,
//     color: ["black"],
//     count: [9],
//   },
//   {
//     name: "smart tv",
//     cost: 2250000,
//     images: ["", "", "", ""],
//     fedbacks: 65,
//     sells: 1,
//     seens: 100,
//     color: ["black"],
//     count: [9],
//   },
//   {
//     name: "smart tv",
//     cost: 2250000,
//     images: ["", "", "", ""],
//     fedbacks: 65,
//     sells: 1,
//     seens: 100,
//     color: ["black"],
//     count: [9],
//   },
//   {
//     name: "smart tv",
//     cost: 2250000,
//     images: ["", "", "", ""],
//     fedbacks: 65,
//     sells: 1,
//     seens: 100,
//     color: ["black"],
//     count: [9],
//   },
//   {
//     name: "smart tv",
//     cost: 2250000,
//     images: ["", "", "", ""],
//     fedbacks: 65,
//     sells: 1,
//     seens: 100,
//     color: ["black"],
//     count: [9],
//   },
// ];

// for (let i = 0; i < products.length; i++) {
//   document.querySelector(`#product${i + 1}`).textContent = products[i].name;
// }

// let narsa = {};
let massiv = ["true", "userInfo", " [32, 45]", "54", "65", "234"];

console.log(massiv);

massiv.push(32); // push demak arrayga ociridan qiymat qo'shib beradi
massiv.push(32); // push demak arrayga ociridan qiymat qo'shib beradi
massiv.push(32); // push demak arrayga ociridan qiymat qo'shib beradi
massiv.push(32); // push demak arrayga ociridan qiymat qo'shib beradi
massiv.push(32); // push demak arrayga ociridan qiymat qo'shib beradi
massiv.push(32); // push demak arrayga ociridan qiymat qo'shib beradi
massiv.push(32); // push demak arrayga ociridan qiymat qo'shib beradi
massiv.push(32); // push demak arrayga ociridan qiymat qo'shib beradi
massiv.push(32); // push demak arrayga ociridan qiymat qo'shib beradi
massiv.push(32); // push demak arrayga ociridan qiymat qo'shib beradi
massiv.push(32); // push demak arrayga ociridan qiymat qo'shib beradi
massiv.slice(2, 4); // slice i dan boshlab k gacha elemntlarni kesib beraidd
massiv.reverse; // massivning elemtlarini boshidan oxiriga qarab o'rin lmashtirib chiqadi

// massiv.push(777);

// console.log(massiv);

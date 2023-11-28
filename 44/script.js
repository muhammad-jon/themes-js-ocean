import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import {
  getDatabase,
  set,
  ref,
  get,
} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyAHAiyYu4pLUmrnjIHqs2SZ66xjg08ocPU",
  authDomain: "user-info-7cfec.firebaseapp.com",
  databaseURL: "https://user-info-7cfec-default-rtdb.firebaseio.com",
  projectId: "user-info-7cfec",
  storageBucket: "user-info-7cfec.appspot.com",
  messagingSenderId: "169047694019",
  appId: "1:169047694019:web:7a3964ae32e9159aec6076",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase();

let phone = document.getElementById("phone");
let name = document.getElementById("name");

send.addEventListener("click", (e) => {
  e.preventDefault();

  let obj = {
    ism: name.value,
    phone: phone.value,
  };

  set(ref(db, "todos/" + number.value), obj)
    .then(() => {
      number.value = "";
      name.value = "";
      phone.value = "";
      alert("Muvoffaqqiyatli");
    })
    .catch((error) => alert(error));
});

olish.addEventListener("click", (e) => {
  e.preventDefault();

  get(ref(db, "todos/" + number.value)).then((res) => {
    console.log(res.kk());
    console.log(llll);
  });
});

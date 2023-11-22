function goodbye(e) {
  if (!e) e = window.event;
  //e.cancelBubble is supported by IE - this will kill the bubbling process.
  e.cancelBubble = true;
  e.returnValue = "You sure you want to leave?"; //This is displayed on the dialog

  //e.stopPropagation works in Firefox.
  if (e.stopPropagation) {
    e.stopPropagation();
    e.preventDefault();
  }
}
window.onbeforeunload = goodbye;

// import { sayHi, sayBye, cop } from "./constants.js";

// alert(cop);

// sayHi("John"); // Hello, John!
// sayBye("John"); // Bye, John!

let calulated = false;
let result = null;

document.addEventListener("keyup", (event) => {
  if (event.key == "Backspace") {
    act.innerText = act.innerText.slice(0, -1);
    return;
  }
  if (event.key == "Enter" || event.key == "=") {
    calulated = true;
    result = eval(act.innerText);
    res.innerText = "﹦" + result;
    return;
  }
  if (calulated) {
    act.innerText = result;
    res.innerText = "";
    calulated = false;
  }
  if (
    ["+", "-", "*", "/"].includes(event.key) &&
    ["+", "-", "*", "/"].includes(act.innerText.slice(-1))
  ) {
    console.log(act.innerText.slice(0, -1));
    act.innerText = act.innerText.slice(0, -1) + event.key;
    return;
  }
  if (isFinite(event.key) || ["+", "-", "*", "/"].includes(event.key)) {
    act.innerText += event.key;
  }
});

function calc(e) {
  if (e == "C") {
    act.innerText = "";
    res.innerText = "";
    return;
  }
  if (e == "=") {
    calulated = true;
    result = eval(act.innerText);
    res.innerText = "﹦" + result;
    return;
  }
  if (
    ["+", "-", "*", "/"].includes(e) &&
    ["+", "-", "*", "/"].includes(act.innerText.slice(-1))
  ) {
    console.log(act.innerText.slice(0, -1));
    act.innerText = act.innerText.slice(0, -1) + e;
    return;
  }
  if (e == "Del") {
    act.innerText = act.innerText.slice(0, -1);
    return;
  }
  if (calulated) {
    act.innerText = result;
    res.innerText = "";
    calulated = false;
  }
  act.innerText += e;
}

// set get update
// remove(ref(db, "/user/1"))

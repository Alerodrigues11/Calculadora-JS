const clear = document.getElementById('clear');
const equal = document.getElementById('equal');
const keys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "];

import { calculate, clearAll } from "./calc.js";
import { theme } from "./theme.js";
import { clipBoardAll, clipBoard } from "./clipboard.js";

const allKeys = document.querySelectorAll('.charKey').forEach(function (allKeysBtn) {
  allKeysBtn.addEventListener('click', function() {
    input.value += allKeysBtn.dataset.value
    return
  })
})

input.addEventListener('keydown', function(ev) {
  ev.preventDefault()
  if(keys.includes(ev.key)) {
    input.value += ev.key
    return
  }

  if(ev.key === "Backspace") {
    input.value = input.value.slice(0, -1)
    return
  }

  if(ev.key === "Enter") {
    calculate()
  }
})

clear.addEventListener('click', clearAll);

equal.addEventListener('click', calculate);


// DARK/LIGHT THEME

const switchTheme = document.getElementById('themeSwitcher').addEventListener('click', theme);

// CLIPBOARD
clipBoard.addEventListener('click', clipBoardAll);
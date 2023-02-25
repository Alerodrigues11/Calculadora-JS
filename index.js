const main = document.querySelector('main')
const root = document.querySelector(':root')
const input = document.getElementById('input')
const clear = document.getElementById('clear')
const equal = document.getElementById('equal')
const result = document.getElementById('result')
const clipBoard = document.getElementById('copyToClipboard')
const keys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]

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

clear.addEventListener('click', function() {
  input.value = ''
  input.focus()
})

equal.addEventListener('click', calculate)

function calculate() {
  
  result.value = 'ERROR'
  result.classList.add('error')

  result.value = eval(input.value)
  result.classList.remove('error')
}

// DARK/LIGHT THEME

const switchTheme = document.getElementById('themeSwitcher').addEventListener('click', function () {
  if(main.dataset.theme == "dark") {
    root.style.setProperty('--bg-color', '#f1f5f9')
    root.style.setProperty('--border-color', '#aaa')
    root.style.setProperty('--font-color', '#212529')
    root.style.setProperty('--primary-color', '#26834a')
    main.dataset.theme = "light"

  } else {
    root.style.setProperty('--bg-color', '#212529')
    root.style.setProperty('--border-color', '#666')
    root.style.setProperty('--font-color', '#f1f5f9')
    root.style.setProperty('--primary-color', '#4dff91')
    main.dataset.theme = "dark"
  }
})

// CLIPBOARD
clipBoard.addEventListener('click', function(ev) {
  const button = ev.currentTarget
  if (button.innerText === 'Copy') {
    button.innerText = 'Copied!'
    button.classList.add('success')

    navigator.clipboard.writeText(result.value)
  } else if (button.innerText === 'Copied!') {
    button.innerText = 'Copy'
    button.classList.remove('success')

  }

})
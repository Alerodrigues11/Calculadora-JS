const result = document.getElementById('result');
const input = document.getElementById('input');

function calculate() {
  
  result.value = 'ERROR';
  result.classList.add('error');

  result.value = eval(input.value);
  result.classList.remove('error');
}

function clearAll() {
  input.value = '';
  input.focus();
}

export { calculate, clearAll }
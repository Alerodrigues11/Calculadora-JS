const clipBoard = document.getElementById('copyToClipboard');

function clipBoardAll(ev) {
  const button = ev.currentTarget
  if (button.innerText === 'Copy') {
    button.innerText = 'Copied!'
    button.classList.add('success')

    navigator.clipboard.writeText(result.value)
  } else if (button.innerText === 'Copied!') {
    button.innerText = 'Copy'
    button.classList.remove('success')

  }
}

export { clipBoardAll, clipBoard }
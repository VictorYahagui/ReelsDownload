const form = document.getElementById('link-form')

form.onsubmit = (event) => {
  event.preventDefault()
  const linkInput = document.getElementById('link-input')

  console.log(linkInput.value)
}

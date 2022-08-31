const inputElement = document.querySelector("input")
const buttonElement = document.querySelector("form button")

buttonElement.onclick = ev =>{
  ev.preventDefault();
  console.log(inputElement.value)
}

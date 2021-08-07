const buttonX = document.querySelector('nav > button[one]')
const button3 = document.querySelector('nav > button[two]')
const navDiv  = document.querySelector('nav > div')

buttonX.addEventListener('click', () => {
       navDiv.style.height = "auto"
       buttonX.style.display = "none"
       button3.style.display = "flex"
})

button3.addEventListener('click', () => {
       navDiv.style.height = 0
       buttonX.style.display = "flex"
       button3.style.display = "none"
})
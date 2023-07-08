const btn = document.getElementById('menu-btn')
const nav = document.getElementById('menu')

btn.addEventListener('click', () =>{
btn.classList.toggle('open')
// show menu
nav.classList.toggle('flex')
// hide menu
nav.classList.toggle('hidden')
}) 
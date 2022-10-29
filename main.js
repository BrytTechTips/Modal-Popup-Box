let box = document.querySelector('.box')
let toggle = document.querySelector('.toggle')

toggle.onclick = function(){
    box.classList.toggle('open')
    toggle.classList.toggle('open')
    
}
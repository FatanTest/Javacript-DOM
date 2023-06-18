// The text
// t = text
let tBlank = ""
let tPress = "just press me!"
let tClick = "click everywhere to hide!" 
let tHide = "click to hide!"

let memory = 0

// collect the document
const btnholder = document.querySelector('.btn-holder')
const mainBtn = document.querySelector('#main-btn')
const popUpHolder = document.querySelector('.popup-holder')
const textHolder = document.querySelector('.text-holder')
const mainText = document.querySelector('#text')
const closeHolder = document.querySelector('close-holder')
const close = document.querySelector('.close-symbol')

// Button press
mainBtn.onclick = function(){
    popUpHolder.style.display = 'flex'
    memory = 1
}

// Mouseenter function
mainBtn.addEventListener('mouseenter', function(){
    if (memory === 0){
        mainBtn.textContent = tPress
    }
})
mainBtn.addEventListener('mouseleave', function(){
    if (memory === 0){
        mainBtn.textContent = tBlank
    }
})

window.addEventListener('mouseover', function(e){
    if (e.target !== mainBtn && e.target !== textHolder && e.target !== mainText && memory === 1){
        mainBtn.textContent = tHide
    } else if (memory === 1 && e.target === mainBtn || e.target === textHolder || e.target === mainText ){
        mainBtn.textContent = tClick
    }
    console.log('mouseover', e.target)
})

// Hide function
window.addEventListener('click', function(e){
    if (e.target !== mainBtn && e.target !== textHolder && e.target !== mainText && memory === 1){
        popUpHolder.style.display = 'none'
        mainBtn.textContent = tBlank
        memory = 0
    }
    console.log(e)
})
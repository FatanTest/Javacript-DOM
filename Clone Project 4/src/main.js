const timerEl = document.getElementById('timer')
let playStopBtn = document.getElementById('play')
const restartBtn = document.getElementById('restart')
let playStopIcon = document.getElementById('play-icon')
const restarIcon = document.getElementById('restart-icon')

let timerStatusOn = false
let timerInterval = null

let milisecond100 = 0
let seconds = 0
let minutes = 0
let hours = 0

let leadingSeconds = 0
let leadingMinutes = 0
let leadingHours = 0

function stopWatch(){
    milisecond100++
    if (milisecond100 === 10){
        milisecond100 = 0
        seconds++
    }

    if (seconds === 60){
        seconds = 0
        minutes++
    }

    if (minutes === 60){
        minutes = 0
        hours++
    }

    if (seconds < 10){
        leadingSeconds = `0${seconds.toString()}`
    } else {
        leadingSeconds = seconds.toString()
    }
    if (minutes < 10){
        leadingMinutes = `0${minutes.toString()}`
    } else {
        leadingMinutes = minutes.toString()
    }
    if (hours < 10){
        leadingHours = `0${hours.toString()}`
    } else {
        leadingHours = hours.toString()
    }

    timerEl.textContent = `${leadingHours}:${leadingMinutes}:${leadingSeconds}.${milisecond100.toString()}`
}

playStopBtn.addEventListener('click', function(){
    if (timerStatusOn === false){
        timerStatusOn = true
        playStopIcon.textContent = "stop"
        playStopIcon.setAttribute('id', 'stop-icon')
        playStopBtn.setAttribute('id', 'stop')
        playStopBtn = document.getElementById('stop')
        timerInterval = window.setInterval(stopWatch, 100)
    } else {
        timerStatusOn = false
        playStopIcon.textContent = "play_arrow"
        playStopIcon.setAttribute('id', 'play-icon')
        playStopBtn.setAttribute('id', 'play')
        playStopBtn = document.getElementById('play')
        window.clearInterval(timerInterval)
    }
})

// TODO:
// We need add some flag btn

restarIcon.addEventListener('mousedown', function(){
    restarIcon.style.transform = 'scale(1.3)'
    if (timerStatusOn === false){
        milisecond100 = 0
        minutes = 0
        seconds = 0
        hours = 0
        timerEl.textContent = "00:00:00"
        window.clearInterval(timerInterval)
    } else {
        milisecond100 = 0
        minutes = 0
        seconds = 0
        hours = 0
        timerEl.textContent = "00:00:00.0"
    }
})
restarIcon.addEventListener('mouseup', function(){
    restarIcon.style.transform = 'scale(1)'
})
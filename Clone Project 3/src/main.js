const accordionHolder = document.getElementsByClassName('accordion-holder')
const accordionQuestion = document.getElementsByClassName('question')

for (let i = 0; i < accordionHolder.length; i++){
    accordionHolder[i].onclick = function(){
        this.classList.toggle('active')
    }
}



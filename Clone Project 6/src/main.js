const inputText = document.getElementById('input-text')
const addBtn = document.getElementById('add-btn')
const todoHolder = document.querySelector('.todo-holder')

addBtn.addEventListener('click', function(){
   if (inputText.value === ''){
      alert('Please Enter a Task')
   } else {
      const taskHolder = document.createElement('div')
      const task = document.createElement('p')
      const doneBtn = document.createElement('button')
      const removeBtn = document.createElement('button')
      
      taskHolder.className = 'task-holder'
      task.className = 'task-p'
      doneBtn.className = 'done-btn'
      removeBtn.className = 'remove-btn'

      task.innerHTML = inputText.value

   
      todoHolder.appendChild(taskHolder)
      taskHolder.appendChild(task)
      taskHolder.appendChild(doneBtn)
      taskHolder.appendChild(removeBtn)
   
      doneBtn.innerHTML = `<span class="material-symbols-outlined">check</span>`
      removeBtn.innerHTML = `<span class="material-symbols-outlined">remove</span>`
   
      inputText.value = ''
      removeBtn.addEventListener('click', function(e){
         if (e.target === removeBtn){
            e.target.parentElement.remove()
         } else {
            e.target.parentElement.parentElement.remove()
         }
      })

      doneBtn.addEventListener('click', function(){
         task.style.textDecoration = 'line-through'
      })
   }
})


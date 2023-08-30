'use strict'
{
  class ToDo {
    constructor(elementId){
      this.todos = []
      const string = localStorage.getItem('todos')

      if(string !== null){
        this.todos = JSON.parse(string)
      }
      this.elementId = elementId
    }

    
    add(title){
      this.createCheckbox(title)
      getMaxId()
      const obj = {id: maxId + 1, title: title, isCompleted: false}
      this.todos.push(obj)
      localStorage.setItem('todos', JSON.stringify(this.todos))
    }

    createCheckbox(title){
      const taskCheckbox = document.createElement('input')
      taskCheckbox.type = 'checkbox'
      taskCheckbox.addEventListener('change',() => {
        console.log(taskCheckbox.checked)
      })
      
      const taskTitle = document.createTextNode(title)
      // taskTitle.textContent = title
      
      const deleteButton = document.createElement('button')
      deleteButton.textContent = 'X'
      deleteButton.setAttribute('id','delete')
      
      const taskLabel = document.createElement('label')
      taskLabel.appendChild(taskCheckbox)
      taskLabel.appendChild(taskTitle)
      taskLabel.appendChild(deleteButton)
      
      const todosElement = document.getElementById(this.elementId)
      todosElement.appendChild(taskLabel)
    }


  }
  
  const todo = new ToDo('todos')
  const todos = todo.todos
  todos.forEach(t => {
    todo.createCheckbox(t.title)
  })

  let maxId;
  const getMaxId = () => {
    const idArray = []
      todos.forEach(t => {
        idArray.push(t.id)
      })
      if(idArray.length == 0){
        maxId = 0
      } else {
        maxId = Math.max(...idArray)
      }
  }
  
  const form = document.getElementById('todo_form')
  const addButton = document.getElementById('addButton')
  addButton.addEventListener('click', () => {
    todo.add(form.value)
  })
}

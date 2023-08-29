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
      this.todos.push({id: 2, title: title, isCompleted: false})
      localStorage.setItem('todos', JSON.stringify(this.todos))
    }

    createCheckbox(title){
      const taskCheckbox = document.createElement('input')
      taskCheckbox.type = 'checkbox'
      
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
  
  const form = document.getElementById('todo_form')
  const addButton = document.getElementById('addButton')
  addButton.addEventListener('click', () => {
    todo.add(form.value)
  })
}

'use strict'
{
  class ToDo {
    constructor(elementId){
      this.todos = []
      const string = localStorage.getItem('todos')
      if(string !== null){
        this.todos = string.split(',')
      }
      this.elementId = elementId
    }

    add(title){
    
      this.createCheckbox(title)
      this.todos.push({id: 2, title: title, isCompleted: false})
      localStorage.setItem('todos', JSON.stringify(this.todos))
    }

    createCheckbox(title){
      this.todosElement = document.getElementById(this.elementId)
      this.label = document.createElement('label')
      this.input = document.createElement('input')
      this.input.type = 'checkbox'
      this.title = document.createTextNode(todo.todos)
      this.deleteButton = document.createElement('button')
      this.deleteButton.textContent = 'X'
      this.deleteButton.setAttribute('id','delete')
      this.label.appendChild(this.input)
      this.label.appendChild(this.title)
      this.label.appendChild(this.deleteButton)
      this.todosElement.appendChild(this.label)
      
      this.title.textContent = title
      
    }
  }
  const todo = new ToDo('todos')

  const form = document.getElementById('todo_form')
  const addButton = document.getElementById('addButton')
  addButton.addEventListener('click', () => {
    todo.add(form.value)
  })
}

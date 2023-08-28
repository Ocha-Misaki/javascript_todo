'use strict'
{
  class ToDo {
    constructor(){
      this.todos = []
      const string = localStorage.getItem('todos')
      this.todos = string.split(',')
    }

    add(title){
      this.obj = {}
      this.obj.id = 2
      this.obj.title = title
      this.obj.isCompleted = false
      this.todos.push(this.obj)
      localStorage.setItem('todos',this.todos)
    }

    createCheckbox(){
      this.todosElement = document.getElementById('todos')
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
      
      
        this.title.textContent = this.obj.title
      
    }
  }
  const todo = new ToDo()

  const form = document.getElementById('todo_form')
  const addButton = document.getElementById('addButton')
  addButton.addEventListener('click', () => {
    todo.add(form.value)
    todo.createCheckbox()
  })
}

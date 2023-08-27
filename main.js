'use strict'
{
  class ToDo {
    constructor(){
      this.todos = []
      const string = localStorage.getItem('todos')
      this.todos = string.split(',')
    }

    add(title){
      this.todos.push(title)
      localStorage.setItem('todos',this.todos)
    }

    createCheckbox(){
      this.todosElement = document.getElementById('todos')
      this.label = document.createElement('label')
      this.input = document.createElement('input')
      this.title = document.createTextNode(todo.todos)
      this.input.type = 'checkbox'
      
      this.label.appendChild(this.input)
      this.label.appendChild(this.title)
      this.todosElement.appendChild(this.label)
      
      this.todos.forEach(todo => {
        this.title.textContent = todo
      })
    }

    makeList(){
      this.obj = {}
      this.todos.push(this.obj)
    }
  }
  const todo = new ToDo()

  const form = document.getElementById('todo_form')
  const addButton = document.getElementById('addButton')
  addButton.addEventListener('click', () => {
    todo.add(form.value)
    todo.createCheckbox()
    todo.makeList()
  })
}

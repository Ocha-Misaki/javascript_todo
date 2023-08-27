'use strict'
{

  const form = document.getElementById('todo_form')
  const addButton = document.getElementById('addButton')
  
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
  }
  const todo = new ToDo()

  // const todos = document.getElementById('todos')
  // const label = document.createElement('label')
  // const input = document.createElement('input')
  // const title = document.createTextNode(todo.todos)
  // input.type = 'checkbox'
  
  // label.appendChild(input)
  // label.appendChild(title)
  // todos.appendChild(label)
  // input.textContent = todo.todos
  
  
  addButton.addEventListener('click', () => {
    todo.add(form.value)
    todo.createCheckbox()
  })
  
  
  
  
  //formに入力された値を取得する
}
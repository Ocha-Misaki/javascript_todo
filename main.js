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
      //formに入力された値を保存する
      localStorage.setItem('todos',this.todos)

    }
  }
  const todo = new ToDo()
  const todos = document.getElementById('todos')
  const label = document.createElement('label')
  const input = document.createElement('input')
  const title = document.createTextNode(todo.todos)
  input.type = 'checkbox'
  label.appendChild(input)
  label.appendChild(title)
  todos.appendChild(label)
  // label.textContent = todo.todos
  
  
  addButton.addEventListener('click', () => {
    todo.add(form.value)
    label.textContent = todo.todos
  })
  
  
  
  
  //formに入力された値を取得する
}
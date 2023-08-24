'use strict'
{

  const form = document.getElementById('todo_form')
  const addButton = document.getElementById('addButton')
  class ToDo {
    constructor(){
      this.todos = []
    }
    add(title){
      this.todos.push(title)
      //formに入力された値を保存する
    }
  }
  const todo = new ToDo()
  const todos = document.getElementById('todos')
  addButton.addEventListener('click', () => {
    console.log(form.value)
    todo.add(form.value)
    todos.textContent = todo.todos
  })
  
  
  
  
  //formに入力された値を取得する
}
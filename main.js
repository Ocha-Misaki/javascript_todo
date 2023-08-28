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

    createCheckbox(title) {
      // ”インスタンス変数” (this.xxx みたいなやつ)は少ないほうが使いやすくなる
      // ”ローカル変数” はこの関数内（スコープといいます）でのみ有効（不具合があったときにデバッグしやすい）
      // ローカル変数を使う
      const taskCheckBox = document.createElement('input')
      taskCheckBox.type = 'checkbox'
      
      const taskTitle = document.createTextNode(title)
      taskTitle.textContent = title
      
      const deleteButton = document.createElement('button')
      deleteButton.textContent = 'X'
      deleteButton.setAttribute('id', 'delete')
      
      const taskLabel = document.createElement('label')
      taskLabel.appendChild(taskCheckBox)
      taskLabel.appendChild(taskTitle)
      taskLabel.appendChild(deleteButton)

      // 変数は使う直前に定義するとよい（todosElement のスコープが小さくなるため）
      const todosElement = document.getElementById(this.elementId)
      todosElement.appendChild(taskLabel)
    }
  }
  const todo = new ToDo('todos')

  const form = document.getElementById('todo_form')
  const addButton = document.getElementById('addButton')
  addButton.addEventListener('click', () => {
    todo.add(form.value)
  })
}

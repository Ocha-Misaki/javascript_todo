'use strict'
{
  class ToDo {
    constructor(elementId) {
      this.todos = []
      const string = localStorage.getItem('todos')

      if (string !== null) {
        this.todos = JSON.parse(string)
      }
      this.elementId = elementId
    }

    add(title) {
      const task = { id: generateTaskId(), title: title, isCompleted: false }
      this.todos.push(task)
      localStorage.setItem('todos', JSON.stringify(this.todos))
      this.createCheckbox(task)
    }

    createCheckbox(task) {
      const taskCheckbox = document.createElement('input')
      taskCheckbox.type = 'checkbox'
      taskCheckbox.checked = task.isCompleted
      taskCheckbox.addEventListener('change', () => {
        const checkedId = (t) => t.id == task.id
        const i = this.todos.findIndex(checkedId)
        this.todos[i].isCompleted = taskCheckbox.checked
        localStorage.setItem('todos', JSON.stringify(this.todos))
        //削除のスタイルが当たるようにする
      })
      const taskTitle = document.createTextNode(task.title)
      const deleteButton = document.createElement('button')
      deleteButton.textContent = 'X'
      deleteButton.setAttribute('id', 'delete')
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
  todos.forEach((t) => {
    todo.createCheckbox(t)
  })

  const generateTaskId = () => {
    const idArray = []
    let maxId
    todos.forEach((t) => {
      idArray.push(t.id)
    })
    if (idArray.length == 0) {
      maxId = 0
    } else {
      maxId = Math.max(...idArray)
    }
    return maxId + 1
    // return todos.length === 0 ? 0 : Math.max(todos.map(task => task.id))
    //↑の実装について確認する
  }

  const form = document.getElementById('todo_form')
  const addButton = document.getElementById('addButton')
  addButton.addEventListener('click', () => {
    todo.add(form.value)
  })

  //deleteボタンを押した時の実装を作成する

  //purgeボタンを押した時の実装を作成する
}

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
      getMaxId()
      const task = {id: generateTaskId(), title: title, isCompleted: false}
      this.todos.push(task)
      localStorage.setItem('todos', JSON.stringify(this.todos))
      this.createCheckbox(title)
    }

    createCheckbox(title){
      const taskCheckbox = document.createElement('input')
      taskCheckbox.type = 'checkbox'
      taskCheckbox.addEventListener('change',() => {
        if(taskCheckbox.checked === true){
          //isCompleted = trueのようにしたい
        }
      })
      
      
      const taskTitle = document.createTextNode(title)
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
  const generateTaskId = () => {
    const idArray = []
      todos.forEach(t => {
        idArray.push(t.id)
      })
      if(idArray.length == 0){
        maxId = 0
      } else {
        maxId = Math.max(...idArray)
      }
    // return todos.length === 0 ? 0: Math.max(todos.map(task => task.id))
    //↑の実装について確認する
  }

  const form = document.getElementById('todo_form')
  const addButton = document.getElementById('addButton')
  addButton.addEventListener('click', () => {
    todo.add(form.value)
  })
}

import useStore from "../store"
import React from "react"

export function Todo({ todo }) {
  //   const todos = useStore(store => store.todos)
  const changeCompleted = useStore(store => store.changeCompleted)
  const deleteTodo = useStore(store => store.deleteTodo)

  let status = todo.completed ? "Done" : "To do"

  function toggleStatus() {
    todo.completed = !todo.completed
    console.log(todo.completed)
    let updatedTodo = { ...todo, completed: todo.completed }
    changeCompleted(updatedTodo)
  }

  function strikeThrough() {
    return todo.completed ? "strikeThrough" : null
  }

  return (
    <li>
      <h2 className={strikeThrough()}>{todo.title}</h2>
      <p className={strikeThrough()}>{todo.body}</p>
      <button onClick={() => toggleStatus()}>{status}</button>
      <button onClick={() => deleteTodo(todo)}>X</button>
    </li>
  )
}

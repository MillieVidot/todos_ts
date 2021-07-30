import useStore from "../store"
import { Todo } from "./Todo"
import React, { useEffect } from "react"

export function TodosList() {
  const todos = useStore(store => store.todos)
  const fetchTodos = useStore(store => store.fetchTodos)

  useEffect(() => {
    fetchTodos()
  }, [])

  return (
    <>
      <h2>Todos List</h2>
      <ul>
        {todos.map(todo => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </ul>
    </>
  )
}

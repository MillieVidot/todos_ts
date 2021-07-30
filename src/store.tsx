import create from "zustand"
import React from "react"

const useStore = create((set, get) => ({
  todos: [],
  fetchTodos: () =>
    fetch("http://localhost:4000/todos")
      .then(resp => resp.json())
      .then(resp => set({ todos: resp })),

  changeCompleted: updatedTodo => {
    let id = updatedTodo.id
    fetch(`http://localhost:4000/todos/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...updatedTodo }),
    })
      .then(
        set({
          todos: get().todos.map(todo => {
            if (todo.id === updatedTodo.id) {
              return updatedTodo
            } else {
              return todo
            }
          }),
        })
      )
      .then(resp => resp.json())
      .then(resp => console.log("patch", resp))
  },
  addNewTodo: newTodo => {
    fetch("http://localhost:4000/todos/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTodo),
    })
      // .then(resp => resp.json())
      .then(get().fetchTodos())
      .catch(error => {
        console.error("error", error)
      })
  },
  deleteTodo: todoToDelete => {
    let id = todoToDelete.id
    fetch(`http://localhost:4000/todos/${id}`, {
      method: "DELETE",
    })
      .then(
        set({ todos: get().todos.filter(todo => todo.id !== todoToDelete.id) })
      )
      .then(console.log("todos leftover", get().todos))
      .then(console.log("todo deleted", todoToDelete))
  },
}))

export default useStore

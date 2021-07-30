import useStore from "../store"
import React, { useState } from "react"

export function Form() {
  const addNewTodo = useStore(store => store.addNewTodo)
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")

  function handleChange(event) {
    setTitle(event.target.value)
  }

  function handleChangeBody(event) {
    setBody(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault()
    let newTodo = {
      title: event.target.todoTitle.value,
      body: event.target.actualTodo.value,
      completed: false,
    }
    addNewTodo(newTodo)
    setTitle("")
    setBody("")
    event.target.reset()
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="todoTitle">
        <h1>TODO TITLE</h1>
      </label>

      <input
        type="text"
        id="todoTitle"
        name="todoTitle"
        value={title}
        onChange={handleChange}
        size="50"
      ></input>

      <label htmlFor="actualTodo">
        <h1>WRITE YOUR TODO HERE</h1>
      </label>

      <input
        type="text"
        id="actualTodo"
        name="actualTodo"
        value={body}
        onChange={handleChangeBody}
        size="50"
      ></input>

      <button
        onClick={() => {
          console.log(
            "you clicked me - now add this to state so it appears below"
          )
        }}
      >
        Add
      </button>
    </form>
  )
}

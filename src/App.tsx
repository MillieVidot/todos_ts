import React, { useState } from "react"
import "./App.css"

import { Form } from "./components/Form"
import { TodosList } from "./components/TodosList"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import { Test } from "./pages/Test"

function App() {
  return (
    <Router>
      <div>
        <Route path="/" exact>
          <Form />
        </Route>
        <Route path="/" exact>
          <TodosList />
        </Route>
        <Route path="/Test">
          <Test />
        </Route>
      </div>
    </Router>
  )
}

export default App

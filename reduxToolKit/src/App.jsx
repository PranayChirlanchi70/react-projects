import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './components/AddTodo'
import Todo from './components/Todo'

function App() {
  

  return (
    <>
    <AddTodo />
    <Todo />
      
    </>
  )
}

export default App

// functinallty sould go to reducers
// redux-toolkit we can define store easyly
// we first create store we can take nessary things from store
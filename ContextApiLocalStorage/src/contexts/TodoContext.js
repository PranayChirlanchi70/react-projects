import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "todo msg",
            completed: false
        }
    ],

    addTodo: (todo) => {},

    updateTodo: (id, todo) => {},

    deleteTodo: (id) => {},

    toggleComplete: (id, todo) => {}


})


export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider
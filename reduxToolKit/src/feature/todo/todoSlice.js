import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, text: "Hello world" }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    //  in reducers comes with  properties and functions
    // in addTodo it takes "state" and "action"
    addTodo: (state, action) => {
      const todo = { id: nanoid(), text: action.payload };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },

    // updateTodo : (state, action) => {
    //     const {id, newText} = action.payload;
    //     const todoToUpdate =state.todos.find((todo) => todo.id === id)
    //     if(todoToUpdate){
    //         todoToUpdate.text = newText
    //     }
    // },

    // deleteTodo : (state, action) =>{
    //     const idToDelet = action.payload
    //     state.todos = state.todos.filter((todo) => todo.id !== idToDelet)

    // }
  },
});

export const {addTodo, removeTodo} = todoSlice.actions

export default todoSlice.reducer

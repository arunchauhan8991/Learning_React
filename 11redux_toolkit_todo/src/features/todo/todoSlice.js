import { createSlice, nanoid } from "@reduxjs/toolkit";


const initialState = {
    todos: [{ id: 1, text: "Hello World" }]
}


export const todoSlice = createSlice({
    name: "todo",
    initialState, // can write initialState directly here
    reducers: {
        //in context api we are just witing function name but here we can write functionality tooo

        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            } 
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((item) => item.id !== action.payload )
        }
    }  

})

export const { addTodo, removeTodo } = todoSlice.actions // exporting inividual functionality

export default todoSlice.reducer
import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice(
    {
        name: "funny",
        initialState: {
            todos: [],
        },
        reducers: {
            addTodo: (state, action) => {
                state.todos.push(action.payload);
            },
            removeTodo: (state, action) => {
                state.todos = state.todos.filter(todo => todo.id !== action.payload);
            },
            updateTodo: (state, action) => {
                state.todos = state.todos.map(todo => {
                    if (todo.id === action.payload.id) {
                        return action.payload;
                    }
                    return todo;
                });
            },
        },
    },
)

export const { addTodo, removeTodo, updateTodo, checker } = todoSlice.actions
export const todosReducer = todoSlice.reducer
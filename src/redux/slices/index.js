import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: []
    },
    reducers: {
        addTodoToStore: (state, { payload }) => {
            return { ...state, todos: [...state.todos, payload] };
        }
    }
});

export const { addTodoToStore } = todoSlice.actions;
// 1. configure store from redux toolkit
import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../feature/todo/todoSlice';

export const store = configureStore({
    reducer: todoReducer
})
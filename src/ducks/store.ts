import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import { counterReducer } from './counterSlice'
import { todoReducer } from './todoSlice'

const reducer = combineReducers({
  counter: counterReducer,
  todo: todoReducer,
})
export type RootState = ReturnType<typeof reducer>
export const store = configureStore({ reducer })

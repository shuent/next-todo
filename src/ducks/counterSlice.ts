import { createSlice } from '@reduxjs/toolkit'

const initialState = { number: 0 }

const counterSlice = createSlice({
  name: 'count',
  initialState,
  reducers: {
    increment: (state) => {
      state.number++
    },
    decrement: (state) => {
      state.number--
    },
  },
})

export const { increment, decrement } = counterSlice.actions
export const counterReducer = counterSlice.reducer

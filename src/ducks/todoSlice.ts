import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type TodoState = {
  taskName: string
  done: boolean
}

const initialState: TodoState[] = [
  { taskName: 'initial task', done: true },
  { taskName: 'second initial task', done: false },
]

const todoSlice = createSlice({
  name: 'todo',
  initialState: initialState,
  reducers: {
    addTask: (state, action: PayloadAction<TodoState>) => {
      state.push(action.payload)
    },
    toggleDone: (state, action: PayloadAction<number>) => {
      state[action.payload].done = !state[action.payload].done
    },
    deleteTask: (state, action: PayloadAction<number>) => {
      state.splice(action.payload, 1)
    },
  },
})

export const { addTask, toggleDone, deleteTask } = todoSlice.actions
export const todoReducer = todoSlice.reducer

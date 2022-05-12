import { createSlice } from '@reduxjs/toolkit'

interface CounterState {
  counter: number
}

const initialState: CounterState = {
  counter: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.counter = state.counter + 1
    },
    decrement: (state) => {
      state.counter = state.counter - 1
    },
    reset: () => initialState,
  },
})

export const { increment, decrement, reset } = counterSlice.actions
export default counterSlice.reducer

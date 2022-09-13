import { createSlice } from '@reduxjs/toolkit'

export const events = createSlice({
  name: 'events',
  initialState: {
    value: "",
  },
  reducers: {
    increment: (state) => {
    },
    decrement: (state) => {
    },
    incrementByAmount: (state, action) => {
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = events.actions

export default events.reducer
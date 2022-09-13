import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../store'

interface EventText {
  value: String,
}
const initialState: EventText = {
  value: "",
}

export const events = createSlice({
  name: 'events',
  initialState,
  reducers: {
    addEventText: (state) => {

    },
    deleteEventText: (state) => {
    },
  },
})

// Action creators are generated for each case reducer function
export const { addEventText, deleteEventText } = events.actions
export const selectCount = (state: RootState) => state.events.value
export default events.reducer
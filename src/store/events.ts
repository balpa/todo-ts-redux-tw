import { createSlice } from '@reduxjs/toolkit'
import { PayloadAction } from '@reduxjs/toolkit'

const initialState = {
  value: "",
  time: Date.now(),
  isCompleted: false
} as EventInfo

export const eventSlice = createSlice({
  name: 'eventSetter',
  initialState,
  reducers: {
    addEventText: (state, action) => action.payload,
    deleteEventText: (state, action) => action.payload,
    addEventWithPayload: (state, action: PayloadAction<String>) => {
      state.value = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { addEventText, deleteEventText, addEventWithPayload } = eventSlice.actions
export default eventSlice.reducer
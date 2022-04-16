import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  offersHeadlines: [],
}

export const offersHeadlineSlice = createSlice({
  name: 'offersHeadline',
  initialState,
  reducers: {
    addOffersHeadlines: (state, action) => {
      state.offersHeadlines = action.payload;
    },
  },
})

export const { addOffersHeadlines } = offersHeadlineSlice.actions

export default offersHeadlineSlice.reducer
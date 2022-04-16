import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  slides: [],
}

export const heroSlice = createSlice({
  name: 'hero',
  initialState,
  reducers: {
    addHeroSlides: (state, action) => {
      state.slides = action.payload;
    },
  },
})

export const { addHeroSlides } = heroSlice.actions

export default heroSlice.reducer
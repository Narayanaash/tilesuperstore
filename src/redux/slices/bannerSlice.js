import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  banners: [],
}

export const bannerSlice = createSlice({
  name: 'banner',
  initialState,
  reducers: {
    addBanners: (state, action) => {
      state.banners = action.payload;
    },
  },
})

export const { addBanners } = bannerSlice.actions

export default bannerSlice.reducer
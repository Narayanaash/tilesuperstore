import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  deals: [],
}

export const dealSlice = createSlice({
  name: 'deal',
  initialState,
  reducers: {
    addDeals: (state, action) => {
      state.deals = action.payload;
    },
  },
})

export const { addDeals } = dealSlice.actions

export default dealSlice.reducer
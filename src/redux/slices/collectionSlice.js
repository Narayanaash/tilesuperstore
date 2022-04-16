import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  collections: [],
}

export const collectionSlice = createSlice({
  name: 'collection',
  initialState,
  reducers: {
    addCollections: (state, action) => {
      state.collections = action.payload;
    },
  },
})

export const { addCollections } = collectionSlice.actions

export default collectionSlice.reducer
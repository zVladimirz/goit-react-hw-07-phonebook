import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'contacts',
  initialState: {
    filter: '',
  },
  reducers: {
    filterСhange(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { filterСhange } = filterSlice.actions;

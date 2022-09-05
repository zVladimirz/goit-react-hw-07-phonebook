import { createSlice } from '@reduxjs/toolkit';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  },
  reducers: {
    filterСhange(state, action) {
      state.filter = action.payload;
    },
    contactInit(state, action) {
      state.items.splice(0, state.items.length);
      state.items.push(...action.payload);
    },
    contactAdd(state, action) {
      state.items.push(action.payload);
      localStorage.setItem('contacts', JSON.stringify(state.items));
    },
    contactDel(state, action) {
      const index = state.items.findIndex(n => n.id === action.payload);
      if (index !== -1) {
        state.items.splice(index, 1);
      }
      localStorage.setItem('contacts', JSON.stringify(state.items));
    },
  },
});

export const { filterСhange, contactInit, contactAdd, contactDel } =
  contactsSlice.actions;

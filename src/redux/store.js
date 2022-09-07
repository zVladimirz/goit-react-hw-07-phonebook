import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { filterSlice } from './filterSlice';
import { setupListeners } from '@reduxjs/toolkit/query';
import { contactsApi } from './contactSlice';

export const store = configureStore({
  reducer: {
    contacts: filterSlice.reducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,

    logger,
  ],
});
setupListeners(store.dispatch);

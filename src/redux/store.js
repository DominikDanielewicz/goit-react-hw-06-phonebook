import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';
import { contactsMiddleware } from './middlewares';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    // filters: filtersReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(contactsMiddleware),
});

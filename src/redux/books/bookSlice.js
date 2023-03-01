import { v4 as uuidv4 } from 'uuid';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
};

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    AddBook: (state, { payload }) => {
      const newbook = {
        id: uuidv4(),
        title: payload.title,
        author: payload.author,
      };
      state.books.push(newbook);
    },
    RemoveBook: (state, { payload }) => {
      state.books.filter((book) => book.id !== payload);
    },
  },
});

export const { AddBook, RemoveBook } = bookSlice.actions;

export default bookSlice.reducer;

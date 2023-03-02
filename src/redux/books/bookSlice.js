import { v4 as uuidv4 } from 'uuid';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  bookItems: [
    {
      item_id: 'item1',
      title: 'The Great Gatsby',
      author: 'John Smith',
      category: 'Fiction',
    },
    {
      item_id: 'item2',
      title: 'Anna Karenina',
      author: 'Leo Tolstoy',
      category: 'Fiction',
    },
    {
      item_id: 'item3',
      title: 'The Selfish Gene',
      author: 'Richard Dawkins',
      category: 'Nonfiction',
    },
  ],
};

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    AddBook: (state, { payload }) => ({
      ...state,
      bookItems: [...state.bookItems, {
        item_id: uuidv4(),
        title: payload.title,
        author: payload.author,
      },
      ],
    }),
    RemoveBook: (state, { payload }) => {
      const newState = { ...state };
      return newState.books.filter((book) => book.id !== payload);
    },
  },
});

export const { AddBook, RemoveBook } = bookSlice.actions;

export default bookSlice.reducer;

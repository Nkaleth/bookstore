/* eslint-disable no-param-reassign */
import { v4 as uuidv4 } from 'uuid';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/mP2FLQP9kXHxPk2Ztptk/books';
const initialState = {
  bookItems: [],
  isLoading: false,
};

export const getBookItems = createAsyncThunk('books/getBookItems', async () => {
  try {
    const resp = await axios.get(url);
    return resp.data;
  } catch (error) {
    return error.message;
  }
});

export const addBookAPI = createAsyncThunk('books/addBookAPI', async (newBook) => {
  try {
    const resp = await axios.post(url, newBook); // newBook is the body
    return resp.data;
  } catch (error) {
    return error.message;
  }
});

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
    RemoveBook: (state, { payload }) => ({
      bookItems: state.bookItems.filter((item) => item.item_id !== payload),
    }),
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBookItems.fulfilled, (state, action) => {
        const bookArray = Object.entries(action.payload).map(([id, bookArray]) => {
          const book = bookArray[0];
          return { ...book, id };
        });
        state.isLoading = false;
        state.bookItems = bookArray;
      })
      .addCase(getBookItems.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBookItems.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { AddBook, RemoveBook } = bookSlice.actions;

export default bookSlice.reducer;

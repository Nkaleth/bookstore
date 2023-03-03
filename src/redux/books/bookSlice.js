/* eslint-disable no-param-reassign */
import { v4 as uuidv4 } from 'uuid';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/mP2FLQP9kXHxPk2Ztptk/books';
const initialState = {
  bookItems: [],
  isLoading: true,
};

export const getBookItems = createAsyncThunk('books/getBookItems', async () => {
  try {
    const resp = await axios(url);
    return resp.data;
  } catch (error) {}
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
    extraReducers: {
      [getBookItems.pending]: (state) => {
        state.isLoading = true;
      },
      [getBookItems.fulfilled]: (state, action) => {
        state.isLoading = false;
        state.bookItems = action.payload;
        console.log(action);
      },
      [getBookItems.rejected]: (state) => {
        state.isLoading = false;
      },
    },
  },
});

export const { AddBook, RemoveBook } = bookSlice.actions;

export default bookSlice.reducer;

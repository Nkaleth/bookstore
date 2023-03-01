import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    StatusCheck: (state) => {
      if (!state.categories) {
        return 'Under construction';
      }
      return state.categories;
    },
  },
});

export const { StatusCheck } = categoriesSlice.actions;

export default categoriesSlice.reducer;

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const loadData = createAsyncThunk('data/loadData', async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
});

const dataSlice = createSlice({
  name: 'data',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {
    addItem(state, action) {
      state.items.push(action.payload);
    },
    clearItems(state) {
      state.items = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loadData.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(loadData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { addItem, clearItems } = dataSlice.actions;

export default dataSlice.reducer;

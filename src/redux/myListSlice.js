import { createSlice } from "@reduxjs/toolkit";

const myListSlice = createSlice({
  name: "myList",
  initialState: [],
  reducers: {
    addToList: (state, action) => {
      const item = action.payload;

      const normalizedItem = {
        id: item.id,
        title: item.title || item.name || "Untitled",
        poster_path: item.poster_path || item.backdrop_path || null,
        type: item.type || (item.first_air_date ? "series" : "movie"),
        ...item
      };

      const exists = state.find(i => i.id === normalizedItem.id);
      if (!exists) {
        state.push(normalizedItem);
      }
    },
    removeFromList: (state, action) => {
      return state.filter(item => item.id !== action.payload);
    }
  }
});

export const { addToList, removeFromList } = myListSlice.actions;

export default myListSlice.reducer;

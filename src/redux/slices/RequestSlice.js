import { createSlice } from "@reduxjs/toolkit";

const requestSlice = createSlice({
  name: "request",
  initialState: [],
  reducers: {
    addRequests: (state, action) => action.payload || [],
    removeRequest: (state, action) => {
      const updatedRequests = state.filter((req) => {
        return req._id !== action.payload;
      });

      return updatedRequests;
    },
  },
});

export const { addRequests, removeRequest } = requestSlice.actions;

export default requestSlice.reducer;

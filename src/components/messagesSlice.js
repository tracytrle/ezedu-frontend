import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import getResponse from "./getResponse";

export const fetchBotResponse = createAsyncThunk(
  "messages/fetchBotResponse",
  async (searchTerm) => {
    const response = await getResponse(searchTerm);
    return { text: response, sender: "bot" };
  }
);

export const messagesSlice = createSlice({
  name: "messages",
  initialState: [],
  reducers: {
    addMessage: (state, action) => {
      state.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBotResponse.fulfilled, (state, action) => {
      state.push(action.payload);
    });
  },
});

export const { addMessage } = messagesSlice.actions;
export default messagesSlice.reducer;

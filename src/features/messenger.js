import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  chatBoxes: [],
  chatHistory: {},
};

const messengerSlice = createSlice({
  name: 'messenger',
  initialState,
  reducers: {
    addChatBox: (state, action) => {
      const isChatExists = state.chatBoxes
        .find((chat) => chat.socketId === action.payload.socketId);

      if (!isChatExists) {
        state.chatBoxes.push(action.payload);
      }
    },
    removeChatBox: (state, action) => {
      state.chatBoxes = state.chatBoxes
        .filter((chat) => chat.socketId !== action.payload);
    },
    addChatMessage: (state, action) => {
      const { socketId } = action.payload;

      if (state.chatHistory[socketId]) {
        state.chatHistory[socketId].push(action.payload);
      } else {
        state.chatHistory[socketId] = [{ ...action.payload }];
      }
    },
  },
});

export default messengerSlice.reducer;
export const { actions } = messengerSlice;

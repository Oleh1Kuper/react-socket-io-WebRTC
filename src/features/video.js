import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  inRoom: null,
  rooms: [],
  localStream: null,
  remoteStream: null,
  isMuted: true,
  isCameraOn: true,
};

const videoSlice = createSlice({
  name: 'videoRooms',
  initialState,
  reducers: {
    setInRoom: (state, action) => {
      state.inRoom = action.payload;
    },
    setRooms: (state, action) => {
      state.rooms = action.payload;
    },
    setLocalSteram: (state, action) => {
      state.localStream = action.payload;
    },
    setRemoteSteram: (state, action) => {
      state.remoteStream = action.payload;
    },
    toggleMute: (state, action) => {
      state.isMuted = action.payload;
    },
    toggleCameraOn: (state, action) => {
      state.isCameraOn = action.payload;
    },
  },
});

export default videoSlice.reducer;
export const { actions } = videoSlice;

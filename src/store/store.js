import { configureStore } from '@reduxjs/toolkit';
import mapReducer from '../features/map';
import messengerReducer from '../features/messenger';
import videoRoomsReducer from '../features/video';

const store = configureStore({
  reducer: {
    map: mapReducer,
    messenger: messengerReducer,
    videoRooms: videoRoomsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoreActions: [
        'videoRooms/setLocalSteram',
        'videoRooms/setRemoteSteram',
      ],
      ignoredPaths: ['videoRooms.remoteStream', 'videoRooms.localStream'],
    },
  }),
});

export default store;

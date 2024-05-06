import { v4 as uuidv4 } from 'uuid';
import store from '../store';
import { actions as videoRoomsActions } from '../../features/video';
import * as socketConnection from '../../socket/socket';
import {
  disconnect,
  getAccessToLocalStream,
  getPeerId,
} from '../../utils/webRTCHandler';

export const createVideoRoom = async () => {
  try {
    await getAccessToLocalStream();

    const newRoomId = uuidv4();

    store.dispatch(videoRoomsActions.setInRoom(newRoomId));
    socketConnection.createVideoRoom({
      peerId: getPeerId(),
      newRoomId,
    });
  } catch (error) {
    throw error;
  }
};

export const videoRoomsHandler = (roomData) => {
  store.dispatch(videoRoomsActions.setRooms(roomData));
};

export const joinVideoRoom = async (roomId) => {
  try {
    await getAccessToLocalStream();

    store.dispatch(videoRoomsActions.setInRoom(roomId));
    socketConnection.joinVideoRoom({
      peerId: getPeerId(),
      roomId,
    });
  } catch (error) {
    throw error;
  }
};

export const leaveVideoRoom = (roomId) => {
  disconnect();
  socketConnection.leaveVideoRoom({
    roomId,
  });

  store.dispatch(videoRoomsActions.setInRoom(null));
};

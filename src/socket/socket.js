import io from 'socket.io-client';
import { chatMessageHandler } from '../store/actions/messengerActions';
import {
  disconnectHandler,
  onlineUsersHandler,
} from '../store/actions/usersAction';
import { videoRoomsHandler } from '../store/actions/videoRoomActions';
import { call, disconnect } from '../utils/webRTCHandler';

const socket = io('https://server-0j8n.onrender.com');

export const connectWithSocket = () => {
  socket.on('connect');

  socket.on('online-users', (data) => {
    onlineUsersHandler(socket.id, data);
  });

  socket.on('user-disconnected', (disconnectedId) => {
    disconnectHandler(disconnectedId);
  });

  socket.on('chat-message', (messageData) => {
    chatMessageHandler(messageData);
  });

  socket.on('video-rooms', (roomData) => {
    videoRoomsHandler(roomData);
  });

  socket.on('video-room-init', (data) => {
    call(data);
  });

  socket.on('video-call-disconnect', () => {
    disconnect();
  });
};

export const login = (data) => {
  socket.emit('login-user', data);
};

export const sendChatMessage = (message) => {
  socket.emit('chat-message', message);
};

export const createVideoRoom = (roomData) => {
  socket.emit('video-room-create', roomData);
};

export const joinVideoRoom = (roomData) => {
  socket.emit('video-room-join', roomData);
};

export const leaveVideoRoom = (roomData) => {
  socket.emit('video-room-leave', roomData);
};

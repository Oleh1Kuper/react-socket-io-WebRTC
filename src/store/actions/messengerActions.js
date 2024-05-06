import { v4 as uuidv4 } from 'uuid';
import * as socketConnection from '../../socket/socket';
import { actions as messengerActions } from '../../features/messenger';
import store from '../store';

const openChatBoxIfClosed = (socketId) => {
  const {
    messenger: { chatBoxes },
    map: { onlineUsers },
  } = store.getState();

  const user = onlineUsers.find((u) => u.socketId === socketId);
  const chatBox = chatBoxes.find((box) => box.socketId === socketId);

  if (!chatBox) {
    store.dispatch(
      messengerActions.addChatBox({ socketId, userName: user.userName }),
    );
  }
};

export const sendChatMessage = (receiverSocketId, content) => {
  const message = {
    id: uuidv4(),
    receiverSocketId,
    content,
  };

  socketConnection.sendChatMessage(message);

  store.dispatch(
    messengerActions.addChatMessage({
      ...message,
      myMessage: true,
      socketId: receiverSocketId,
    }),
  );
};

export const chatMessageHandler = ({ senderSocketId, id, content }) => {
  store.dispatch(
    messengerActions.addChatMessage({
      socketId: senderSocketId,
      id,
      content,
      myMessage: false,
    }),
  );

  openChatBoxIfClosed(senderSocketId);
};

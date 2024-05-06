import React from 'react';
import { useSelector } from 'react-redux';
import ChatBox from './ChatBox';
import '../styles/Messenger.css';

function Messenger() {
  const { chatBoxes } = useSelector((state) => state.messenger);
  const { onlineUsers } = useSelector((state) => state.map);
  const me = onlineUsers.find((user) => user.myself);
  const chatBoxesExeptMine = chatBoxes
    .filter((box) => box.socketId !== me.socketId);

  return (
    <div className="messenger_container">
      {chatBoxesExeptMine.map((chatBox) => (
        <ChatBox
          key={chatBox.socketId}
          socketId={chatBox.socketId}
          userName={chatBox.userName}
        />
      ))}
    </div>
  );
}

export default Messenger;

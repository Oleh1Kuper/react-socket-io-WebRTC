import React from 'react';
import NavBar from './NavBar';
import Messages from './Messages';
import NewMessage from './NewMessage';

function ChatBox({ socketId, userName }) {
  return (
    <div className="chatbox_container">
      <NavBar socketId={socketId} userName={userName} />
      <Messages socketId={socketId} />
      <NewMessage socketId={socketId} />
    </div>
  );
}

export default ChatBox;

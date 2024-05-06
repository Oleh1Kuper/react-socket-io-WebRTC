import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { sendChatMessage } from '../store/actions/messengerActions';

function NewMessage({ socketId }) {
  const [message, setMessage] = useState('');
  const [isDisableInput, setIsDisableInput] = useState(false);
  const { onlineUsers } = useSelector((state) => state.map);

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const proceedChatMessage = () => {
    const isUserOnline = onlineUsers.find((user) => user.socketId === socketId);

    if (isUserOnline) {
      sendChatMessage(socketId, message);
    } else {
      setIsDisableInput(true);
    }
  };

  const handlePress = (e) => {
    const condition = e.code === 'Enter' && message.trim();

    if (condition) {
      proceedChatMessage();
      setMessage('');
    }
  };

  return (
    <div className="chatbox_new_message_container">
      <input
        disabled={isDisableInput}
        type="text"
        className="chatbox_new_message_input"
        placeholder={isDisableInput ? 'User is offline' : 'Type your message'}
        onChange={handleChange}
        value={message}
        onKeyDown={handlePress}
      />
    </div>
  );
}

export default NewMessage;

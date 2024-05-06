import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import SingleMessage from './SingleMessage';

function Messages({ socketId }) {
  const { chatHistory } = useSelector((state) => state.messenger);
  const messages = chatHistory[socketId];
  const refScroll = useRef(null);

  useEffect(() => {
    if (refScroll.current) {
      refScroll.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  return (
    <div className="chatbox_messages_container">
      {messages?.map((message) => (
        <SingleMessage message={message} key={message.id} />
      ))}
      <div ref={refScroll} />
    </div>
  );
}

export default Messages;

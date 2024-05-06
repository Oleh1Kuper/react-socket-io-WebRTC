import React from 'react';

function SingleMessage({ message }) {
  const { myMessage, content } = message;

  return (
    <div
      className="chatbox_message_wrapper"
      style={{ justifyContent: myMessage ? 'flex-end' : 'flex-start' }}
    >
      <p className={`chatbox_message_${myMessage ? 'right' : 'left'}`}>
        {content}
      </p>
    </div>
  );
}

export default SingleMessage;

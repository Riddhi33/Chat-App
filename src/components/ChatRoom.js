import React, { useState, useRef } from 'react';
import useChat from '../hooks/useChat';
import MessageList from './MessageList';

const ChatRoom = () => {
  const { currentRoom, sendMessage } = useChat();
  const [message, setMessage] = useState('');
  const messageInputRef = useRef(null);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim()) {
      sendMessage(message);
      setMessage('');
      messageInputRef.current.focus();
    }
  };

  return (
    <div>
      <h2>{currentRoom}</h2>
      <MessageList />
      <form onSubmit={handleSendMessage}>
        <input
          ref={messageInputRef}
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message"
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ChatRoom;

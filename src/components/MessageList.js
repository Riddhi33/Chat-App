import React, { useRef, useEffect } from 'react';
import useChat from '../hooks/useChat';

const MessageList = () => {
  const { messages } = useChat();
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div>
      <h2>Messages</h2>
      <ul>
        {messages.map((message, index) => (
          <li key={index}>
            <strong>{message.user.username}: </strong>{message.text}
          </li>
        ))}
      </ul>
      <div ref={messagesEndRef} />
    </div>
  );
};

export default MessageList;

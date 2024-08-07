import { useContext, useState, useCallback, useMemo } from 'react';
import ChatContext from '../context/ChatContext';

const useChat = () => {
  const { rooms, currentRoom, user, addRoom, selectRoom, updateUser } = useContext(ChatContext);
  const [messages, setMessages] = useState([]);

  const sendMessage = useCallback((message) => {
    setMessages([...messages, { user, text: message }]);
  }, [messages, user]);

  const memoizedMessages = useMemo(() => messages, [messages]);

  return {
    rooms,
    currentRoom,
    user,
    messages: memoizedMessages,
    sendMessage,
    addRoom,
    selectRoom,
    updateUser,
  };
};

export default useChat;

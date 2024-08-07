import React, { createContext, useState } from 'react';

const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [rooms, setRooms] = useState([]);
  const [currentRoom, setCurrentRoom] = useState(null);
  const [user, setUser] = useState({ username: '', profilePicture: '' });

  const addRoom = (room) => setRooms([...rooms, room]);
  const selectRoom = (room) => setCurrentRoom(room);
  const updateUser = (userInfo) => setUser(userInfo);

  return (
    <ChatContext.Provider value={{ rooms, currentRoom, user, addRoom, selectRoom, updateUser }}>
      {children}
    </ChatContext.Provider>
  );
};

export default ChatContext;

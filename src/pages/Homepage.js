import React, { useState } from 'react';
import ChatRoomsList from '../components/ChatRoomsList';
import useChat from '../hooks/useChat';

const HomePage = () => {
  const [newRoom, setNewRoom] = useState('');
  const { addRoom } = useChat();

  const handleAddRoom = () => {
    if (newRoom.trim()) {
      addRoom(newRoom);
      setNewRoom('');
    }
  };

  return (
    <div>
      <h1>Home</h1>
      <ChatRoomsList />
      <input
        type="text"
        value={newRoom}
        onChange={(e) => setNewRoom(e.target.value)}
        placeholder="New Room"
      />
      <button onClick={handleAddRoom}>Add Room</button>
    </div>
  );
};

export default HomePage;

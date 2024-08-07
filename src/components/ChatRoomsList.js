import React from 'react';
import useChat from '../hooks/useChat';

const ChatRoomsList = () => {
  const { rooms, selectRoom } = useChat();

  return (
    <div>
      <h2>Chat Rooms</h2>
      <ul>
        {rooms.map((room, index) => (
          <li key={index} onClick={() => selectRoom(room)}>
            {room}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChatRoomsList;

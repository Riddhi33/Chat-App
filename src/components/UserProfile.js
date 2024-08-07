import React, { useState } from 'react';
import useChat from '../hooks/useChat';

const UserProfile = () => {
  const { user, updateUser } = useChat();
  const [username, setUsername] = useState(user.username);
  const [profilePicture, setProfilePicture] = useState(user.profilePicture);

  const handleUpdateUser = () => {
    updateUser({ username, profilePicture });
  };

  return (
    <div>
      <h2>User Profile</h2>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      <input
        type="text"
        value={profilePicture}
        onChange={(e) => setProfilePicture(e.target.value)}
        placeholder="Profile Picture URL"
      />
      <button onClick={handleUpdateUser}>Update</button>
    </div>
  );
};

export default UserProfile;

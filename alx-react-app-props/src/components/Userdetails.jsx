// src/components/UserDetails.jsx
import React, { useContext } from 'react';
import UserContext from '../UserContext'; // Import UserContext

function UserDetails() {
  const userData = useContext(UserContext); // Access userData from context

  return (
    <div>
      <p>Name: {userData.name}</p> {/* Display Alice's name */}
      <p>Email: {userData.email}</p> {/* Display Alice's email */}
    </div>
  );
}
export default UserDetails;

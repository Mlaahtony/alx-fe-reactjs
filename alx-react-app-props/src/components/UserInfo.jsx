
import React from "react";
import UserDetails from "./UserDetails";  // Correct import of UserDetails component

const UserInfo = () => {
  return (
    <div>
      <h2>User Info</h2>
      <UserDetails />  {/* Render the UserDetails component here */}
    </div>
  );
};
export default UserInfo;

import { useContext } from 'react';
import UserContext from '../UserContext'; // Import UserContext

function UserProfile() {
  const userData = useContext(UserContext); // Consume UserContext

  return (
    <div style={{ border: '1px solid gray', padding: '10px', margin: '10px' }}>
      <h2 style={{ color: 'blue' }}>{userData.name}</h2>
      <p>Age: <span style={{ fontWeight: 'bold' }}>25</span></p>
      <p>Bio: Loves hiking and photography</p>
    </div>
  );
}
export default UserProfile;


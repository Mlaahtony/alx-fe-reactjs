
import { useContext } from 'react';
import UserContext from '../UserContext'; // Import UserContext
import UserDetails from './UserDetails';

function UserInfo() {
  const userData = useContext(UserContext); // Get data from context

  return <UserDetails userData={userData} />;
}
export default UserInfo;

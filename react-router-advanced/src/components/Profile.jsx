import { Link, Routes, Route } from "react-router-dom"; // Ensure 'Routes' is imported
import ProfileDetails from "./ProfileDetails";
import ProfileSettings from "./ProfileSettings";

const Profile = () => {
  return (
    <div>
      <h1>Profile Page</h1>
      <nav>
        <ul>
          <li><Link to="details">Go to Profile Details</Link></li>
          <li><Link to="settings">Go to Profile Settings</Link></li>
        </ul>
      </nav>

      {/* Nested Routes */}
      <Routes>
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Routes>
    </div>
  );
};

export default Profile;




import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import Sidebar from '../Sidebar/Sidebar';

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const [cookies] = useCookies(['AuthToken', 'Email']);
  const { Email, AuthToken } = cookies;
  const navigate = useNavigate();

  useEffect(() => {
    if (AuthToken && Email) {
      fetch(`http://localhost:4000/users/${Email}`, {
        method: 'GET',
        headers: { 'Authorization': `Bearer ${AuthToken}` },
      })
        .then((res) => res.json())
        .then((data) => setUserData(data))
        .catch((err) => console.error('Error fetching user data:', err));
    } else {
      console.warn('Auth token or email missing.');
    }
  }, [AuthToken, Email]);

  return (
    <div style={{ marginLeft: '220px' }}>
      <Sidebar /> {/* Sidebar mantido */}
      <section>
        {userData ? (
          <div>
            <h1>Welcome to your profile, {userData.user}!</h1>
          </div>
        ) : (
          <div>Loading profile data...</div>
        )}
      </section>
    </div>
  );
};

export default Profile;



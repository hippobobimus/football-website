import { useNavigate } from 'react-router-dom';

import { Button, SmallButton } from '../../../components/styles';
import { ProfileInfo } from '../components/ProfileInfo';
import { useGetAuthUserQuery, useLogoutMutation } from '../api/authApiSlice';
import { Spinner } from '../../../components/spinner';

export const ProfileHome = () => {
  const navigate = useNavigate();
  const { data: user, isLoading: userIsLoading } = useGetAuthUserQuery();
  const [logout, { logoutIsLoading }] = useLogoutMutation();

  const handleEdit = () => {
    navigate('edit');
  };

  const handleChangePassword = () => {
    navigate('change-password');
  };

  const handleLogout = () => {
    logout();
  };

  if (userIsLoading) {
    return <Spinner />;
  }

  return (
    <>
      <ProfileInfo user={user} onEdit={handleEdit} />
      <SmallButton onClick={handleChangePassword}>Change Password</SmallButton>
      <Button onClick={handleLogout} disabled={logoutIsLoading}>
        Logout
      </Button>
    </>
  );
};

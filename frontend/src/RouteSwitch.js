import { Routes, Route, Navigate } from 'react-router-dom';

import App from './App';
import PageNotFound from './routes/PageNotFound';
import Protect from './features/auth/Protect';
import ProtectAdmin from './features/auth/ProtectAdmin';
import Login from './features/auth/Login';
import Register from './features/auth/Register';
import Profile from './features/currentUser/Profile';
import EditProfile from './features/currentUser/EditProfile';
import EditPassword from './features/currentUser/EditPassword';
import NextMatch from './features/events/NextMatch';
import CreateMatch from './features/events/CreateMatch';
import CreateSocial from './features/events/CreateSocial';
import Event from './features/events/Event';

const RouteSwitch = () => {
  return (
    <Routes>
      <Route path='/' element={<App />}>
        {/* Public routes */}
        <Route index element={<Navigate replace to='/next-match' />} />
        <Route path='register' element={<Register />} />
        <Route path='login' element={<Login />} />

        {/* Private routes that require authentication */}
        <Route element={<Protect />}>
          <Route path='profile' element={<Profile />} />
          <Route path='edit-profile' element={<EditProfile />} />
          <Route path='edit-password' element={<EditPassword />} />
          <Route path='event/:id' element={<Event />} />
          <Route path='next-match' element={<NextMatch />} />
        </Route>

        {/* Private routes that require admin privileges */}
        <Route element={<ProtectAdmin />}>
          <Route path='create-match' element={<CreateMatch />} />
          <Route path='create-social' element={<CreateSocial />} />
        </Route>

        <Route path='*' element={<PageNotFound />} />
      </Route>
    </Routes>
  );
};

export default RouteSwitch;

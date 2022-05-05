import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Contact from './pages/Contact/Contact';
import Dashboard from './pages/Dashboard/Dashboard';
import Announcements from './pages/Announcements/Announcements';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import SkipBtn from './components/SkipBtn/SkipBtn';
import Applications from './pages/Applications/Applications';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserData } from './store/userActions';
import PopupMessage from './components/PopupMessage/PopupMessage';
import { removePopup } from './store/popupSlice';
import NotFound from './pages/NotFound/NotFound';

const App = () => {
  const navHeight = `${62.39}px`;
  const path = window.location.pathname;
  const dispatch = useDispatch();
  // User token
  const token = localStorage.getItem('BrgyTagapoToken');
  // PopupMessage infos
  const popupMessage = useSelector((state) => state.popup);
  const user = useSelector((state) => state.user.userInfo);

  // Fethc user's data when token is present
  useEffect(() => {
    token && dispatch(fetchUserData());
  }, [token, dispatch]);

  return (
    <Router>
      <SkipBtn navHeight={navHeight} />
      <Navbar user={user.fName} />
      {/* Popup message */}
      {popupMessage.display && (
        <PopupMessage
          type={popupMessage.type}
          message={popupMessage.message}
          removePopup={removePopup}
        />
      )}
      <span
        style={
          path === '/'
            ? { marginTop: 0 }
            : { display: 'block', marginTop: navHeight }
        }
      >
        .
      </span>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route
          path='/login'
          element={
            user.fName ? (
              <Navigate to='/admin-dashboard/account-settings' />
            ) : (
              <Login />
            )
          }
        />
        <Route
          path='/admin-dashboard/*'
          element={<Dashboard user={user.fName} />}
        />
        <Route path='/contact' element={<Contact />} />
        <Route
          path='/online-applications'
          element={<Applications navHeight={navHeight} />}
        />
        <Route path='/announcements' element={<Announcements />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

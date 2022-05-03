import React, { useEffect } from 'react';
import './login.css';
import Title from '../../components/Title/Title';
import Register from '../../components/Register/Register';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../../store/userSlice';
import { loginUser } from '../../store/userActions';

const Login = () => {
  const dispatch = useDispatch();
  const { loginInfo, isLoading } = useSelector((state) => state.user);

  // Handle login submit
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      userActions.loginAttempt({
        email: e.target[0].value,
        password: e.target[1].value,
      })
    );
  };

  useEffect(() => {
    loginInfo.email && dispatch(loginUser(loginInfo));
  }, [loginInfo, dispatch]);

  return (
    <>
      <section className='login py-4'>
        <Title text='Login account' />
        <div className='login-content shadow-md'>
          <form onSubmit={handleSubmit}>
            <div>
              <label>
                <input type='email' placeholder='email' />
              </label>
            </div>
            <div>
              <label>
                <input type='password' placeholder='password' />
              </label>
            </div>
            <div>
              <label>
                <input
                  type='submit'
                  value={isLoading ? 'Loading' : 'Login'}
                  className='btn btn-primary'
                />
              </label>
            </div>
          </form>
        </div>
      </section>
      {/* Register Account */}
      <Register />
    </>
  );
};

export default Login;

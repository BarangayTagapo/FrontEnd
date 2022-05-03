import axios from 'axios';
import { userActions } from './userSlice';
import { popupActions } from './popupSlice';

const token = localStorage.getItem('BrgyTagapoToken');
// export const url = 'http://localhost:5000';
export const url = 'https://barangay-tagapo-server.herokuapp.com';
export const authAxios = axios.create({
  baseURL: url,
  headers: {
    authorization: `Bearer ${token}`,
  },
});

// Login user
export const loginUser = (candidate) => {
  return async (dispatch) => {
    // Start loading
    dispatch(userActions.setIsLoading(true));
    await axios
      .post(`${url}/authenticate/login`, candidate)
      .then((resp) => {
        // Save token to local storage
        localStorage.setItem('BrgyTagapoToken', resp.data.token);
        // End loading
        dispatch(userActions.setIsLoading(false));
        window.open('/admin-dashboard/account-settings', '_self');
      })
      .catch((err) => {
        // Handle Error
        // End loading
        dispatch(userActions.setIsLoading(false));
        // Show popup message
        dispatch(
          popupActions.triggerPopup({
            display: true,
            type: 'danger',
            message: err.response.data.message,
          })
        );
      });
  };
};

// Fetch user's data from token
export const fetchUserData = () => async (dispatch) => {
  await authAxios
    .get(`${url}/user/userInfo`)
    .then((resp) => dispatch(userActions.setUser(resp.data)))
    .catch((err) => console.log(err));
};

// Register new user
export const registerUser = (data) => async (dispatch) => {
  // Start loading
  dispatch(userActions.setIsLoading(true));

  await axios
    .post(`${url}/authenticate/register`, data, {
      headers: { 'Content-Type': 'multipart/form-data' },
    })
    .then((resp) => {
      // End loading
      dispatch(userActions.setIsLoading(false));
      // show popup message
      dispatch(
        popupActions.triggerPopup({
          display: true,
          message: resp.data.message,
          type: 'success',
        })
      );
    })
    .catch((err) => {
      // End loading
      dispatch(userActions.setIsLoading(false));
      // Show popup error message
      dispatch(
        popupActions.triggerPopup({
          display: true,
          message: err.response.data.message,
          type: 'danger',
        })
      );
    });
};

// Update/Edit user's account
export const updateUser =
  ({ form, id, setIsEditing }) =>
  async (dispatch) => {
    // // Start loading
    dispatch(userActions.setIsLoading(true));
    // Send update request
    await authAxios
      .patch(`${url}/user/${id}`, form, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      .then((resp) => {
        setIsEditing && setIsEditing(false);
        dispatch(
          popupActions.triggerPopup({
            display: true,
            type: 'success',
            message: resp.data.message,
          })
        );
      })
      .catch((err) => {
        dispatch(
          popupActions.triggerPopup({
            display: true,
            type: 'danger',
            message: err.response.data.message,
          })
        );
      });
  };

// Fetch all staffs
export const fetchAllStaffs = () => async (dispatch) => {
  await authAxios
    .get(`${url}/user/staffs`)
    .then((resp) => dispatch(userActions.setStaffs(resp.data.staffs)))
    .catch((err) =>
      dispatch(
        popupActions.triggerPopup({
          display: true,
          type: 'danger',
          message: err.response.data.message,
        })
      )
    );
};

// Fetch all staffs
export const fetchAllRequests = () => async (dispatch) => {
  await authAxios
    .get(`${url}/user/requests`)
    .then((resp) => dispatch(userActions.setRequests(resp.data.requests)))
    .catch((err) =>
      dispatch(
        popupActions.triggerPopup({
          display: true,
          type: 'danger',
          message: err.response.data.message,
        })
      )
    );
};

export const grantAccess = (id, status) => async (dispatch) => {
  await authAxios
    .patch(`${url}/user/access/${id}?status=${status}`)
    .then((resp) => {
      // Show popup message
      dispatch(
        popupActions.triggerPopup({
          type: 'success',
          display: true,
          message: resp.data.message,
        })
      );
      // fetch all users
      dispatch(fetchAllStaffs());
      // fetch all requests
      dispatch(fetchAllRequests());
    })
    .catch((err) =>
      dispatch(
        popupActions.triggerPopup({
          type: 'danger',
          display: true,
          message: err.response.data.message,
        })
      )
    );
};

// Delete user
export const deleteUser = (id) => async (dispatch) => {
  const confirm = window.confirm(
    'Are you sure you want to delete this account?'
  );
  if (confirm) {
    await authAxios
      .delete(`${url}/user/${id}`)
      .then((resp) => {
        dispatch(
          popupActions.triggerPopup({
            type: 'success',
            display: true,
            message: resp.data.message,
          })
        );
        dispatch(fetchAllRequests());
        dispatch(fetchAllStaffs());
      })
      .catch((err) => {
        dispatch(
          popupActions.triggerPopup({
            type: 'danger',
            display: true,
            message: err.response.data.message,
          })
        );
      });
  }
};

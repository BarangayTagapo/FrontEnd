import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    userInfo: {},
    loginInfo: {},
    isLoading: false,
    staffs: [],
    requests: [],
  },
  reducers: {
    // Ping login process
    loginAttempt(state, action) {
      state.loginInfo = action.payload;
    },
    // Set current user's info
    setUser(state, action) {
      state.userInfo = action.payload;
    },
    setIsLoading(state, action) {
      state.isLoading = action.payload;
    },
    setfName(state, action) {
      state.userInfo.fName = action.payload;
    },
    setmName(state, action) {
      state.userInfo.mName = action.payload;
    },
    setlName(state, action) {
      state.userInfo.lName = action.payload;
    },
    setEmail(state, action) {
      state.userInfo.email = action.payload;
    },
    setStaffs(state, action) {
      state.staffs = action.payload;
    },
    setRequests(state, action) {
      state.requests = action.payload;
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice;

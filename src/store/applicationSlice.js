import { createSlice } from '@reduxjs/toolkit';

const applicationSlice = createSlice({
  name: 'application',
  initialState: {
    applicants: {},
  },
  reducers: {
    setDocument(state, action) {
      state.applicants = action.payload;
    },
  },
});

export const applicationActions = applicationSlice.actions;
export default applicationSlice;

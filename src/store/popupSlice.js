import { createSlice } from '@reduxjs/toolkit';

const popupSlice = createSlice({
  name: 'popup',
  initialState: {
    type: 'info',
    display: false,
    message: '',
  },
  reducers: {
    triggerPopup(state, action) {
      state.type = action.payload.type;
      state.display = action.payload.display;
      state.message = action.payload.message;
    },
    resetPopup(state) {
      state.display = false;
    },
  },
});

export const removePopup = () => (dispatch) => {
  dispatch(popupSlice.actions.resetPopup());
};

export const popupActions = popupSlice.actions;
export default popupSlice;

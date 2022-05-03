import { configureStore } from '@reduxjs/toolkit';
import announcementSlice from './announcementsSlice';
import applicationSlice from './applicationSlice';
import popupSlice from './popupSlice';
import userSlice from './userSlice';

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    popup: popupSlice.reducer,
    announcements: announcementSlice.reducer,
    application: applicationSlice.reducer,
  },
});

export default store;

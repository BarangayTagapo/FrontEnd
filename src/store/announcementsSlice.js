import { createSlice } from '@reduxjs/toolkit';

const announcementSlice = createSlice({
  name: 'announcement',
  initialState: {
    announcements: [],
    currAnnouncement: {
      category: '',
      title: '',
      description: '',
    },
  },
  reducers: {
    setAnnouncements(state, action) {
      state.announcements = action.payload;
    },
    setCurrAnnouncement(state, action) {
      state.currAnnouncement = action.payload;
    },
    setCurrAnnCategory(state, action) {
      state.currAnnouncement.category = action.payload;
    },
    setCurrAnnTitle(state, action) {
      state.currAnnouncement.title = action.payload;
    },
    setCurrAnnDescription(state, action) {
      state.currAnnouncement.description = action.payload;
    },
    setCurrAnnImage(state, action) {
      state.currAnnouncement.image = action.payload;
    },
  },
});

export const announcementActions = announcementSlice.actions;
export default announcementSlice;

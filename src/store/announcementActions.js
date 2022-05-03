import { announcementActions } from './announcementsSlice.js';
import { popupActions } from './popupSlice.js';
import { authAxios, url } from './userActions.js';
import axios from 'axios';

const successPopup = (message) =>
  popupActions.triggerPopup({ type: 'success', display: true, message });

const errorPopup = (message) =>
  popupActions.triggerPopup({ type: 'danger', display: true, message });

// fetch all announcements
export const fetchAllAnnouncements = (category) => async (dispatch) => {
  await axios
    .get(
      category
        ? `${url}/announcements?category=${category}`
        : `${url}/announcements`
    )
    .then((resp) =>
      dispatch(announcementActions.setAnnouncements(resp.data.announcements))
    )
    .catch((err) => console.log(err.response.data));
};

export const fetchAnnouncement = (id) => async (dispatch) => {
  await authAxios
    .get(`${url}/announcements/${id}`)
    .then((resp) =>
      dispatch(announcementActions.setCurrAnnouncement(resp.data.announcement))
    )
    .catch((err) => {
      return window.open('/page-not-found', '_self');
    });
};

// Edit announcement
export const editAnnouncement =
  (form, id, setIsLoading) => async (dispatch) => {
    setIsLoading(true);
    id
      ? await authAxios
          .patch(`${url}/announcements/${id}`, form)
          .then((resp) => {
            setIsLoading(false);
            dispatch(successPopup(resp.data.message));
          })
          .catch((err) => {
            console.log(err.response);
            setIsLoading(false);
            dispatch(errorPopup('Error. please try again'));
          })
      : await authAxios
          .post(`${url}/announcements`, form)
          .then((resp) => {
            setIsLoading(false);
            dispatch(successPopup(resp.data.message));
          })
          .catch((err) => {
            console.log(err.response);
            setIsLoading(false);
            dispatch(errorPopup('Error. please try again'));
          });
  };

export const deletePost = (id) => async (dispatch) => {
  const confirm = window.confirm('Do you want to delete this announcement?');

  confirm &&
    (await authAxios
      .delete(`${url}/announcements/${id}`)
      .then((resp) => {
        dispatch(successPopup(resp.data.message));
        dispatch(fetchAllAnnouncements());
      })
      .catch((err) => {
        dispatch(successPopup(err.response.message));
      }));
};

import { applicationActions } from './applicationSlice';
import { popupActions } from './popupSlice';
import { authAxios } from './userActions';
import { url } from './userActions';

export const fetchAllApplications = () => async (dispatch) => {
  await authAxios
    .get(`${url}/applications`)
    .then((resp) =>
      dispatch(applicationActions.setDocument(resp.data.applications))
    )
    .catch((err) => console.log(err.response));
};

export const deleteApplication = (id) => async (dispatch) => {
  const confirm = window.confirm('Are you sure to delete this application?');
  confirm &&
    (await authAxios
      .delete(`${url}/applications/${id}`)
      .then((resp) => {
        dispatch(
          popupActions.triggerPopup({
            display: true,
            type: 'success',
            message: resp.data.message,
          })
        );
        dispatch(fetchAllApplications());
      })
      .catch((err) =>
        dispatch(
          popupActions.triggerPopup({
            display: true,
            type: 'danger',
            message: err.response.message,
          })
        )
      ));
};

export const updateApplication = (id, status) => async (dispatch) => {
  await authAxios
    .patch(`${url}/applications/${id}`, { isDone: status })
    .then((resp) => {
      dispatch(
        popupActions.triggerPopup({
          display: true,
          type: 'success',
          message: resp.data.message,
        })
      );
      dispatch(fetchAllApplications());
    })
    .catch((err) =>
      dispatch(
        popupActions.triggerPopup({
          display: true,
          type: 'danger',
          message: err.response.message,
        })
      )
    );
};

export const createApplication = (form) => async (dispatch) => {
  await authAxios
    .post(`${url}/applications`, form)
    .then((resp) =>
      dispatch(
        popupActions.triggerPopup({
          display: true,
          type: 'success',
          message: resp.data.message,
        })
      )
    )
    .catch((err) =>
      dispatch(
        popupActions.triggerPopup({
          display: true,
          type: 'danger',
          message: err.response.message,
        })
      )
    );
};

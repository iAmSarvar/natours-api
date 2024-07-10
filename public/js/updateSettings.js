/*eslint-disable*/
import { showAlert } from './alerts';
import axios from 'axios';

export const updateData = async (name, emmail) => {
  try {
    const res = await axios({
      method: 'PATCH',
      url: 'http://127.0.0.1:8000/api/v1/users/updateMe',
      data: {
        name,
        emmail
      }
    });

    if (res.data.status === 'success') {
      showAlert('success', 'Data Updated!');
      window.setTimeout(() => {
        location.assign('/me');
      }, 500);
    }
  } catch (error) {
    showAlert('error', error.response.data.message);
  }
};

export const updatePassword = async (
  password,
  newPassword,
  newPasswordConfirm
) => {
  try {
    const res = await axios({
      method: 'PATCH',
      url: 'http://127.0.0.1:8000/api/v1/users/updatePassword',
      data: {
        password,
        newPassword,
        newPasswordConfirm
      }
    });

    if (res.data.status === 'success') {
      showAlert('success', 'Password Updated!');
      window.setTimeout(() => {
        location.assign('/me');
      }, 500);
    }
  } catch (error) {
    showAlert('error', error.response.data.message);
  }
};

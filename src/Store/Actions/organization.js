import axios from 'Configs/axios';
import { notify } from 'reapop';
import { setAppLoading } from './app';

export const fetchOrganizations = () => async (dispatch) => {
  dispatch(setAppLoading(true));
  try {
    const response = await axios.get('organization/get');
    dispatch({ type: 'SET_ORGANIZATIONS', payload: response.data });
  } catch (error) {
    console.log(error);
    dispatch(notify('Wystąpił problem z pobraniem listy organizacji.', 'error'));
  } finally {
    dispatch(setAppLoading(false));
  }
};

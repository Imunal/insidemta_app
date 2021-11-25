import axios from 'Configs/axios';
import { notify } from 'reapop';
import { setAppLoading } from './app';
import { push } from 'redux-first-history';

export const fetchVehiclesByModel = (vehicleModel) => async (dispatch) => {
  dispatch(setAppLoading(true));
  try {
    const response = await axios.get(`search/vehicle/${vehicleModel}`);
    dispatch({ type: 'SET_MODEL_VEHICLES', payload: response.data });
    push('/player');
  } catch (error) {
    console.log(error);
    dispatch(notify('Nie znaleziono pojazdów.', 'error'));
  } finally {
    dispatch(setAppLoading(false));
  }
};

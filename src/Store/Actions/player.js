import axios from 'Configs/axios';
import { notify } from 'reapop';
import { setAppLoading } from './app';
import { push } from 'redux-first-history';

export const tryAuthenticate =
  ({ playerLogin, playerPassword }) =>
  async (dispatch) => {
    dispatch(setAppLoading(true));
    try {
      const response = await axios.post('/player/authenticate', {
        playerLogin: playerLogin,
        playerPassword: playerPassword,
      });
      dispatch({ type: 'SET_AUTHENTICATION', payload: response.data });
      push('/player');
    } catch (error) {
      console.log(error);
      dispatch(
        notify('Wystąpił problem z logowaniem, upewnij się że wprowadziłeś poprawne dane.', 'error')
      );
    } finally {
      dispatch(setAppLoading(false));
    }
  };

export const tryPasswordReset =
  ({ playerEmail }) =>
  async (dispatch) => {
    dispatch(setAppLoading(true));
    try {
      await axios.post('/player/authenticate', {
        playerEmail: playerEmail,
      });
    } catch (error) {
      console.log(error);
      dispatch(
        notify(
          'Wystąpił problem podczas próby zresetowania hasła, upewnij się że adres e-mail jest poprawny.',
          'error'
        )
      );
    } finally {
      dispatch(setAppLoading(false));
    }
  };

export const searchPlayer = () => {
  return;
};

export const removeAuthentication = () => {
  return {
    type: 'REMOVE_AUTHENTICATION',
  };
};

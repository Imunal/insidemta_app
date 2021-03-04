import { useState } from 'react';
import axiosInstance from '../Configs/axios';
import Loader from 'react-loader-spinner';

import { Link, useHistory } from 'react-router-dom';

import { useToasts } from 'react-toast-notifications';
import { useSelector, useDispatch } from 'react-redux';
import { auto } from '@popperjs/core';

function LoginView() {
    const { addToast } = useToasts();
    const dispatch = useDispatch();
    const history = useHistory();
    const isLogged = useSelector((state) => state.player.personalToken);

    if (isLogged) {
        history.push('/account');
    }

    const [userName, setUserName] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const validateForm = (e) => {
        e.preventDefault();
        if (!userName && !userPassword) {
            return false;
        }
        authenticate();
    };

    const authenticate = async () => {
        setIsLoading(true);
        try {
            const response = await axiosInstance.post('player/authenticate', {
                userName: userName,
                userPassword: userPassword,
            });
            dispatch({ type: 'SET_AUTHENTICATION', payload: response.data });
            history.push('/account');
        } catch (error) {
            console.log(error);
            setIsLoading(false);
            addToast('Wystąpił problem z logowaniem, sprawdź swoje dane.', { appearance: 'error' });
        }
    };

    const handleUserNameChange = (e) => {
        setUserName(e.target.value);
    };

    const handleUserPasswordChange = (e) => {
        setUserPassword(e.target.value);
    };

    const renderLoginElements = () => {
        if (isLoading)
            return (
                <div className="block__center w-100 h-100 mt-5 mb-5">
                    <Loader type="Bars" color="#ccc" height={50} width={50} />
                    <p className="text-small text-center text-muted m-0 mt-3">
                        Hej, sprawdzamy czy twoje dane są poprawne
                        <br />
                        Poczekaj chwilę...
                    </p>
                </div>
            );

        return (
            <div style={{ maxWidth: 500, margin: auto }}>
                <h3 className="text-center">Zaloguj się</h3>
                <form
                    className="d-block m-auto mt-4"
                    onSubmit={(e) => validateForm(e)}
                    style={{ alignSelf: 'center', maxWidth: 400 }}
                >
                    <div className="form-floating mb-3">
                        <input
                            type="text"
                            htmlFor="userName"
                            onChange={(e) => handleUserNameChange(e)}
                            value={userName}
                            className="form-control"
                            id="userName"
                            placeholder="Twój login"
                            autoComplete="username"
                            required
                        />
                        <label htmlFor="userName">Login</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input
                            type="password"
                            htmlFor="userPassword"
                            onChange={(e) => handleUserPasswordChange(e)}
                            value={userPassword}
                            className="form-control"
                            id="userPassword"
                            placeholder="Twoje hasło"
                            autoComplete="current-password"
                            required
                        />
                        <label htmlFor="userPassword">Hasło</label>
                    </div>
                    <div className="d-grid mb-3">
                        <button type="submit" className="btn btn-lg btn__dark btn-block">
                            Zaloguj się
                        </button>
                    </div>

                    <Link
                        to="/reset-password"
                        className="text-muted mt-4 d-block text-center text-decoration-none text-uppercase font-weight-bold"
                        style={{ fontSize: 14 }}
                    >
                        Nie możesz się zalogować?
                    </Link>
                </form>
            </div>
        );
    };

    return (
        <>
            <div className="container">
                <div className="panel mt-5">
                    <div className="panel__header">
                        <h1 className="mb-0">Panel gracza</h1>
                    </div>
                    <div className="panel__body">{renderLoginElements()}</div>
                </div>
            </div>
        </>
    );
}

export default LoginView;

import { useState } from 'react';
import axiosInstance from '../Configs/axios';

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
            return addToast('Uzupełnij wszystkie dane z formularza aby kontynuować.', {
                appearance: 'warning',
            });
        }
        authenticate();
    };

    const authenticate = () => {
        setIsLoading(true);
        axiosInstance
            .post('player/authenticate', {
                playerLogin: userName,
                playerPassword: userPassword,
            })
            .then((response) => {
                dispatch({ type: 'SET_AUTHENTICATION', payload: response.data });
                history.push('/account');
            })
            .catch(() => {
                setIsLoading(false);
                addToast('Wystąpił problem z logowaniem, sprawdź swoje dane.', {
                    appearance: 'error',
                });
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    const renderLoginElements = () => {
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
                            onChange={(e) => setUserName(e.target.value)}
                            value={userName}
                            className="form-control"
                            id="userName"
                            placeholder="Twój login"
                            autoComplete="username"
                        />
                        <label htmlFor="userName">Login</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input
                            type="password"
                            htmlFor="userPassword"
                            onChange={(e) => setUserPassword(e.target.value)}
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
                            {isLoading ? (
                                <>
                                    <span
                                        className="spinner-border spinner-border-sm"
                                        role="status"
                                        aria-hidden="true"
                                    ></span>
                                    <span className="visually-hidden">Wczytywanie...</span>
                                </>
                            ) : (
                                'Zaloguj się'
                            )}
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

import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axiosInstance from '../../Configs/axios';
import { useToasts } from 'react-toast-notifications';

const PlayerPasswordRestore = () => {
    const { addToast } = useToasts();
    const history = useHistory();
    const isLogged = useSelector((state) => state.player.personalToken);
    if (isLogged) {
        history.push('/account');
    }

    const [userEmail, setUserEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const validateForm = (e) => {
        if (!userEmail) {
            return addToast('Uzupełnij wszystkie dane z formularza aby kontynuować.', {
                appearance: 'warning',
            });
        }
        e.preventDefault();
        resetPassword();
    };

    const resetPassword = () => {
        setIsLoading(true);
        axiosInstance
            .post('player/resetPassword', {
                playerEmail: userEmail,
            })
            .then(() => {
                addToast('Na twój adres e-mail została wysłana wiadomość z nowym hasłem.', {
                    appearance: 'success',
                });
            })
            .catch(() => {
                addToast('Wystąpił błąd, upewnij się że wpisany adres e-mail jest poprawny.', {
                    appearance: 'error',
                });
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    return (
        <div className="container">
            <div className="panel mt-5">
                <div className="panel__header">
                    <h1>Resetowanie hasła</h1>
                </div>
                <div className="panel__body">
                    <form className="w-50 d-block m-auto" onSubmit={(e) => validateForm(e)}>
                        <div className="form-floating mb-3">
                            <input
                                type="email"
                                onChange={(e) => setUserEmail(e.target.value)}
                                value={userEmail}
                                className="form-control"
                                id="emailInput"
                                placeholder="Wprowadź swój adres e-mail"
                                required
                            />
                            <label htmlFor="emailInput">Wprowadź swój adres e-mail</label>
                        </div>
                        <div className="d-grid">
                            <button type="submit" className="btn btn__dark btn-lg btn-block">
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
                                    'Zresetuj hasło'
                                )}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PlayerPasswordRestore;

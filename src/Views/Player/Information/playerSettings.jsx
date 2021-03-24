import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useToasts } from 'react-toast-notifications';
import axiosConfig from '../../../Configs/axios';

function PlayerSettings() {
    const { addToast } = useToasts();
    const playerData = useSelector((state) => state.player);
    const [playerRolePlayName, setPlayerRolePlayName] = useState('');
    const [playerName, setPlayerName] = useState('');

    const updatePlayerRolePlayName = () => {
        if (!playerRolePlayName) return;
        axiosConfig
            .put('/player/setPlayerRPName', {
                personalToken: playerData.personalToken,
                targetedRPName: playerRolePlayName,
            })
            .then(() => {
                addToast('Twój nick RP został zmieniony pomyślnie', { appearance: 'success' });
            })
            .catch((error) => {
                addToast(error.response.data.error, { appearance: 'error' });
            });
    };

    const updatePlayerName = () => {
        if (!playerName) return;
        axiosConfig
            .put('/player/setPlayerName', {
                personalToken: playerData.personalToken,
                targetedPlayerName: playerName,
            })
            .then(() => {
                addToast('Twój nick został zmieniony pomyślnie', { appearance: 'success' });
            })
            .catch((error) => {
                addToast(error.response.data.error, { appearance: 'error' });
            });
    };

    return (
        <>
            <h5 className="fw-900">Ustawienia twojego konta:</h5>
            <hr />
            <div className="row">
                <div className="col-md-6">
                    <div className="form-floating mb-3">
                        <input
                            type="text"
                            className="form-control"
                            id="playerRPUserName"
                            placeholder="Wprowadź swój nick Role-Play"
                            onChange={(e) => setPlayerRolePlayName(e.target.value)}
                        />
                        <label htmlFor="playerRPUserName">Wprowadź swój nowy nick Role-Play</label>
                    </div>
                    <p className="text-small text-muted">
                        Pamiętaj że swój nick Role-Play możesz zmienić raz na miesiąc!
                    </p>
                    <button
                        className="btn btn__dark btn-lg btn-block"
                        onClick={() => updatePlayerRolePlayName()}
                    >
                        Zmień swój nick Role-Play
                    </button>
                </div>
                <div className="col-md-6">
                    <div className="form-floating mb-3">
                        <input
                            type="text"
                            className="form-control"
                            id="playerName"
                            placeholder="Wprowadź swój nowy nick"
                            onChange={(e) => setPlayerName(e.target.value)}
                        />
                        <label htmlFor="playerName">Wprowadź swój nowy nick</label>
                    </div>
                    <p className="text-small text-muted">
                        Pamiętaj że swój nick możesz zmienić raz na miesiąc!
                    </p>
                    <button
                        className="btn btn__dark btn-lg btn-block"
                        onClick={() => updatePlayerName()}
                    >
                        Zmień swój nick
                    </button>
                </div>
            </div>
        </>
    );
}

export default PlayerSettings;

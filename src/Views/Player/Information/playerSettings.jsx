import {useState} from 'react';
import { useSelector } from "react-redux";
import { useToasts } from 'react-toast-notifications';
import axiosConfig from '../../../Configs/axios';

function PlayerSettings() {
    const { addToast } = useToasts();
  const playerData = useSelector((state) => state.player);
  const [playerRolePlayName, setPlayerRolePlayName] = useState('');

  const updatePlayerRolePlayName = () => {
    axiosConfig.put('/player/setPlayerRPName', {
        playerUID: playerData.UID,
        targetedRPName: playerRolePlayName
    }).then(() => {
        addToast('Twój nick RP został pomyślnie ustawiony', { appearance: 'success' })
    }).catch(() => {
        addToast('Posiadasz już ustawiony nick Role-Play', { appearance: 'error' })
    })
  }

  const handleUserNameChange = (e) => {
      setPlayerRolePlayName(e.target.value);
  }

  return (
    <>
      <h5 className="fw-900">Ustawienia twojego konta:</h5>
      <hr />
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          id="playerRPUserName"
          placeholder="Wprowadź swój nick Role-Play"
          value={playerData.usernameRP ? playerData.usernameRP : playerRolePlayName}
          onChange={(e) => handleUserNameChange(e)}
          disabled={playerData.usernameRP ? 'disabled' : ''}
        />
        <label htmlFor="playerRPUserName">Wprowadź swój nick Role-Play</label>
      </div>
      <p className="text-small text-muted">Pamiętaj że swój nick Role-Play możesz ustawić tylko raz!</p>
      <button className="btn btn__dark btn-lg btn-block" onClick={() => updatePlayerRolePlayName()} disabled={playerData.usernameRP ? 'disabled' : ''}>Ustaw swój nick Role-Play</button>
    </>
  );
}

export default PlayerSettings;

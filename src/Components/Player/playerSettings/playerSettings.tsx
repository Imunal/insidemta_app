import { useState } from "react";

//Hooks
import { usePlayer } from "Hooks/usePlayer";

const PlayerSettings = () => {
  const {
    isLoading,
    handlePlayerRolePlayNameChange,
    handleUpdatePlayerNameChange,
  } = usePlayer();
  const [playerRolePlayName, setPlayerRolePlayName] = useState("");
  const [playerName, setPlayerName] = useState("");

  /*const updatePlayerRolePlayName = () => {
    if (!playerRolePlayName) return;
    setIsLoading(true);
    axiosConfig
      .put("/player/setPlayerRPName", {
        playerToken: playerData.personalToken,
        playerNewRPName: playerRolePlayName,
      })
      .then(() => {})
      .catch(() => {})
      .finally(() => {
        setIsLoading(false);
      });
  };

  const updatePlayerName = () => {
    if (!playerName) return;
    setIsLoading(true);
    axiosConfig
      .put("/player/setPlayerName", {
        playerToken: playerData.personalToken,
        playerNewName: playerName,
      })
      .then(() => {
        //addToast('Twój nick został zmieniony pomyślnie', { appearance: 'success' });
      })
      .catch(() => {
        //addToast('Podany nick jest już zajęty, proszę wybierz inny.', {
        //  appearance: 'error',
        //});
      })
      .finally(() => {
        setIsLoading(false);
      });
  };*/

  const handleUpdateRolePlayNameForm = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (!playerRolePlayName) return;
    handlePlayerRolePlayNameChange(playerName);
  };

  const handleUpdatePlayerNameForm = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (!playerName) return;
    handleUpdatePlayerNameChange(playerName);
  };

  const handleSetPlayerRolePlayNameChange = (
    e: React.FormEvent<HTMLInputElement>
  ) => {
    setPlayerRolePlayName(e.currentTarget.value);
  };

  const handleSetPlayerNameChange = (e: React.FormEvent<HTMLInputElement>) => {
    setPlayerName(e.currentTarget.value);
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
              onChange={handleSetPlayerRolePlayNameChange}
            />
            <label htmlFor="playerRPUserName">
              Wprowadź swój nowy nick Role-Play
            </label>
          </div>
          <p className="small text-muted">
            Pamiętaj że swój nick Role-Play możesz zmienić raz na miesiąc!
          </p>
          <button
            className="btn btn__dark btn-lg btn-block"
            onClick={handleUpdateRolePlayNameForm}
          >
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
              "Zmień swój nick Role-Play"
            )}
          </button>
        </div>
        <div className="col-md-6">
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="playerName"
              placeholder="Wprowadź swój nowy nick"
              onChange={handleSetPlayerNameChange}
            />
            <label htmlFor="playerName">Wprowadź swój nowy nick</label>
          </div>
          <p className="small text-muted">
            Pamiętaj że swój nick możesz zmienić raz na miesiąc!
          </p>
          <button
            className="btn btn__dark btn-lg btn-block"
            onClick={handleUpdatePlayerNameForm}
          >
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
              "Zmień swój nick"
            )}
          </button>
        </div>
      </div>
    </>
  );
};

export default PlayerSettings;

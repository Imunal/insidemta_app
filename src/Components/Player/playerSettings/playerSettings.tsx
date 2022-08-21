import { useState } from "react";

//Hooks
import { usePlayer } from "Hooks/usePlayer";

import Spacer from "Components/Spacer";
import Button from "Components/Button/Button";
import Input from "Components/Input/Input";

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
      <h5 className="text-xl font-medium text-white">Ustawienia konta:</h5>
      <Spacer />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <form onSubmit={handleUpdateRolePlayNameForm}>
            <Input
              name="playerRPUserName"
              label="Wprowadź swój nowy Role-Play"
              type="text"
              id="playerRPUserName"
              placeholder="Wprowadź swój nowy Role-Play"
              onChange={handleSetPlayerRolePlayNameChange}
              required
            />
            <p className="mt-2 mb-2 text-sm text-gray-600">
              Pamiętaj że swój nick Role-Play możesz zmienić raz na miesiąc!
            </p>
            <Button>Zmień swój nick Role-Play</Button>
          </form>
        </div>
        <div>
          <form onSubmit={handleUpdatePlayerNameForm}>
            <Input
              name="playerName"
              label="Wprowadź swój nowy nick"
              type="text"
              id="playerName"
              placeholder="Wprowadź swój nowy nick"
              onChange={handleSetPlayerNameChange}
              required
            />
            <p className="mt-2 mb-2 text-sm text-gray-600">
              Pamiętaj że swój nick możesz zmienić raz na miesiąc!
            </p>
            <Button>Zmień swój nick</Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default PlayerSettings;

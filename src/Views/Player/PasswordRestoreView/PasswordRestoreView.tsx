import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

//Components
import Button from "Components/Button/Button";
import Input from "Components/Input/Input";

//Hooks
import { usePlayer } from "Hooks/usePlayer";

const PlayerPasswordRestore = () => {
  const navigate = useNavigate();
  const [playerEmail, setPlayerEmail] = useState("");

  const { player, isLoading, handlePasswordReset } = usePlayer();

  useEffect(() => {
    if (player.personalToken) {
      navigate("/player/login");
    }
  });

  const handleFormValidation = (e: React.SyntheticEvent) => {
    e.preventDefault();
    handlePasswordReset(playerEmail)
      .unwrap()
      .then(() => {
        toast.success(
          "Twoje hasło zostało pomyślnie zresetowane, sprawdź swoją skrzynkę pocztową"
        );
      })
      .catch(() => {
        toast.success(
          "Coś poszło nie tak, upewnij się że podany e-mail jest prawidłowy"
        );
      });
  };

  const handlePlayerEmailChange = (e: React.FormEvent<HTMLInputElement>) => {
    setPlayerEmail(e.currentTarget.value);
  };

  return (
    <div className="container">
      <div className="panel mt-5">
        <div className="panel__header">
          <h1>Resetowanie hasła</h1>
        </div>
        <div className="panel__body">
          <form className="w-50 d-block m-auto" onSubmit={handleFormValidation}>
            <div className="mb-3">
              <Input
                type="email"
                onChange={handlePlayerEmailChange}
                value={playerEmail}
                name="playerEmail"
                label="Adres e-mail"
                placeholder="Wprowadź swój adres e-mail"
                required={true}
              />
            </div>
            <div className="d-grid">
              <Button isLoading={isLoading}>Zresetuj hasło</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PlayerPasswordRestore;

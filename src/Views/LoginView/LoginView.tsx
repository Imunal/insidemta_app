import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

//Components
import Input from "Components/Input/Input";
import Button from "Components/Button/Button";

//Hooks
import { usePlayer } from "Hooks/usePlayer";

const LoginView = () => {
  const navigate = useNavigate();
  const [playerLogin, setPlayerLogin] = useState("");
  const [playerPassword, setPlayerPassword] = useState("");

  const { player, isLoading, handleAuthentication } = usePlayer();

  useEffect(() => {
    if (player.personalToken) {
      navigate("/player");
    }
  }, [navigate, player.personalToken]);

  const validateForm = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (!playerLogin && !playerPassword) {
      return;
    }
    const playerData = { playerLogin, playerPassword };
    handleAuthentication(playerData);
  };

  const playerLoginChange = (e: React.FormEvent<HTMLInputElement>) => {
    setPlayerLogin(e.currentTarget.value);
  };

  const handlePlayerPasswordChange = (e: React.FormEvent<HTMLInputElement>) => {
    setPlayerPassword(e.currentTarget.value);
  };

  const renderLoginElements = () => {
    return (
      <div>
        <h3 className="text-center">Zaloguj się</h3>
        <form
          className="d-block m-auto mt-4"
          onSubmit={validateForm}
          style={{ alignSelf: "center", maxWidth: 400 }}
        >
          <div className="mb-3">
            <Input
              type="text"
              value={playerLogin}
              name="playerLogin"
              placeholder="Wprowadź swój login"
              label="Login"
              onChange={playerLoginChange}
              required={true}
            />
          </div>
          <div className="mb-3">
            <Input
              type="password"
              value={playerLogin}
              name="playerPassword"
              placeholder="Wprowadź swoje hasło"
              label="Hasło"
              onChange={handlePlayerPasswordChange}
              required={true}
            />
          </div>
          <div className="d-grid">
            <Button isLoading={isLoading}>Zaloguj się</Button>
          </div>
          <Link
            to="/player/reset-password"
            className="text-muted d-block text-decoration-none text-uppercase font-weight-bold mt-4 text-center"
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
};

export default LoginView;

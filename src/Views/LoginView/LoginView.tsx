import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

//Components
import Input from "Components/Input/Input";
import Button from "Components/Button/Button";
import Layout from "Components/Layout/Layout";

//Hooks
import { usePlayer } from "Hooks/usePlayer";
import Panel from "Components/Panel";
import toast from "react-hot-toast";

const LoginView = () => {
  const navigate = useNavigate();
  const [playerLogin, setPlayerLogin] = useState("");
  const [playerPassword, setPlayerPassword] = useState("");

  const { player, isLoading, handleAuthentication } = usePlayer();

  useEffect(() => {
    if (player && player.personalToken) {
      navigate("/player");
    }
  }, [navigate, player]);

  const validateForm = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (!playerLogin && !playerPassword) {
      return;
    }
    const playerData = { playerLogin, playerPassword };
    handleAuthentication(playerData)
      .unwrap()
      .catch(() => {
        toast.error("Wystąpił problem z logowaniem, sprawdź wprowadzone dane.");
      });
  };

  const playerLoginChange = (e: React.FormEvent<HTMLInputElement>) => {
    setPlayerLogin(e.currentTarget.value);
  };

  const handlePlayerPasswordChange = (e: React.FormEvent<HTMLInputElement>) => {
    setPlayerPassword(e.currentTarget.value);
  };

  return (
    <Layout>
      <div className="container">
        <Panel title="Panel gracza">
          <div className="p-10">
            <h3 className="text-center text-xl font-bold text-white">
              Zaloguj się
            </h3>
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
              <div className="mb-3">
                <Button isLoading={isLoading}>Zaloguj się</Button>
              </div>
              <Link
                to="/player/reset-password"
                className="text-left text-inside-text-light underline"
                style={{ fontSize: 14 }}
              >
                Nie możesz się zalogować?
              </Link>
            </form>
          </div>
        </Panel>
      </div>
    </Layout>
  );
};

export default LoginView;

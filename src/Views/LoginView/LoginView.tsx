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
    if (player && player.personal_token) {
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
      .then(() => {
        toast.success("Zostałeś zalogowany pomyślnie");
      })
      .catch(() => {
        toast.error("Wystąpił problem z logowaniem, sprawdź wprowadzone dane.");
      });
  };

  const handlePlayerLoginChange = (e: React.FormEvent<HTMLInputElement>) => {
    setPlayerLogin(e.currentTarget.value);
  };

  const handlePlayerPasswordChange = (e: React.FormEvent<HTMLInputElement>) => {
    setPlayerPassword(e.currentTarget.value);
  };

  return (
    <Layout>
      <Panel title="Panel gracza">
        <div className="p-10">
          <form className="m-auto w-96" onSubmit={validateForm}>
            <div className="mb-3">
              <Input
                type="text"
                value={playerLogin}
                name="playerLogin"
                placeholder="Wprowadź swój login"
                label="Login"
                onChange={handlePlayerLoginChange}
                required={true}
              />
            </div>
            <div className="mb-3">
              <Input
                type="password"
                value={playerPassword}
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
            <Link to="/player/reset-password">
              <span className="text-center text-inside-text-light underline">
                Nie możesz się zalogować?
              </span>
            </Link>
          </form>
        </div>
      </Panel>
    </Layout>
  );
};

export default LoginView;

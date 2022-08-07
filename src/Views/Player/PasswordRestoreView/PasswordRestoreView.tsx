import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

//Components
import Button from "Components/Button/Button";
import Input from "Components/Input/Input";

//Hooks
import { usePlayer } from "Hooks/usePlayer";
import Layout from "Components/Layout/Layout";
import Panel from "Components/Panel";

const PlayerPasswordRestore = () => {
  const navigate = useNavigate();
  const [playerEmail, setPlayerEmail] = useState("");

  const { player, isLoading, handlePasswordReset } = usePlayer();

  useEffect(() => {
    if (player && player.personalToken) {
      navigate("/player/login");
    }
  }, [player, navigate]);

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
    <Layout>
      <Panel title="Resetowanie hasła">
        <div className="p-10">
          <form className="m-auto w-96" onSubmit={handleFormValidation}>
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
      </Panel>
    </Layout>
  );
};

export default PlayerPasswordRestore;

import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import axiosInstance from "../../Configs/axios";
import Loader from "react-loader-spinner";

const PlayerPasswordRestore = () => {
  const history = useHistory();
  const isLogged = useSelector((state) => state.player.personalToken);
  if (isLogged) {
    history.push("/account");
  }

  const [userEmail, setUserEmail] = useState("");
  const [formError, setFormError] = useState("");
  const [formSuccess, setFormSuccess] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = (e) => {
    e.preventDefault();
    resetPassword();
  };

  const resetPassword = async () => {
    try {
      setIsLoading(true);
      await axiosInstance.post("player/passwordReset", {
        playerEmail: userEmail,
      });
      setIsLoading(false);
      setFormSuccess(
        "Na twój adres e-mail została wysłana wiadomość z nowym hasłem."
      );
    } catch (error) {
      setIsLoading(false);
      setFormError(
        "Wystąpił błąd, upewnij się że wpisany adres e-mail jest poprawny."
      );
    }
  };

  const handleUserEmailChange = (e) => {
    setUserEmail(e.target.value);
  };

  return (
    <div className="container">
      <div className="panel mt-5">
        <div className="panel__header">
          <h1>Resetowanie hasła</h1>
        </div>
        <div className="panel__body">
          <>
            <form
              className="w-50 d-block m-auto"
              onSubmit={(e) => validateForm(e)}
            >
              {isLoading ? (
                <div className="block__center w-100 h-100 mt-5 mb-5">
                  <Loader type="Bars" color="#ccc" height={50} width={50} />
                  <p className="text-small text-center text-muted m-0 mt-3">
                    Hej, sprawdzamy czy twoje dane są poprawne
                    <br />
                    Poczekaj chwilę...
                  </p>
                </div>
              ) : (
                ""
              )}
              {formError ? (
                <div className="alert alert-danger" role="alert">
                  {formError}
                </div>
              ) : (
                ""
              )}
              {formSuccess ? (
                <div className="alert alert-success" role="alert">
                  {formSuccess}
                </div>
              ) : (
                ""
              )}
              <div className="form-floating mb-3">
                <input
                  type="email"
                  onChange={(e) => handleUserEmailChange(e)}
                  value={userEmail}
                  className="form-control"
                  id="emailInput"
                  placeholder="Wprowadź swój adres e-mail"
                  required
                />
                <label htmlFor="emailInput">Wprowadź swój adres e-mail</label>
              </div>
              <div className="d-grid">
                <button
                  type="submit"
                  className="btn btn__dark btn-lg btn-block"
                >
                  Zresetuj hasło
                </button>
              </div>
            </form>
          </>
        </div>
      </div>
    </div>
  );
};

export default PlayerPasswordRestore;

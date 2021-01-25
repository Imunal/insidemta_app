import { useState } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";

import { Link, useHistory } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

function LoginView() {
  const dispatch = useDispatch();
  const history = useHistory();
  const isLogged = useSelector((state) => state.player.personalToken);

  if (isLogged) {
    history.push("/account");
  }

  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isErrored, setIsErrored] = useState("");

  const validateForm = (e) => {
    e.preventDefault();
    if (!userName && !userPassword) {
      return false;
    }
    authenticate();
  };

  const authenticate = async () => {
    setIsLoading(true);
    setIsErrored("");
    try {
      const response = await axios.post(
        "https://api.insidemta.pl/api/player/authenticate",
        {
          userName: userName,
          userPassword: userPassword,
        }
      );
      dispatch({ type: "SET_AUTHENTICATION", payload: response.data });
      history.push("/account");
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      setIsErrored("Niepoprawny login lub hasło");
    }
  };

  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };

  const handleUserPasswordChange = (e) => {
    setUserPassword(e.target.value);
  };
  return (
    <>
      <div className="container">
        <div className="panel mt-5">
          <div className="panel__header">
            <h1 className="mb-0">Zaloguj się</h1>
          </div>
          <div className="panel__body">
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
            {isErrored ? (
              <div
                className="alert alert-danger text-center w-50 d-block m-auto mb-3"
                role="alert"
              >
                <b>Wystąpił problem podczas próby zalogowania.</b>
                <br />
                {isErrored}
              </div>
            ) : (
              ""
            )}
            <form
              className="w-50 d-block m-auto"
              onSubmit={(e) => validateForm(e)}
            >
              <div className="form-floating mb-3">
                <input
                  type="text"
                  htmlFor="userName"
                  onChange={(e) => handleUserNameChange(e)}
                  value={userName}
                  className="form-control"
                  id="userName"
                  placeholder="Twój login"
                  required
                />
                <label htmlFor="userName">Wprowadź swój login z gry</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="password"
                  htmlFor="userPassword"
                  onChange={(e) => handleUserPasswordChange(e)}
                  value={userPassword}
                  className="form-control"
                  id="userPassword"
                  placeholder="Twoje hasło"
                  required
                />
                <label htmlFor="userPassword">Wprowadź swoje hasło z gry</label>
              </div>
              <div className="d-grid mb-3">
                <button
                  type="submit"
                  className="btn btn-lg btn__dark btn-block"
                >
                  Zaloguj się
                </button>
              </div>
              <Link to="/reset-password" className="small text-muted mt-3">
                Zapomniałeś swojego hasła?
              </Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginView;

import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import Logo from "../Assets/Images/Logo/logo_insidemta.png";

function Navbar() {
  const isLogged = useSelector((state) => state.player.personalToken);

  const authView = () => {
    if (isLogged) {
      return (
        <NavLink className="btn btn__navbar btn__dark btn-block" to="/account">
          Moje konto
        </NavLink>
      );
    } else {
      return (
        <NavLink className="btn btn__navbar btn__dark btn-block" to="/login">
          Zaloguj się
        </NavLink>
      );
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          <img src={Logo} alt="InsideMTA" />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item d-flex">
              <NavLink
                exact
                className="nav-link"
                activeClassName="selected"
                to="/"
              >
                Strona główna
              </NavLink>
            </li>
            <li className="nav-item d-flex">
              <a className="nav-link" href="https://forum.insidemta.pl/">
                Forum
              </a>
            </li>
            <li className="nav-item d-flex">
              <NavLink
                exact
                className="nav-link"
                activeClassName="selected"
                to="/exchange"
              >
                Giełda
              </NavLink>
            </li>
            <li className="nav-item d-flex">
              <NavLink
                exact
                className="nav-link"
                activeClassName="selected"
                to="/shop"
              >
                Sklep
              </NavLink>
            </li>
            <li className="nav-item d-flex">{authView()}</li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import Image from "react-image-webp";

import Logo from "../Assets/Images/Logo/logo_insidemta.png";
import LogoWebP from "../Assets/Images/Logo/logo_insidemta.webp";

function Navbar() {
  const isLogged = useSelector((state) => state.player.personalToken);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const authView = () => {
    if (isLogged) {
      return (
        <NavLink
          className="btn btn__navbar btn__dark btn-block align-self-center"
          to="/account"
        >
          Moje konto
        </NavLink>
      );
    } else {
      return (
        <NavLink
          className="btn btn__navbar btn__dark btn-block align-self-center"
          to="/login"
        >
          Zaloguj się
        </NavLink>
      );
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          <Image
            src={Logo}
            webp={LogoWebP}
            className="img-fluid object-cover"
            alt="InsideMTA"
          />
        </NavLink>
        <div
          className="navbar-toggler"
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          <span className="navbar-toggler-icon"></span>
        </div>

        <div
          className={`${isCollapsed ? "show" : ""} collapse navbar-collapse`}
          id="navbarSupportedContent"
        >
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
                to="/organizations"
              >
                Organizacje
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

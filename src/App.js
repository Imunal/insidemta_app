import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";

import "./Assets/Css/bootstrap/bootstrap.min.css";
import './Assets/Css/style.css';
import './Assets/Css/shopStyle.css';
import './Assets/Css/exchangeStyle.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import Logo from "./Assets/Images/Logo/logo_xmas.png";

import IndexView from './Views/IndexView';
import ShopView from "./Views/ShopView";
import VehiclesView from "./Views/VehiclesView";
import LoginView from './Views/LoginView';
import RulesView from './Views/RulesView';

import PaymentErrorView from './Views/PaymentErrorView';
import PaymentSuccessView from './Views/PaymentSuccessView';

function App() {
  return (
   <Router>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <NavLink className="navbar-brand" to="/">
              <img src={Logo} alt="InsideMTA" />
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <NavLink exact className="nav-link" activeClassName="selected" to="/">
                    Strona główna
                  </NavLink>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://forum.insidemta.pl/">
                    Forum
                  </a>
                </li>
                <li className="nav-item">
                  <NavLink exact className="nav-link" activeClassName="selected" to="/exchange">
                    Giełda
                  </NavLink>
                </li>
                {/* <li className="nav-item">
                  <a className="nav-link" href="https://forum.insidemta.pl/index.php?/staff/">
                    Administracja
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://forum.insidemta.pl/">
                    Pomoc
                  </a>
                </li> */}
                <li className="nav-item">
                  <NavLink exact className="nav-link" activeClassName="selected" to="/shop">
                    Sklep
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="btn__navbar btn__dark btn-block" to="/login">
                    Zaloguj się
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div>
          <Switch>
            <Route exact path="/">
              <IndexView />
            </Route>
            <Route path="/shop">
              <ShopView />
            </Route>
            <Route path="/exchange">
              <VehiclesView />
            </Route>
            <Route path="/regulamin">
              <RulesView />
            </Route>
            <Route path="/payment-success">
              <PaymentSuccessView />
            </Route>
            <Route path="/payment-error">
              <PaymentErrorView />
            </Route>
            <Route path="/login">
              <LoginView />
            </Route>
          </Switch>
        </div>
        <footer className="mt-5">
          <p className="text-muted text-small text-center m-0 p-0">
            Copyright &copy; 2021 InsideMTA
          </p>
          <p className="text-muted text-small text-center">
            <a href="/regulamin">Regulamin serwisu</a>
          </p>
        </footer>
      </Router>
  );
}

export default App;

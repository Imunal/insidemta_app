import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./Assets/Css/style.css";
import "./Assets/Css/shopStyle.css";
import "./Assets/Css/exchangeStyle.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

import IndexView from "./Views/IndexView";
import ShopView from "./Views/ShopView";
import VehiclesView from "./Views/VehiclesView";
import LoginView from "./Views/LoginView";
import RulesView from "./Views/RulesView";
import NotFoundView from "./Views/404View";

import PaymentErrorView from "./Views/PaymentErrorView";
import PaymentSuccessView from "./Views/PaymentSuccessView";

import PlayerAccount from "./Views/Player/playerAccount";
import PlayerPasswordRestore from "./Views/Player/playerPasswordRestore";

import ShowOrganizations from "./Views/Organization/showOrganizations";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <IndexView />
        </Route>
        <Route path="/organizations">
          <ShowOrganizations />
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
        <Route path="/account">
          <PlayerAccount />
        </Route>
        <Route path="/reset-password">
          <PlayerPasswordRestore />
        </Route>
        <Route path="*">
          <NotFoundView />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;

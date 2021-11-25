import React from 'react';
import { HistoryRouter as Router } from 'redux-first-history/rr6';
import { Routes, Route } from 'react-router-dom';
import { setUpNotifications } from 'reapop';

//Redux
import { Provider } from 'react-redux';
import { store, history } from 'Store';

//import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

//Toast
import Toasts from './Components/NotificationsSystem';

import InformationView from './Views/InformationView';

//import IndexView from './Views/IndexView';
/*import ShopView from './Views/ShopView';
import VehiclesView from './Views/VehiclesView';
import LoginView from './Views/LoginView';
import NotFoundView from './Views/404View';

import PaymentErrorView from './Views/PaymentErrorView';
import PaymentSuccessView from './Views/PaymentSuccessView';

import PlayerAccount from './Views/Player/playerAccount';
import PlayerPasswordRestore from './Views/Player/playerPasswordRestore';

import ShowOrganizations from './Views/Organization/showOrganizations';

import SearchPlayerView from './Views/SearchView';
import SearchVehicleView from './Views/VehicleSearchView';

import PlayerView from './Views/PlayerView';
import VehicleView from './Views/VehicleView';*/

const App = () => {
  setUpNotifications({
    defaultProps: {
      position: 'top-right',
      dismissible: true,
      showDismissButton: true,
      dismissAfter: 6000,
    },
  });
  return (
    <Provider store={store}>
      <Toasts />
      <Router history={history}>
        <Routes>
          <Route path="/">
            <Route index element={<InformationView />} />
            {/* PLAYER */}
            <Route path="player">
              <Route path=":playerUID" element={<PlayerView />} />
            </Route>
            {/* VEHICLE */}
            <Route path="vehicle">
              <Route path=":vehicleModel" element={<VehicleView />} />
            </Route>
            <Route path="/organizations" element={<ShowOrganizations />} />
            <Route path="/shop" element={<ShopView />} />
            <Route path="/exchange" element={<VehiclesView />} />
            {/* PAYMENT */}
            <Route path="payment">
              <Route path="success" element={<PaymentSuccessView />} />
              <Route path="error" element={<PaymentErrorView />} />
            </Route>

            {/* USER */}
            <Route path="user">
              <Route path="login" element={<LoginView />} />
              <Route path="reset-password" element={<PlayerPasswordRestore />} />
              <Route index element={<PlayerAccount />} />
            </Route>

            {/* SEARCH */}
            <Route path="search">
              <Route path="player" element={<SearchPlayerView />} />
              <Route path="vehicle" element={<SearchVehicleView />} />
            </Route>
            <Route path="*" element={<NotFoundView />} />
          </Route>
        </Routes>
      </Router>
      <Footer />
    </Provider>
  );
};

export default App;

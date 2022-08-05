import React from 'react';
import { HistoryRouter as Router } from 'redux-first-history/rr6';
import { Routes, Route } from 'react-router-dom';

//Redux
import { Provider } from 'react-redux';
import { store, history } from 'Store';

//import Navbar from 'Components/Navbar/Navbar.container';
import Footer from 'Components/Footer';

//Toast
//import Toasts from './Components/NotificationsSystem';

// Views
import {
  InformationView,
  /*IndexView,
  ShopView,
  VehiclesView,
  LoginView,
  NotFoundView,
  PaymentErrorView,
  PaymentSuccessView,
  PlayerAccount,
  PlayerPasswordRestore,
  ShowOrganizations,
  SearchPlayerView,
  SearchVehicleView,
  PlayerView,
  VehicleView,*/
} from './Views';

const App = () => {
  /*
            <Route path="player">
              <Route path=":playerUID" element={<PlayerView />} />
            </Route>
            <Route path="vehicle">
              <Route path="exchange" element={<VehiclesView />} />
              <Route path=":vehicleModel" element={<VehicleView />} />
            </Route>
            <Route path="organizations" element={<ShowOrganizations />} />
            <Route path="shop" element={<ShopView />} />

            <Route path="payment">
              <Route path="success" element={<PaymentSuccessView />} />
              <Route path="error" element={<PaymentErrorView />} />
            </Route>

            <Route path="player">
              <Route path="login" element={<LoginView />} />
              <Route path="reset-password" element={<PlayerPasswordRestore />} />
              <Route index element={<PlayerAccount />} />
            </Route>

            <Route path="search">
              <Route path="player" element={<SearchPlayerView />} />
              <Route path="vehicle" element={<SearchVehicleView />} />
            </Route>
            <Route path="*" element={<NotFoundView />} /> */
  return (
    <Provider store={store}>
      <Router history={history}>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/">
            <Route index element={<InformationView />} />
          </Route>
        </Routes>
      </Router>
      <Footer />
    </Provider>
  );
};

export default App;

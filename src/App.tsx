import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";

//Redux
import { store } from "Store";

// Views
import {
  //InformationView,
  IndexView,
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
  VehicleView,
} from "./Views";
import ShopChargeView from "Views/ShopChargeView/ShopChargeView";

const App = () => {
  return (
    <Provider store={store}>
      <Toaster
        position="top-right"
        toastOptions={{
          className: "",
          style: {
            //border: "1px solid #713200",
            padding: "16px",
            color: "#fff",
            background: "#111217",
          },
        }}
        reverseOrder={false}
      />
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<IndexView />} />
            <Route path="player">
              <Route path=":playerUID" element={<PlayerView />} />
            </Route>
            <Route path="vehicle">
              <Route path="exchange" element={<VehiclesView />} />
              <Route path=":vehicleModel" element={<VehicleView />} />
            </Route>
            <Route path="organizations" element={<ShowOrganizations />} />
            <Route path="shop" element={<ShopView />} />
            <Route path="shop/charge" element={<ShopChargeView />} />

            <Route path="payment">
              <Route path="success" element={<PaymentSuccessView />} />
              <Route path="error" element={<PaymentErrorView />} />
            </Route>

            <Route path="player">
              <Route path="login" element={<LoginView />} />
              <Route
                path="reset-password"
                element={<PlayerPasswordRestore />}
              />
              <Route index element={<PlayerAccount />} />
            </Route>

            <Route path="search">
              <Route path="player" element={<SearchPlayerView />} />
              <Route path="vehicle" element={<SearchVehicleView />} />
            </Route>
            <Route path="*" element={<NotFoundView />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

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
    return (
        <Router>
            {/* <Navbar /> */}
            <Switch>
                <Route exact path="/" component={InformationView} />
                {/* <Route path="/player/:playerUID" component={PlayerView} />
                <Route path="/vehicle/:vehicleModel" component={VehicleView} />
                <Route path="/organizations" component={ShowOrganizations} />
                <Route path="/shop" component={ShopView} />
                <Route path="/exchange" component={VehiclesView} />
                <Route path="/payment-success" component={PaymentSuccessView} />
                <Route path="/payment-error" component={PaymentErrorView} />
                <Route path="/login" component={LoginView} />
                <Route path="/account" component={PlayerAccount} />
                <Route path="/reset-password" component={PlayerPasswordRestore} />
                <Route path="/search/player" component={SearchPlayerView} />
                <Route path="/search/vehicle" component={SearchVehicleView} />
                <Route path="*" component={NotFoundView} /> */}
            </Switch>
            <Footer />
        </Router>
    );
};

export default App;

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

import IndexView from './Views/IndexView';
import ShopView from './Views/ShopView';
import VehiclesView from './Views/VehiclesView';
import LoginView from './Views/LoginView';
import RulesView from './Views/RulesView';
import NotFoundView from './Views/404View';

import PaymentErrorView from './Views/PaymentErrorView';
import PaymentSuccessView from './Views/PaymentSuccessView';

import PlayerAccount from './Views/Player/playerAccount';
import PlayerPasswordRestore from './Views/Player/playerPasswordRestore';

import ShowOrganizations from './Views/Organization/showOrganizations';

import SearchView from './Views/SearchView';
import PlayerView from './Views/PlayerView';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path="/" component={IndexView} />
                <Route path="/player/:playerUID" component={PlayerView} />
                <Route path="/organizations" component={ShowOrganizations} />
                <Route path="/shop" component={ShopView} />
                <Route path="/exchange" component={VehiclesView} />
                <Route path="/regulamin" component={RulesView} />
                <Route path="/payment-success" component={PaymentSuccessView} />
                <Route path="/payment-error" component={PaymentErrorView} />
                <Route path="/login" component={LoginView} />
                <Route path="/account" component={PlayerAccount} />
                <Route path="/reset-password" component={PlayerPasswordRestore} />
                <Route path="/search" component={SearchView} />
                <Route path="*" component={NotFoundView} />
            </Switch>
            <Footer />
        </Router>
    );
};

export default App;

import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import ShopPopup from '../Components/Shop/shopPopup';
import ShopCard from '../Components/Shop/shopCard';

import CrownImg from '../Assets/Images/Shop/crown.png';
import DiamondImg from '../Assets/Images/Shop/diamond.png';
import CardImg from '../Assets/Images/Shop/card.png';
import CardsImg from '../Assets/Images/Shop/cards.png';
import GarageImg from '../Assets/Images/Shop/garage.png';
import HouseImg from '../Assets/Images/Shop/house.png';

const ShopView = () => {
    const playerData = useSelector((state) => state.player);
    const history = useHistory();
    if (!playerData.personalToken) {
        history.push('/login');
    }

    const [shopSelected, setShopSelected] = useState(null);

    const popupOpen = (props_id) => {
        setShopSelected(props_id);
    };

    const popupClose = () => {
        setShopSelected(null);
    };

    return (
        <>
            {shopSelected ? (
                <ShopPopup shopSelected={shopSelected} popupClose={popupClose} />
            ) : null}

            <div className="container">
                <div className="panel mt-5">
                    <div className="panel__header">
                        <h1 className="mb-0">Sklep</h1>
                    </div>

                    <div className="panel__body">
                        <div className="row justify-content-center mt-2">
                            <h2>Konto Premium</h2>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-lg-6">
                                <ShopCard
                                    id="1"
                                    icon={CrownImg}
                                    title="Konto Gold"
                                    text="Kupując konto Gold otrzymasz złoty nick nad głową i na chacie, dzięki czemu możesz zyskać większą popularność i zacząć wyróżniać się z tłumu. Konto Gold odblokowywuje wiele dodatkowych opcji na serwerze!"
                                    info={['Zakupy w Kevin Clone', 'Zwiększone zarobki o 5%']}
                                    stats={[
                                        ['Pojazdy', 'fa fa-car', '+10'],
                                        ['Posiadłości', 'fa fa-home', '+3'],
                                        ['Godzinowo', 'fa fa-dollar-sign', '200'],
                                    ]}
                                    type="Premium"
                                    time="Czasowe"
                                    class="gold"
                                    //onClick={() => setShopSelected(1)}
                                    popupOpen={() => popupOpen(1)}
                                />
                            </div>

                            <div className="col-lg-6 mb-2">
                                <ShopCard
                                    id="2"
                                    icon={DiamondImg}
                                    title="Konto Diamond"
                                    text="Kupując konto Diamond otrzymasz diamentowy nick nad głową i na chacie, dzięki czemu możesz zyskać jeszcze większą popularność i zacząć jeszcze bardziej wyróżniać się z tłumu. Konto Diamond rozszerza możliwości dużo bardziej niż konto Gold!"
                                    info={[
                                        'Zakupy w Kevin Clone i Gnocchi',
                                        'Możliwość kupna willi 15x15',
                                        'Zwiększone zarobki o 15%',
                                        'Darmowe pokazy w klubach',
                                    ]}
                                    stats={[
                                        ['Pojazdy', 'fa fa-car', '+30'],
                                        ['Posiadłości', 'fa fa-home', '+5'],
                                        ['Godzinowo', 'fa fa-dollar-sign', '500'],
                                    ]}
                                    type="Premium"
                                    time="Czasowe"
                                    class="diamond"
                                    //onClick={() => setShopSelected(2)}
                                    popupOpen={() => popupOpen(2)}
                                />
                            </div>
                        </div>

                        <div className="row justify-content-center mt-2">
                            <h2>Karty do gry</h2>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-lg-6">
                                <ShopCard
                                    id="3"
                                    icon={CardImg}
                                    title="Dodatkowa gra"
                                    text="Kupując dodatkową grę w karty możesz zwiększyć swoją szansę na wylosowanie gotówki, która pomoże Ci zrealizować marzenia. Masz również szansę wygrać konto Gold lub Diamond nawet na 5 dni!"
                                    info={[
                                        'Kupno tego pakietu upoważna osobę, która go zakupiła, do zagrania jeszcze 1 raz w grę karcianą, która znajduje się w dashboardzie na serwerze pod przyciskiem "F5" w zakładce "Dzienna loteria".',
                                    ]}
                                    type="Karty"
                                    time="1 zagranie"
                                    class="cards"
                                    //onClick={() => setShopSelected(3)}
                                    popupOpen={() => popupOpen(3)}
                                />
                            </div>

                            <div className="col-lg-6">
                                <ShopCard
                                    id="4"
                                    icon={CardsImg}
                                    title="Zestaw kart"
                                    text="Kupując dodatkową talię do gry w karty możesz zwiększyć swoją szansę na wylosowanie gotówki, która pomoże Ci zrealizować marzenia. Masz również szansę wygrać konto Gold lub Diamond nawet na 5 dni!"
                                    info={[
                                        'Kupno tego pakietu upoważna osobę, która go zakupiła, do zagrania dodatkowe 10 razy w grę karcianą, która znajduje się w dashboardzie na serwerze pod przyciskiem "F5" w zakładce "Dzienna loteria".',
                                    ]}
                                    type="Karty"
                                    time="10 zagrań"
                                    class="cards-big"
                                    //onClick={() => setShopSelected(4)}
                                    popupOpen={() => popupOpen(4)}
                                />
                            </div>
                        </div>

                        <div className="row justify-content-center mt-2">
                            <h2>Dodatkowe miejsce</h2>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-lg-6">
                                <ShopCard
                                    id="5"
                                    icon={GarageImg}
                                    title="Więcej pojazdów"
                                    text="Kupując dodatkowe miejsce na pojazd, będziesz w stanie pochwalić się swoim znajomym różnorodną gamą pojazdów! Dzięki temu codzienny dojazd do pracy stanie się niesamowitą przygodą!"
                                    info={[
                                        'Kupno tego pakietu upoważna osobę do zakupienia na serwerze większej liczby pojazdów. Zwiększenie maksymalnej liczby pojazdów jest permanentne i nigdy nie zniknie z konta.',
                                    ]}
                                    type="Miejsce"
                                    time="+1 miejsce"
                                    class="car"
                                    //onClick={() => setShopSelected(5)}
                                    popupOpen={() => popupOpen(5)}
                                />
                            </div>

                            <div className="col-lg-6">
                                <ShopCard
                                    id="6"
                                    icon={HouseImg}
                                    title="Więcej posiadłości"
                                    text="Kupując dodatkowe miejsce na posiadłość rozszerzasz swój prestiż. Nie będziesz już musiał codziennie wracać do tego samego mieszkania! Jako iż każde mieszkanie możesz wystroić w dowolny sposób, jedno może stać się domem imprezowym!"
                                    info={[
                                        'Kupno tego pakietu upoważna osobę do zakupienia na serwerze większej liczby posiadłości. Zwiększenie maksymalnej liczby posiadłości jest permanentne i nigdy nie zniknie z konta.',
                                    ]}
                                    type="Miejsce"
                                    time="+1 miejsce"
                                    class="house"
                                    //onClick={() => setShopSelected(6)}
                                    popupOpen={() => popupOpen(6)}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ShopView;

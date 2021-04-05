//import { useState } from 'react';
//import { useSelector } from 'react-redux';
//import { useToasts } from 'react-toast-notifications';
//import axios from '../../Configs/axios';

const VehicleExchange = (props) => {
    //const playerData = useSelector((state) => state.player.personalToken);
    //const { addToast } = useToasts();

    //const { isVehicleBuyed, setIsVehicleBuyed } = useState(props.isVehicleBuyed);

    const priceFormatter = () => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        });
    };

    /*const buyVehicle = (vehicleID) => {
        if (isVehicleBuyed) {
            return addToast('Wystąpił problem z zakupem pojazdu.', { appearance: 'error' });
        }
        if (!playerData) {
            return addToast('Aby zakupić pojazd musisz się najpierw zalogować.', {
                appearance: 'error',
            });
        }
        axios
            .put('vehicle/buy', {
                vehicleID: vehicleID,
                personalToken: playerData,
            })
            .then(() => {
                setIsVehicleBuyed(1);
                addToast('Pomyślnie zakupiłeś pojazd z giełdy!', { appearance: 'success' });
            })
            .catch((error) => {
                addToast('Wystąpił problem z zakupem pojazdu.', { appearance: 'error' });
            });
    };*/

    return (
        <div className="col-lg-3 mb-4">
            <div className="row flex-row vehicle">
                <div className="vehicle__img">
                    <img
                        src={`https://cdn.insidemta.pl/vehicles/${props.model}.png`}
                        className="img-fluid"
                        alt="Vehicle"
                        loading="lazy"
                    />
                </div>
                <div className="vehicle__details">
                    <h3>{props.name}</h3>
                    <span className="text-muted">
                        <span className="detail__name">ID pojazdu:</span> {props.ID} (
                        {props.plateText})<br />
                        <span className="detail__name">Przebieg:</span> {props.mileage}km
                        <br />
                        <span className="detail__name">Silnik:</span> {props.engineCapacity}
                        <br />
                        <span className="detail__name">Kolor:</span>
                        <div
                            className="colorShowcase"
                            style={{
                                backgroundColor: 'rgba(' + props.color1 + ',255)',
                            }}
                        ></div>
                        <div
                            className="colorShowcase"
                            style={{
                                backgroundColor: 'rgba(' + props.color2 + ',255)',
                            }}
                        ></div>
                        <div
                            className="colorShowcase"
                            style={{
                                backgroundColor: 'rgba(' + props.color3 + ',255)',
                            }}
                        ></div>
                        <div
                            className="colorShowcase"
                            style={{
                                backgroundColor: 'rgba(' + props.color4 + ',255)',
                            }}
                        ></div>
                        <br />
                        <span className="detail__name">Światła:</span>
                        <div
                            className="colorShowcase"
                            style={{
                                backgroundColor: 'rgba(' + props.colorLights + ',255)',
                            }}
                        ></div>
                        <br />
                        <span className="detail__name">Ulepszenia:</span> {props.upgrades}
                        <br />
                    </span>
                    <h4 className="mt-3">{priceFormatter().format(props.price)}</h4>

                    <p className="text-muted text-center mb-0 mt-2 seller">
                        <span>Sprzedający:</span> {props.seller}
                    </p>
                </div>
                {/* <div className="mt-3">
                    <button
                        className="btn btn__insidemta d-block mx-auto"
                        onClick={() => buyVehicle(props.ID)}
                    >
                        Kup pojazd offline
                    </button>
                </div> */}
            </div>
        </div>
    );
};

export default VehicleExchange;

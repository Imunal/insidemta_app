import { useState, useEffect } from 'react';
import { useToasts } from 'react-toast-notifications';
import axios from '../Configs/axios';
import Loader from 'react-loader-spinner';
import VehicleData from '../Assets/Json/vehicleData.json';
import NoImage from '../Assets/Images/Player/no-found.png';

import { useParams, useHistory } from 'react-router-dom';

const PlayerView = () => {
    const { addToast } = useToasts();
    const history = useHistory();
    const [playerData, setPlayerData] = useState([]);

    const { playerUID } = useParams();
    if (!playerUID || isNaN(playerUID)) {
        addToast('Nie znaleziono gracza.', { appearance: 'error' });
        history.push('/search');
    }

    useEffect(() => {
        fetchPlayerData();
        // eslint-disable-next-line
    }, []);

    const fetchPlayerData = () => {
        axios
            .get(`/player/${playerUID}`)
            .then((response) => {
                setPlayerData(response.data);
            })
            .catch((error) => {
                console.log(error);
                addToast('Nie znaleziono gracza.', { appearance: 'error' });
                history.push('/search');
            });
    };

    const renderPenalties = () => {
        return playerData.penalties.map((penaltie) => (
            <div className="col-md-4 mb-2" key={penaltie.ID}>
                <div className="panel__body__element text-center">
                    <span className="text-break">Powód: {penaltie.reason}</span>
                    <br />
                    <span>Czas: {penaltie.time}</span>
                    <br />
                    <span className="badge bg-danger mx-1">{penaltie.type}</span>{' '}
                    <span className="badge bg-secondary">{penaltie.admin}</span>
                </div>
            </div>
        ));
    };

    const getVehicleName = (model) => {
        const gameVehicles = JSON.parse(JSON.stringify(VehicleData));
        return gameVehicles.names[model - 400];
    };

    const getVehicleUpgrades = (upgradesJSON) => {
        const upgrades = JSON.parse(upgradesJSON);
        if (!upgrades) return 'Brak';

        let tuning = '';
        const gameVehicles = JSON.parse(JSON.stringify(VehicleData));
        upgrades[0].map((object, index) => {
            tuning += gameVehicles.upgrades[object - 1000];

            if (index + 1 < upgrades[0].length) tuning += ', ';

            return false;
        });

        return tuning;
    };

    const rednerVehicles = () => {
        return playerData.vehicles.map((vehicle, index) => (
            <div className="col-md-4 mb-3" key={index}>
                <div className="panel__body__element text-center">
                    <img
                        className="panel__body__image img-fluid"
                        src={`https://cdn.insidemta.pl/vehicles/${vehicle.model}.png`}
                        alt="Skin"
                        loading="lazy"
                    />
                    <h6 className="mt-3 text-muted text-break">
                        {getVehicleName(vehicle.model)} ({vehicle.ID})
                    </h6>
                    <span className="text-muted text-break">
                        Poj. silnika: {vehicle.engineCapacity}
                    </span>
                    <br />
                    <span className="text-muted text-break">
                        Przebieg: {Math.floor(vehicle.mileage * 100) / 100}km
                    </span>
                    <br />
                    <span className="text-muted text-break">
                        Ulepszenia: {getVehicleUpgrades(vehicle.tuning)}
                    </span>
                </div>
            </div>
        ));
    };

    const renderRealEstate = () => {
        return playerData.realestate.map((realestate) => (
            <div className="col-md-4 mb-3" key={realestate.ID}>
                <div className="panel__body__element text-center">
                    <div className="w-10">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            width="128"
                            style={{ color: '#ccc' }}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                            />
                        </svg>
                    </div>
                    <p className="text-muted">
                        <span className="detail__name">Opłacony:</span> {realestate.date}
                        <br />
                        <span className="detail__name">Cena wynajmu: </span>${realestate.price}
                        <br />
                        <span className="detail__name">Rozmiar interioru: </span>
                        {realestate.interiorSize}
                        <br />
                    </p>
                </div>
            </div>
        ));
    };

    const renderOrganizations = () => {
        return playerData.organizations.map((organization) => (
            <div className="col-md-4 mb-3" key={organization.ID}>
                <div className="panel__body__element text-center">
                    {organization.img ? (
                        <img
                            src={organization.img}
                            className="img-fluid mx-auto w-50"
                            loading="lazy"
                            alt="Logo Organizacji"
                        ></img>
                    ) : (
                        <img
                            src={NoImage}
                            className="img-fluid mx-auto w-10"
                            loading="lazy"
                            alt="Logo Organizacji"
                        ></img>
                    )}
                    <h5 className="mt-3 text-muted text-break fw-900">
                        {organization.name} ({organization.ID})
                    </h5>
                    <span className="text-muted text-break">Utworzono: {organization.created}</span>
                    <br />
                    <span className="text-muted text-break">Lider: {organization.owner}</span>
                    <br />
                    <span className="text-muted text-break">Majątek: ${organization.money}</span>
                    <br />
                    <span className="text-muted text-break">
                        Ilość członków: {organization.players}
                    </span>
                    <br />
                    <span className="text-muted text-break">
                        Ilość pojazdów: {organization.vehicles}
                    </span>
                    <br />
                </div>
            </div>
        ));
    };

    const renderPlayerData = () => {
        return (
            <>
                <h5 className="fw-900">Podstawowe informację o koncie gracza:</h5>
                <hr />
                <div className="row">
                    <div className="col-md-2 align-self-center">
                        <img
                            className="panel__body__image img-fluid"
                            src={`https://cdn.insidemta.pl/skins/${playerData.player.skin}.png`}
                            alt="Skin"
                            loading="lazy"
                        />
                    </div>
                    <div className="col-md-5 align-self-center">
                        <p className="mb-1">
                            UID: <b>{playerData.player.UID}</b>
                        </p>
                        <p className="mb-1">
                            Typ konta:
                            {playerData.player.gold ? (
                                <span className="badge bg-warning text-dark mx-1">Gold</span>
                            ) : (
                                ''
                            )}
                            {playerData.player.diamond ? (
                                <span className="badge bg-info text-dark">Diament</span>
                            ) : (
                                ''
                            )}
                            {!playerData.player.gold || !playerData.player.diamond ? (
                                <span className="badge bg-secondary">Zwykłe</span>
                            ) : (
                                ''
                            )}
                        </p>
                        <p className="mb-1">
                            Nazwa: <b>{playerData.player.username}</b>
                        </p>
                        <p className="mb-1">
                            Utworzono dnia: <b>{playerData.player.created}</b>
                        </p>
                        <p className="mb-1">
                            Ostatnio w grze: <b>{playerData.player.lastOnline}</b>
                        </p>
                    </div>
                    <div className="col-md-5 align-self-center">
                        <div className="mb-1 d-flex align-items-center">
                            Życie:
                            <div className="progress w-100 ms-1">
                                <div
                                    className="progress-bar bg-secondary"
                                    role="progressbar"
                                    style={{
                                        width: parseInt(playerData.player.health),
                                    }}
                                    aria-valuenow={parseInt(playerData.player.health)}
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                ></div>
                            </div>
                        </div>
                        <p className="mb-1">
                            Gotówka: <b>${playerData.player.money}</b>
                        </p>
                        <p className="mb-1">
                            Saldo konta bankowego: <b>${playerData.player.bankmoney}</b>
                        </p>
                        <p className="mb-1">
                            Ostatnio w grze: <b>{playerData.player.lastOnline}</b>
                        </p>
                    </div>
                </div>
                <div className="mt-3">
                    <h5 className="fw-900">Kary gracza:</h5>
                    <hr />
                    {playerData.penalties.length ? (
                        <div className="row">{renderPenalties()}</div>
                    ) : (
                        <div className="custom__alert custom__alert__info">
                            <h1> Gracz nie posiada żadnych kar</h1>
                            <p className="m-0">
                                Aktualnie w systemie ten gracz nie posiada żadnej kary.
                            </p>
                        </div>
                    )}
                </div>
                <div className="mt-3">
                    <h5 className="fw-900">Pojazdy gracza:</h5>
                    <hr />
                    {playerData.vehicles.length ? (
                        <div className="row">{rednerVehicles()}</div>
                    ) : ''}
                </div>
                <div className="mt-3">
                    <h5 className="fw-900">Nieruchomości gracza:</h5>
                    <hr />
                    {playerData.realestate.length ? (
                        <div className="row">{renderRealEstate()}</div>
                    ) : ''}
                </div>
                <div className="mt-3">
                    <h5 className="fw-900">Organizacje gracza:</h5>
                    <hr />
                    {playerData.organizations.length ? (
                        <div className="row">{renderOrganizations()}</div>
                    ) : ''}
                </div>
            </>
        );
    };

    return (
        <>
            <div className="container">
                <div className="panel mt-5">
                    <div className="panel__header">
                        <h1 className="mb-0">Podgląd gracza</h1>
                    </div>
                    <div className="panel__body">
                        {playerData.player ? (
                            renderPlayerData()
                        ) : (
                            <div className="block__center w-100 h-100 mt-5 mb-5">
                                <Loader type="Bars" color="#ccc" height={50} width={50} />
                                <p className="text-small text-center text-muted m-0 mt-3">
                                    Trwa pobieranie danych z serwera
                                    <br />
                                    Poczekaj chwilę...
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default PlayerView;

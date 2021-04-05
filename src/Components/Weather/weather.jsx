import { useState, useEffect } from 'react';
import axiosInstance from '../../Configs/axios';
import Loader from 'react-loader-spinner';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Weather = () => {
    const [weatherData, setWeatherData] = useState([]);

    useEffect(() => {
        getWeatherData();
    }, []);

    const getWeatherData = () => {
        axiosInstance.get('/server/weather').then((response) => {
            setWeatherData(response.data);
        });
    };

    const weatherInfo = [
        ['Bezchmurne niebo', 'sun'], // LS
        ['Nie użyte', 'sun'],
        ['Nie użyte', 'cloud'],
        ['Lekkie zachmurzenie', 'cloud'], // LS
        ['Nie użyte', 'cloud'],
        ['Lekkie zachmurzenie', 'cloud'], // SF
        ['Bezchmurne niebo', 'sun'], // SF
        ['Duże zachmurzenie', 'fullCloud'], // LS SF
        ['Deszczowo', 'rain'], // LS
        ['Bardzo mgliście', 'fullCloud'], // SF
        ['Nie użyte', 'cloud'],
        ['Nie użyte', 'sun'],
        ['Duże zachmurzenie', 'fullCloud'], // LV
        ['Nie użyte', 'sun'],
        ['Nie użyte', 'sun'],
        ['Opady śniegu', 'snow'],
        ['Burza z piorunami', 'lightning'], // LS
        ['Bezchmurne niebo', 'sun'], // LV
        ['Lekkie zachmurzenie', 'cloud'], // LV
        ['Burza piaskowa', 'lightning'], // LV
    ];

    const getCityWeather = (weather) => {
        return weatherInfo[weather * 1];
    };

    const getCityWeatherInfo = (city) => {
        return getCityWeather(city)[0];
    };

    const getCityWeatherIcon = (weatherInfo) => {
        const weather = getCityWeather(weatherInfo);
        if (weather[1] === 'sun') {
            return (
                <div className="sun">
                    <div className="rays"></div>
                </div>
            );
        } else if (weather[1] === 'rain') {
            return (
                <div>
                    <div className="cloud"></div>
                    <div className="rain"></div>
                </div>
            );
        } else if (weather[1] === 'fullCloud') {
            return (
                <div>
                    <div className="fullCloud"></div>
                    <div className="fullCloud"></div>
                </div>
            );
        } else if (weather[1] === 'cloud') {
            return (
                <div className="cloudy">
                    <div className="cloud"></div>
                    <div className="sun">
                        <div className="rays"></div>
                    </div>
                </div>
            );
        } else if (weather[1] === 'lightning') {
            return (
                <div>
                    <div className="cloud"></div>
                    <div className="lightning">
                        <div className="bolt"></div>
                        <div className="bolt"></div>
                    </div>
                </div>
            );
        } else if (weather[1] === 'snow') {
            return (
                <div>
                    <div className="cloud"></div>
                    <div className="snow">
                        <div className="flake"></div>
                        <div className="flake"></div>
                    </div>
                </div>
            );
        }
    };

    const renderLoader = () => {
        return (
            <div className="block__center p-3">
                <Loader type="Bars" color="#ccc" height={50} width={50} />
                <p className="text-small text-center text-muted m-0">
                    Trwa pobieranie danych z serwera
                </p>
            </div>
        );
    };

    const renderWeather = () => {
        return (
            <>
                <Carousel showThumbs={false} showStatus={false}>
                    {weatherData.map((object) => (
                        <div className="container" key={object.weather_id}>
                            <div className="row weather__body">
                                <div className="col-md-4">
                                    <div className="weahter__icon">
                                        {object.weather_value
                                            ? getCityWeatherIcon(object.weather_value)
                                            : ''}
                                    </div>
                                </div>
                                <div className="col-md-6 align-self-center">
                                    <div className="weather text-left">
                                        <h4 className="weather__city">{object.weather_zone}</h4>
                                        <h6 className="weather__desc">
                                            {object.weather_value
                                                ? getCityWeatherInfo(object.weather_value)
                                                : ''}
                                        </h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Carousel>
            </>
        );
    };

    return <>{weatherData.length < 1 ? renderLoader() : renderWeather()}</>;
};

export default Weather;

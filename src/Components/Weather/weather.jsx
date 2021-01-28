import React from "react";
import axiosInstance from '../../Configs/axios';

import Loader from "react-loader-spinner";
import "react-responsive-carousel/lib/styles/carousel.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

class Weather extends React.Component {
  _isMounted = false;
  constructor(props) {
    super(props);
    this.state = {
      weatherData: [],
      selectedWeather: 0,
    };
  }

  cities = [
    "Los Santos",
    "Las Venturas",
    "San Fierro",

    "Red County",
    "Whetstone",
    "Flint County",
    "Bone County",
    "Tierra Robada",
  ];

  weatherInfo = [
    ["Bezchmurne niebo", "sun"], // LS
    ["Nie użyte", "sun"],
    ["Nie użyte", "cloud"],
    ["Lekkie zachmurzenie", "cloud"], // LS
    ["Nie użyte", "cloud"],
    ["Lekkie zachmurzenie", "cloud"], // SF
    ["Bezchmurne niebo", "sun"], // SF
    ["Duże zachmurzenie", "fullCloud"], // LS SF
    ["Deszczowo", "rain"], // LS
    ["Bardzo mgliście", "fullCloud"], // SF
    ["Nie użyte", "cloud"],
    ["Nie użyte", "sun"],
    ["Duże zachmurzenie", "fullCloud"], // LV
    ["Nie użyte", "sun"],
    ["Nie użyte", "sun"],
    ["Opady śniegu", "snow"],
    ["Burza z piorunami", "lightning"], // LS
    ["Bezchmurne niebo", "sun"], // LV
    ["Lekkie zachmurzenie", "cloud"], // LV
    ["Burza piaskowa", "lightning"], // LV
  ];

  componentDidMount = () => {
    this._isMounted = true;
    this.getWeatherData();
  };

  componentWillUnmount() {
    this._isMounted = false;
  };

  getWeatherData = async () => {
    try {
      await this.sleep(2000);
      const response = await axiosInstance.get('server/getWeather');
      if(this._isMounted){
        this.setState({ weatherData: response.data });
      }
    } catch (error) {
      this.setState({ onlinePlayersLoaded: true });
    }
  };

  getCityWeather = (city) => {
    return this.weatherInfo[this.state.weatherData[city]];
  };

  getCityWeatherInfo = (city) => {
    return this.getCityWeather(city)[0];
  };

  getCityWeatherIcon = (city) => {
    const weather = this.getCityWeather(city);
    if (weather[1] === "sun") {
      return (
        <div className="sun">
          <div className="rays"></div>
        </div>
      );
    } else if (weather[1] === "rain") {
      return (
        <div>
          <div className="cloud"></div>
          <div className="rain"></div>
        </div>
      );
    } else if (weather[1] === "fullCloud") {
      return (
        <div>
          <div className="fullCloud"></div>
          <div className="fullCloud"></div>
        </div>
      );
    } else if (weather[1] === "cloud") {
      return (
        <div className="cloudy">
          <div className="cloud"></div>
          <div className="sun">
            <div className="rays"></div>
          </div>
        </div>
      );
    } else if (weather[1] === "lightning") {
      return (
        <div>
          <div className="cloud"></div>
          <div className="lightning">
            <div className="bolt"></div>
            <div className="bolt"></div>
          </div>
        </div>
      );
    } else if (weather[1] === "snow") {
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

  getWidget = () => {
    if (this.state.weatherData.length < 1) {
      return (
        <div className="block__center p-3">
          <Loader type="Bars" color="#ccc" height={50} width={50} />
          <p className="text-small text-center text-muted m-0">
            Trwa pobieranie danych z serwera
          </p>
        </div>
      );
    } else {
      return (
        <>
          <Carousel showThumbs={false} showStatus={false}>
            {this.cities.map((object, index) => (
              <div className="container" key={index}>
                <div className="row weather__body">
                  <div className="col-md-4">
                    <div className="weahter__icon">
                      {this.getCityWeatherIcon(object)}
                    </div>
                  </div>
                  <div className="col-md-6 align-self-center">
                    <div className="weather text-left">
                      <h4 className="weather__city">{object}</h4>
                      <h6 className="weather__desc">
                        {this.getCityWeatherInfo(object)}
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </>
      );
    }
  };

  sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  render() {
    return <>{this.getWidget()}</>;
  }
}

export default Weather;

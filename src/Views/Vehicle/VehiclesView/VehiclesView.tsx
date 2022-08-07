import { useState, useEffect } from "react";
import axios from "Configs/axios";

//Components
import VehicleExchange from "Components/Vehicles/vehicleExchange/vehicleExchange";

//Assets
import VehicleData from "Assets/Json/vehicleData.json";
import Sadface from "Assets/Images/Player/no-found.png";

//Utils
import { getVehicleName } from "Utils/getVehicleName";
import { getVehicleColor } from "Utils/getVehicleColor";
import { getVehicleUpgrades } from "Utils/getVehicleUpgrades";
import { getVehicleEngineCapacity } from "Utils/getVehicleEngineCapacity";
import { getVehiclePlateText } from "Utils/getVehiclePlaterText";

const VehiclesView = () => {
  /*const [vehicleName, setVehicleName] = useState("");
  const [typingTimeout, setTypingTimeout] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [sortingType, setSortingType] = useState("cheap");
  const [sortingVehicleType, setSortingVehicleType] = useState("all");
  const [vehicles, setVehicles] = useState([]);

  Load vehicles
  const getExchangeVehicles = () => {
    axios.get("server/getVehiclesExchange").then((response) => {
      setVehicles(response.data);
      setIsLoading(false);
    });
  };

  useEffect(() => {
    getExchangeVehicles();
  });

  Input functioncs
  const changeName = (event) => {
    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }

    self.setState({
      vehicleName: event.target.value,
      loading: true,
      typingTimeout: setTimeout(function () {
        self.setState({ loading: false });
      }, 1000),
    });
  };

  const changeSortType = (event) => {
    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }
    this.setState({
      sortingType: event.target.value,
      loading: true,
      typingTimeout: setTimeout(function () {
        self.setState({ loading: false });
      }, 1000),
    });
  };

  const changeVehicleSortType = (event) => {
    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }
    this.setState({
      sortingVehicleType: event.target.value,
      loading: true,
      typingTimeout: setTimeout(function () {
        self.setState({ loading: false });
      }, 1000),
    });
  };

  Sorting function
  const sortVehicles = (vehicles) => {
    if (sortingType === "expensive")
      vehicles.sort((a: any, b: any) => {
        return parseFloat(a.exchangePrice) > parseFloat(b.exchangePrice)
          ? -1
          : 1;
      });
    if (sortingType === "cheap")
      vehicles.sort((a, b) => {
        return parseFloat(a.exchangePrice) > parseFloat(b.exchangePrice)
          ? 1
          : -1;
      });
    if (sortingType === "oldest")
      vehicles.sort((a, b) => {
        return parseFloat(a.mileage) > parseFloat(b.mileage) ? 1 : -1;
      });
    if (sortingType === "newest")
      vehicles.sort((a, b) => {
        return parseFloat(a.mileage) > parseFloat(b.mileage) ? -1 : 1;
      });
    if (sortingType === "slowest")
      vehicles.sort((a, b) => {
        return getVehicleEngineCapacity(a.engineCapacity) >
          getVehicleEngineCapacity(b.engineCapacity)
          ? 1
          : -1;
      });
    if (sortingType === "fastest")
      vehicles.sort((a, b) => {
        return getVehicleEngineCapacity(a.engineCapacity) >
          getVehicleEngineCapacity(b.engineCapacity)
          ? -1
          : 1;
      });
  };

  const findInTable = (table: any, model: any) => {
    for (let index = 0; index < table.length; index++) {
      if (table[index] === model) return true;
    }
    return false;
  };

  const isVehicleInCategory = (model: number) => {
    const gameVehicles = JSON.parse(JSON.stringify(VehicleData));
    if (sortingVehicleType === "all") return true;
    if (findInTable(gameVehicles[sortingVehicleType], model)) return true;
    return false;
  };

  Displaying vehicles
  const showVehicles = () => {
    if (!vehicles) return;
    const vehicles = [];

    if (vehicleName !== "") {
      vehicles.forEach((element) => {
        if (
          getVehicleName(element.model)
            .toLowerCase()
            .search(vehicleName.toLowerCase()) >= 0 &&
          isVehicleInCategory(element.model)
        ) {
          vehicles.push(element);
        }
      });
    } else {
      vehicles.forEach((element) => {
        if (isVehicleInCategory(element.model)) {
          vehicles.push(element);
        }
      });
    }
    sortVehicles(vehicles);
    if (vehicles.length) {
      return (
        <>
          {vehicles.map((object, index) => (
            <VehicleExchange
              key={index}
              ID={object.ID}
              model={object.model}
              name={getVehicleName(object.model)}
              price={object.exchangePrice}
              seller={object.username}
              mileage={Math.floor(object.mileage * 100) / 100}
              engineCapacity={object.engineCapacity}
              plateText={getVehiclePlateText(object.plateText, object.ID)}
              color1={getVehicleColor(object.color, "color1")}
              color2={getVehicleColor(object.color, "color2")}
              color3={getVehicleColor(object.color, "color3")}
              color4={getVehicleColor(object.color, "color4")}
              colorLights={getVehicleColor(object.color, "colorLights")}
              upgrades={getVehicleUpgrades(object.tuning)}
            />
          ))}
        </>
      );
    } else {
      return (
        <div className="block__center w-100 h-100">
          <img
            src={Sadface}
            className="img-fluid d-block m-2 mx-auto"
            alt="No found"
            height={80}
            width={80}
          />
          <p className="text-small text-muted mb-0 text-center">
            Niestety nie udało się znaleźć żadnego
          </p>
          <p className="text-small text-muted mb-0 text-center">
            samochodu zgodnego z Twoimi kryteriami.
          </p>
        </div>
      );
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="panel mt-5 ml-auto mr-auto">
            <div className="panel__header">
              <div className="row">
                <div className="col-lg-4">
                  <h1 className="exchange mb-0">Giełda samochodowa</h1>
                </div>

                <div className="col-lg-8">
                  <div className="row">
                    <div className="col-lg-6 p-2">
                      <input
                        type="text"
                        className="form-control"
                        onChange={(evt) => changeName(evt)}
                        placeholder="Wpisz nazwę szukanego pojazdu"
                      ></input>
                    </div>
                    <div className="col-lg-3 p-2">
                      <div className="dropdown">
                        <select
                          value={sortingVehicleType}
                          id="sortingVehicleType"
                          className="dropdown-select"
                          onChange={(evt) => changeVehicleSortType(evt)}
                        >
                          <option value="all">Wszystkie</option>
                          <option value="coupe">Coupe</option>
                          <option value="sedan">Sedan</option>
                          <option value="combi">Kombi</option>
                          <option value="sport">Sportowe</option>
                          <option value="lowirder">Low-rider</option>
                          <option value="suv">SUV</option>
                          <option value="motorbike">Motory</option>
                          <option value="transport">Dostawcze</option>
                          <option value="plane">Samoloty</option>
                          <option value="helicopter">Helikoptery</option>
                          <option value="boat">Łodzie</option>
                          <option value="special">Specjalne</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-3 p-2">
                      <div className="dropdown">
                        <select
                          value={sortingType}
                          id="sortingType"
                          className="dropdown-select"
                          onChange={(evt) => changeSortType(evt)}
                        >
                          <option value="cheap">Cena 🡑</option>
                          <option value="expensive">Cena 🡓</option>
                          <option value="oldest">Przebieg 🡑</option>
                          <option value="newest">Przebieg 🡓</option>
                          <option value="slowest">Pojemność 🡑</option>
                          <option value="fastest">Pojemność 🡓</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="panel__body">
              <div className="row">
                {isLoading && (
                  <div className="block__center w-100 h-100 mt-5 mb-0">
                    <Loader type="Bars" color="#ccc" height={50} width={50} />
                    <p className="text-small text-muted text-center">
                      Trwa wczytywanie pojazdów z giełdy
                    </p>
                  </div>
                )}

                {!isLoading && vehicles && showVehicles()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );*/
  return (
    <div>
      <p>Siema</p>
    </div>
  );
};

export default VehiclesView;

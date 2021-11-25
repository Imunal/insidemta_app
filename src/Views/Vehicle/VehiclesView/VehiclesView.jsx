import React from 'react';
import Loader from 'react-loader-spinner';
import axiosInstance from 'Configs/axios';
import VehicleExchange from 'Components/Vehicles/vehicleExchange/vehicleExchange.main';
import VehicleData from 'Assets/Json/vehicleData.json';
import Sadface from 'Assets/Images/Player/no-found.png';

class VehiclesView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vehicleName: '',
      typingTimeout: 0,
      loading: true,
      sortingType: 'cheap',
      sortingVehicleType: 'all',
      vehicles: [],
    };
  }

  componentDidMount() {
    this.getExchangeVehicles();
  }

  getVehicleName(model) {
    const gameVehicles = JSON.parse(JSON.stringify(VehicleData));
    return gameVehicles.names[model - 400];
  }

  getVehicleColor(colors, type) {
    const color = colors.split(',');
    if (type === 'color1') return color[0] + ',' + color[1] + ',' + color[2];
    if (type === 'color2') return color[3] + ',' + color[4] + ',' + color[5];
    if (type === 'color3') return color[6] + ',' + color[7] + ',' + color[8];
    if (type === 'color4') return color[9] + ',' + color[10] + ',' + color[11];
    if (type === 'colorLights') return color[12] + ',' + color[13] + ',' + color[14];
  }

  getVehicleUpgrades(upgradesJSON) {
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
  }

  pad(num, size) {
    var s = num + '';
    while (s.length < size) s = '0' + s;
    return s;
  }

  getVehiclePlateText(plate, id) {
    if (!plate || plate === '') {
      return 'SA ' + this.pad(id, 5);
    }
    return 'SA ' + plate;
  }

  // Input functioncs
  changeName = (event) => {
    const self = this;

    if (self.state.typingTimeout) {
      clearTimeout(self.state.typingTimeout);
    }

    self.setState({
      vehicleName: event.target.value,
      loading: true,
      typingTimeout: setTimeout(function () {
        self.setState({ loading: false });
      }, 1000),
    });
  };

  changeSortType = (event) => {
    const self = this;

    if (self.state.typingTimeout) {
      clearTimeout(self.state.typingTimeout);
    }
    this.setState({
      sortingType: event.target.value,
      loading: true,
      typingTimeout: setTimeout(function () {
        self.setState({ loading: false });
      }, 1000),
    });
  };

  changeVehicleSortType = (event) => {
    const self = this;

    if (self.state.typingTimeout) {
      clearTimeout(self.state.typingTimeout);
    }
    this.setState({
      sortingVehicleType: event.target.value,
      loading: true,
      typingTimeout: setTimeout(function () {
        self.setState({ loading: false });
      }, 1000),
    });
  };

  getVehicleEngineCapacity = (capacity) => {
    let c = '';
    for (let index = 0; index < capacity.length; index++) {
      if (capacity[index] === ' ') break;
      c += capacity[index];
    }

    return parseFloat(c);
  };

  // Sorting function
  sortVehicles(vehicles) {
    if (this.state.sortingType === 'expensive')
      vehicles.sort((a, b) => {
        return parseFloat(a.exchangePrice) > parseFloat(b.exchangePrice) ? -1 : 1;
      });
    if (this.state.sortingType === 'cheap')
      vehicles.sort((a, b) => {
        return parseFloat(a.exchangePrice) > parseFloat(b.exchangePrice) ? 1 : -1;
      });
    if (this.state.sortingType === 'oldest')
      vehicles.sort((a, b) => {
        return parseFloat(a.mileage) > parseFloat(b.mileage) ? 1 : -1;
      });
    if (this.state.sortingType === 'newest')
      vehicles.sort((a, b) => {
        return parseFloat(a.mileage) > parseFloat(b.mileage) ? -1 : 1;
      });
    if (this.state.sortingType === 'slowest')
      vehicles.sort((a, b) => {
        return this.getVehicleEngineCapacity(a.engineCapacity) >
          this.getVehicleEngineCapacity(b.engineCapacity)
          ? 1
          : -1;
      });
    if (this.state.sortingType === 'fastest')
      vehicles.sort((a, b) => {
        return this.getVehicleEngineCapacity(a.engineCapacity) >
          this.getVehicleEngineCapacity(b.engineCapacity)
          ? -1
          : 1;
      });
  }

  isVehicleInCategory(model) {
    const gameVehicles = JSON.parse(JSON.stringify(VehicleData));
    if (this.state.sortingVehicleType === 'all') return true;
    if (this.findInTable(gameVehicles[this.state.sortingVehicleType], model)) return true;
    return false;
  }

  findInTable(table, model) {
    for (let index = 0; index < table.length; index++) {
      if (table[index] === model) return true;
    }
    return false;
  }

  // Displaying vehicles
  showVehicles = () => {
    if (!this.state.vehicles) return;
    let vehicles = [];

    if (this.state.vehicleName !== '') {
      this.state.vehicles.forEach((element) => {
        if (
          this.getVehicleName(element.model)
            .toLowerCase()
            .search(this.state.vehicleName.toLowerCase()) >= 0 &&
          this.isVehicleInCategory(element.model)
        ) {
          vehicles.push(element);
        }
      });
    } else {
      this.state.vehicles.forEach((element) => {
        if (this.isVehicleInCategory(element.model)) {
          vehicles.push(element);
        }
      });
    }
    this.sortVehicles(vehicles);
    if (vehicles.length > 0) {
      return (
        <>
          {vehicles.map((object, index) => (
            <VehicleExchange
              key={index}
              ID={object.ID}
              model={object.model}
              name={this.getVehicleName(object.model)}
              price={object.exchangePrice}
              seller={object.username}
              mileage={Math.floor(object.mileage * 100) / 100}
              engineCapacity={object.engineCapacity}
              plateText={this.getVehiclePlateText(object.plateText, object.ID)}
              color1={this.getVehicleColor(object.color, 'color1')}
              color2={this.getVehicleColor(object.color, 'color2')}
              color3={this.getVehicleColor(object.color, 'color3')}
              color4={this.getVehicleColor(object.color, 'color4')}
              colorLights={this.getVehicleColor(object.color, 'colorLights')}
              upgrades={this.getVehicleUpgrades(object.tuning)}
            />
          ))}
        </>
      );
    } else {
      return (
        <div className="block__center w-100 h-100">
          <img
            src={Sadface}
            className="img-fluid mx-auto d-block m-2"
            alt="No found"
            height={80}
            width={80}
          />
          <p className="text-small text-center text-muted mb-0">
            Niestety nie udało się znaleźć żadnego
          </p>
          <p className="text-small text-center text-muted mb-0">
            samochodu zgodnego z Twoimi kryteriami.
          </p>
        </div>
      );
    }
  };

  // Load vehicles
  getExchangeVehicles = async () => {
    try {
      const response = await axiosInstance.get('server/getVehiclesExchange');
      this.setState({ vehicles: response.data, loading: false });
    } catch (error) {
      // this.setState({ onlinePlayersLoaded: true });
    }
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            {/* LASTES CHARACTER */}
            <div className="panel mt-5 ml-auto mr-auto">
              <div className="panel__header">
                <div className="row">
                  <div className="col-lg-4">
                    <h1 className="mb-0 exchange">Giełda samochodowa</h1>
                  </div>

                  <div className="col-lg-8">
                    <div className="row">
                      <div className="col-lg-6 p-2">
                        <input
                          type="text"
                          className="form-control"
                          onChange={(evt) => this.changeName(evt)}
                          placeholder="Wpisz nazwę szukanego pojazdu"
                        ></input>
                      </div>
                      <div className="col-lg-3 p-2">
                        <div className="dropdown">
                          <select
                            value={this.state.sortingVehicleType}
                            id="sortingVehicleType"
                            className="dropdown-select"
                            onChange={(evt) => this.changeVehicleSortType(evt)}
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
                            value={this.state.sortingType}
                            id="sortingType"
                            className="dropdown-select"
                            onChange={(evt) => this.changeSortType(evt)}
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
                  {this.state.loading && (
                    <div className="block__center w-100 h-100 mt-5 mb-0">
                      <Loader type="Bars" color="#ccc" height={50} width={50} />
                      <p className="text-small text-center text-muted">
                        Trwa wczytywanie pojazdów z giełdy
                      </p>
                    </div>
                  )}

                  {!this.state.loading && this.state.vehicles && this.showVehicles()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default VehiclesView;

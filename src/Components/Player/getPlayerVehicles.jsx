import React from "react";
import Loader from "react-loader-spinner";
import Sadface from "../../Assets/Images/Player/no-found.png";

class getPlayerVehicles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playerVehicles: [],
      playerVehiclesLoaded: false,
    };
  }

  renderPlayerVehicles = () => {
    if (this.state.playerVehiclesLoaded) {
      if (this.state.playerVehicles.length > 0) {
        return (
          <>
            {this.state.playerVehicles.map((object, index) => (
              <div className="col-md-2 mt-2" key={index}>
                <div className="text-center">
                  <div className="player">
                    <div className="player__circle block__center">
                      <img
                        src={`https://api.insidemta.pl/cdn/vehicles/${object.model}.png`}
                        className="img-fluid"
                        alt="Model"
                      />
                      <span className="player__cricle__online"></span>
                    </div>
                    <h6 className="mt-2 text-muted text-break">{object.model}</h6>
                  </div>
                </div>
              </div>
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
            Nie posiadasz żadnych pojazdów
          </p>
        </div>
        );
      }

    } else {
      return (
        <div className="block__center w-100 h-100 mt-5 mb-5">
          <Loader type="Bars" color="#ccc" height={50} width={50} />
          <p className="text-small text-center text-muted m-0">
            Trwa pobieranie danych z serwera
          </p>
        </div>
      );
    }
  };

  sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  render() {
    return <>{this.renderPlayerVehicles()}</>;
  }
}

export default getPlayerVehicles;

import React from "react";
import axios from "axios";
import Loader from "react-loader-spinner";
import Sadface from "../../Assets/Images/Player/no-found.png";

class getOnlinePlayers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      onlinePlayers: [],
      onlinePlayersLoaded: false,
    };
  }

  componentDidMount() {
    this.getOnlinePlayers();
  }

  getOnlinePlayers = async () => {
    try {
      await this.sleep(2000);
      const url = "http://api.insidemta.pl/api/getOnlinePlayers";
      const response = await axios.get(url);
      this.setState({
        onlinePlayers: response.data,
        onlinePlayersLoaded: true,
      });
    } catch (error) {
      this.setState({ onlinePlayersLoaded: true });
    }
  };

  renderOnlinePlayers = () => {
    if (this.state.onlinePlayersLoaded) {
      if (this.state.onlinePlayers.length > 0) {
        return (
          <>
            {this.state.onlinePlayers.map((object, index) => (
              <div className="col-md-2 mt-2" key={index}>
                <div className="text-center">
                  <div className="player">
                    <div className="player__circle block__center">
                      <img
                        src={`https://cdn.insidemta.pl/skins/${object.skin}.png`}
                        className="img-fluid"
                        alt="Skin"
                        loading="lazy"
                      />
                      <span className="player__cricle__online"></span>
                    </div>
                    <h6 className="mt-2 text-muted text-break">
                      {object.username}
                    </h6>
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
              Na serwerze nie ma nikogo.
            </p>
            <p className="text-small text-center text-muted mb-0">
              Może chcesz wejść i to zmienić?
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
    return <>{this.renderOnlinePlayers()}</>;
  }
}

export default getOnlinePlayers;

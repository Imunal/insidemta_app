import React from "react";
import axios from "axios";
import Loader from "react-loader-spinner";

class latestCharacter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      latestCharacters: [],
      latestCharactersLoaded: false,
    };
  }

  componentDidMount() {
    this.getLatestCharacter();
  }

  getLatestCharacter = async () => {
    try {
      await this.sleep(2000);
      const url = "http://api.insidemta.pl/api/getLatestPlayers";
      const response = await axios.get(url);
      this.setState({
        latestCharacters: response.data,
        latestCharactersLoaded: true,
      });
    } catch (error) {
      console.error(error);
    }
  };

  renderLatestCharacter = () => {
    if (this.state.latestCharactersLoaded) {
      return (
        <>
          {this.state.latestCharacters.map((object, index) => (
            <div className="col-md-3" key={index}>
              <div className="panel__body__element text-center">
                <img
                  className="panel__body__image img-fluid"
                  src={`https://cnd.insidemta.pl/skins/${object.skin}.png`}
                  alt="Skin"
                  loading="lazy"
                />
                <h6 className="mt-3 text-muted text-break">
                  {object.username}
                </h6>
              </div>
            </div>
          ))}
        </>
      );
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
    return <>{this.renderLatestCharacter()}</>;
  }
}

export default latestCharacter;

import React from 'react';
import LatestCharacter from "../Components/Player/getLatestPlayer";
import GetOnlinePlayers from "../Components/Player/getOnlinePlayers";
import Weather from "../Components/Weather/weather";

import Discord from "../Assets/Images/Social/discord.png";
import Server from "../Assets/Images/Social/server.png";


class IndexView extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            {/* LASTES CHARACTER */}
            <div className="panel mt-5">
              <div className="panel__header">
                <h1 className="mb-0">Najnowsi użytkownicy</h1>
              </div>
              <div className="panel__body">
                <div className="row">
                  <LatestCharacter />
                </div>
              </div>
            </div>

            {/* ONLINE CHARACTERS */}
            <div className="panel mt-3">
              <div className="panel__header">
                <h1 className="mb-0">Gracze online</h1>
              </div>
              <div className="panel__body">
                <div className="row">
                  <GetOnlinePlayers />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="widget mt-5">
              <div className="widget__header">
                <h1 className="mb-0">Pogoda</h1>
              </div>
              <div className="widget__body p-0">
                <Weather />
              </div>
            </div>

            <div className="widget mt-3">
              <div className="widget__header">
                <h1 className="mb-0">Dołącz do gry</h1>
              </div>
              <div className="widget__body clicable p-0">
                <a href="mtasa://graj.insidemta.pl">
                  <img
                    src={Server}
                    className="img-fluid object-cover"
                    alt="Server"
                  />
                  <div></div>
                </a>
              </div>
            </div>

            <div className="widget mt-2">
              <div className="widget__header">
                <h1 className="mb-0">Discord</h1>
              </div>
              <div className="widget__body clicable p-0">
                <a href="https://discord.gg/QB7Y6aj">
                  <img
                    src={Discord}
                    className="img-fluid object-cover"
                    alt="Discord"
                  />
                  <div></div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default IndexView;
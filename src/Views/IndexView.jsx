import React from "react";
import Image from 'react-image-webp';

import LatestCharacter from "../Components/Player/getLatestPlayer";
import GetOnlinePlayers from "../Components/Player/getOnlinePlayers";
import Weather from "../Components/Weather/weather";

import Discord from "../Assets/Images/Social/discord.jpg";
import Server from "../Assets/Images/Social/server.jpg";

import DiscordWebP from "../Assets/Images/Social/discord.webp";
import ServerWebP from "../Assets/Images/Social/server.webp";

class IndexView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playerCount: false,
    };
    this.updatePlayerCount = this.updatePlayerCount.bind(this);
  }

  updatePlayerCount(count) {
    this.setState({ playerCount: count });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            {/* LASTES CHARACTER */}
            <div className="panel mt-5">
              <div className="panel__header">
                <h1 className="mb-0">Najnowsi gracze</h1>
              </div>
              <div className="panel__body">
                <div className="row">
                  <LatestCharacter />
                </div>
              </div>
            </div>

            {/* ONLINE CHARACTERS */}
            <div className="panel mt-3">
              <div className="panel__header d-flex justify-content-between">
                <h1 className="mb-0 p-2">Ilość graczy</h1>
                <h1 className="mb-0 p-2">
                  {this.state.playerCount
                    ? this.state.playerCount + "/600"
                    : "Wczytywanie..."}
                </h1>
              </div>
              <div className="panel__body">
                <div className="row">
                  <GetOnlinePlayers updateParent={this.updatePlayerCount} />
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
                <a href="mtasa://graj.insidemta.pl:22003">
                  <Image
                      src={Server}
                      webp={ServerWebP}
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
                  <Image
                      src={Discord}
                      webp={DiscordWebP}
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

import React from 'react';
import Image from 'react-image-webp';

//import LatestCharacter from 'Components/Player/latestPlayers/latestPlayers';
//import GetOnlinePlayers from 'Components/Player/onlinePlayers/onlinePlayers.main';
//import Weather from 'Components/Weather/Weather.container';

import Discord from 'Assets/Images/Social/discord.jpg';
import Server from 'Assets/Images/Social/server.jpg';

import DiscordWebP from 'Assets/Images/Social/discord.webp';
import ServerWebP from 'Assets/Images/Social/server.webp';

import Updates from '../../Components/Updates';

const IndexView = () => {
  //const [playerCount, setPlayerCount] = useState(0);
  /*const updatePlayerCount = (count) => {
    setPlayerCount(count);
  };*/

  return (
    <>
      <div className="container">
        <Updates />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            {/* LASTES CHARACTER */}
            <div className="panel mt-5">
              <div className="panel__header">
                <h1 className="mb-0">Najnowsi gracze</h1>
              </div>
              <div className="panel__body">
                <div className="row">{/* <LatestCharacter /> */}</div>
              </div>
            </div>

            {/* ONLINE CHARACTERS */}
            <div className="panel mt-3">
              <div className="panel__header d-flex justify-content-between">
                <h1 className="mb-0 p-2">Aktualna Ilość graczy</h1>
                <h1 className="mb-0 p-2">{0 + '/600'}</h1>
              </div>
              <div className="panel__body">
                <div className="row">
                  {/* <GetOnlinePlayers updateParent={() => updatePlayerCount()} /> */}
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="widget mt-5">
              <div className="widget__header">
                <h1 className="mb-0">Pogoda</h1>
              </div>
              <div className="widget__body p-0">{/* <Weather /> */}</div>
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
            <div className="widget mt-2">
              <div className="widget__header">
                <h1 className="mb-0">Śledź rozwój projektu</h1>
              </div>
              <div className="widget__body clicable p-0">
                <a href="https://trello.com/b/ULCXr3uR/insidemta">
                  <img
                    src="https://i.imgur.com/xlYItyc.png"
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
    </>
  );
};

export default IndexView;

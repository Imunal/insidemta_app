import Image from "react-image-webp";

//import LatestCharacter from 'Components/Player/latestPlayers/latestPlayers';
//import GetOnlinePlayers from 'Components/Player/onlinePlayers/onlinePlayers.main';
//import Weather from 'Components/Weather/Weather.container';

import Discord from "Assets/Images/Social/discord.jpg";
import Server from "Assets/Images/Social/server.jpg";

import DiscordWebP from "Assets/Images/Social/discord.webp";
import ServerWebP from "Assets/Images/Social/server.webp";

import Updates from "../../Components/Updates";
import Layout from "Components/Layout/Layout";

import Panel from "Components/Panel";
import Widget from "Components/Widget";
import OnlinePlayers from "Components/Player/onlinePlayers/onlinePlayers";
import LatestPlayers from "Components/Player/latestPlayers/latestPlayers";

const IndexView = () => {
  //const [playerCount, setPlayerCount] = useState(0);
  /*const updatePlayerCount = (count) => {
    setPlayerCount(count);
  };*/

  return (
    <Layout>
      <div className="container">
        <Updates />
      </div>
      <div className="container mt-5">
        <div className="flex h-full w-full justify-center space-x-4">
          <div className="item h-auto w-5/6">
            {/* LASTES CHARACTER */}
            <Panel title="Najnowsi gracze">
              <div className="p-10">
                <LatestPlayers />
              </div>
            </Panel>

            {/* ONLINE CHARACTERS */}
            <Panel title="Aktualna Ilość graczy">
              <div className="p-10">
                <OnlinePlayers />
              </div>
            </Panel>
          </div>

          <div className="item h-auto w-1/2">
            <Widget title="Pogoda">
              <p className="mx-1 p-5 text-inside-text-light">Pogoda</p>
            </Widget>

            <Widget title="Dołącz do gry">
              <a href="mtasa://graj.insidemta.pl:22003">
                <Image
                  src={Server}
                  webp={ServerWebP}
                  className="img-fluid object-cover"
                  alt="Server"
                />
              </a>
            </Widget>

            <Widget title="Discord">
              <a href="https://discord.gg/QB7Y6aj">
                <Image
                  src={Discord}
                  webp={DiscordWebP}
                  className="img-fluid object-cover"
                  alt="Discord"
                />
              </a>
            </Widget>
            <Widget title="Śledź rozwój projektu">
              <a href="https://trello.com/b/ULCXr3uR/insidemta">
                <img
                  src="https://i.imgur.com/xlYItyc.png"
                  className="img-fluid object-cover"
                  alt="Discord"
                />
              </a>
            </Widget>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default IndexView;

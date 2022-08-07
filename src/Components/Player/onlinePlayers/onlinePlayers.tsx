import { Link } from "react-router-dom";
import Sadface from "Assets/Images/Player/no-found.png";

type OnlinePlayerType = {
  onlinePlayers: any;
};

const OnlinePlayers = ({ onlinePlayers }: OnlinePlayerType) => {
  const renderOnlinePlayers = () =>
    onlinePlayers.map((player: any) => (
      <div className="col-4 col-md-2 mt-2" key={player.UID}>
        <div className="text-center">
          <Link to={`/player/${player.UID}`}>
            <div className="player">
              <div className="player__circle block__center">
                <img
                  src={`https://cdn.insidemta.pl/skins/${player.skin}.png`}
                  className="img-fluid"
                  alt="Skin"
                  loading="lazy"
                />
                <span className="player__cricle__online"></span>
              </div>
              <h6 className="text-muted text-break mt-2 text-center">
                {player.username}
              </h6>
            </div>
          </Link>
        </div>
      </div>
    ));

  return onlinePlayers.length ? (
    renderOnlinePlayers()
  ) : (
    <div className="block__center w-100 h-100">
      <img
        src={Sadface}
        className="img-fluid d-block m-2 mx-auto"
        alt="No found"
        height={80}
        width={80}
      />
      <p className="text-small text-muted mb-0 text-center">
        Na serwerze nie ma nikogo.
      </p>
      <p className="text-small text-muted mb-0 text-center">
        Może chcesz wejść i to zmienić?
      </p>
    </div>
  );
};

export default OnlinePlayers;

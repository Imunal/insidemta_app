import { useEffect } from "react";
import { Link } from "react-router-dom";

//Assets
import Sadface from "Assets/Images/Player/no-found.png";

//Hooks
import { useServer } from "Hooks/useServer";

const OnlinePlayers = () => {
  const { isLoading, onlinePlayers, handleFetchOnlinePlayers } = useServer();

  useEffect(() => {
    handleFetchOnlinePlayers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onlinePlayers]);

  const renderOnlinePlayers = () => (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      {onlinePlayers.map((player: any) => (
        <div key={player.UID}>
          <Link to={`/player/${player.UID}`}>
            <div className="player">
              <div className="player__circle block__center">
                <img
                  src={`https://cdn.inside-mta.pl/skins/${player.skin}.png`}
                  className="img-fluid"
                  alt="Skin"
                  loading="lazy"
                />
                <span className="player__cricle__online"></span>
              </div>
              <h6 className="mt-3 break-words font-bold text-inside-text-light">
                {player.username}
              </h6>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );

  return !isLoading && onlinePlayers.length ? (
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

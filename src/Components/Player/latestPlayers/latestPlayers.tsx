import { Link } from "react-router-dom";

//Hooks
import { useServer } from "Hooks/useServer";
import { useEffect } from "react";

const LatestPlayers = () => {
  const { isLoading, latestPlayers, handleFetchLatestPlayers } = useServer();

  useEffect(() => {
    handleFetchLatestPlayers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderLatestPlayers = () => (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
      {latestPlayers.map((player: any) => (
        <Link to={`/player/${player.UID}`}>
          <div key={player.UID}>
            <div className="rounded-md bg-inside-bg-light p-5 text-center">
              <img
                className="w-64"
                src={`https://cdn.inside-mta.pl/skins/${player.skin}.png`}
                alt="Skin"
                loading="lazy"
              />
              <h6 className="mt-3 break-words text-sm font-bold text-inside-text-light">
                {player.username}
              </h6>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
  return !isLoading && latestPlayers.length ? (
    renderLatestPlayers()
  ) : (
    <div className="block__center w-100 h-100 mt-5 mb-5">
      {/* <Loader type="Bars" color="#ccc" height={50} width={50} /> */}
      <p className="text-small text-muted m-0 text-center">
        Trwa pobieranie danych z serwera
      </p>
    </div>
  );
};

export default LatestPlayers;

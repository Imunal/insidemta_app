import { Link } from "react-router-dom";

type LatestPlayersType = {
  latestPlayers: any;
};

const LatestPlayers = ({ latestPlayers }: LatestPlayersType) => {
  const renderLatestPlayers = () =>
    latestPlayers.map((player: any) => (
      <div className="col-6 col-md-3" key={player.UID}>
        <Link to={`/player/${player.UID}`}>
          <div className="panel__body__element text-center">
            <img
              className="panel__body__image img-fluid"
              src={`https://cdn.insidemta.pl/skins/${player.skin}.png`}
              alt="Skin"
              loading="lazy"
            />
            <h6 className="text-muted text-break mt-3">{player.username}</h6>
          </div>
        </Link>
      </div>
    ));
  return latestPlayers.length ? (
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

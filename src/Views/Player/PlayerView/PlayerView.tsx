import { useEffect } from "react";
import { useParams } from "react-router-dom";

//Components
import Loader from "Components/Loader/Loader";
import PlayerVehicles from "Components/Player/playerVehicles/playerVehicles";
import PlayerRealEstate from "Components/Player/playerRealEstate/playerRealEstate";
import PlayerOrganizations from "Components/Player/playerOrganizations/playerOrganizations";
import { usePlayer } from "Hooks/usePlayer";
import { Penaltie } from "Types/Penaltie";
import Layout from "Components/Layout/Layout";
import Panel from "Components/Panel";
import Spacer from "Components/Spacer";

const PlayerView = () => {
  const { playerUID } = useParams();

  const { searchedPlayer, handleFetchPlayer } = usePlayer();

  useEffect(() => {
    handleFetchPlayer(parseInt(playerUID));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderPenalties = () =>
    searchedPlayer.penalties.map((penaltie: Penaltie) => (
      <div className="col-md-4 mb-2" key={penaltie.ID}>
        <div className="panel__body__element text-center">
          <span className="text-break">Powód: {penaltie.reason}</span>
          <br />
          <span>
            Czas: {new Date(penaltie.time).toLocaleDateString("pl-PL")}
          </span>
          <br />
          <span className="badge bg-danger mx-1">{penaltie.type}</span>{" "}
          <span className="badge bg-secondary">{penaltie.admin}</span>
        </div>
      </div>
    ));

  const renderPlayer = () => (
    <>
      <h5 className="text-xl font-medium text-white">
        Podstawowe informacje o koncie gracza:
      </h5>
      <Spacer />
      <div className="grid grid-cols-1 gap-4 text-gray-400 md:grid-cols-3">
        <div className="self-center">
          <img
            className="w-48"
            src={`https://cdn.inside-mta.pl/webp/skins/${searchedPlayer.player.skin}.webp`}
            alt="Skin"
            loading="lazy"
          />
        </div>
        <div className="self-center">
          <p className="mb-1">
            UID: <b>{searchedPlayer.player.UID}</b>
          </p>
          <p className="mb-1">
            Typ konta:
            {searchedPlayer.player.gold ? (
              <span className="badge bg-warning text-dark mx-1">Gold</span>
            ) : (
              ""
            )}
            {searchedPlayer.player.diamond ? (
              <span className="badge bg-info text-dark">Diament</span>
            ) : (
              ""
            )}
            {!searchedPlayer.player.gold || !searchedPlayer.player.diamond ? (
              <span className="badge bg-secondary">Zwykłe</span>
            ) : (
              ""
            )}
          </p>
          <p className="mb-1">
            Nazwa: <b>{searchedPlayer.player.username}</b>
          </p>
          <p className="mb-1">
            Utworzono dnia:{" "}
            <b>
              {new Date(searchedPlayer.player.created).toLocaleDateString(
                "pl-PL"
              )}
            </b>
          </p>
          <p className="mb-1">
            Ostatnio w grze:{" "}
            <b>
              {new Date(searchedPlayer.player.created).toLocaleDateString(
                "pl-PL"
              )}
            </b>
          </p>
        </div>
        <div className="self-center">
          <div className="d-flex align-items-center mb-1">
            Życie:
            <div className="progress w-100 ms-1"></div>
          </div>
          <p className="mb-1">
            Gotówka: <b>${searchedPlayer.player.money}</b>
          </p>
          <p className="mb-1">
            Saldo konta bankowego: <b>${searchedPlayer.player.bankmoney}</b>
          </p>
        </div>
      </div>
      <div className="mt-5">
        {searchedPlayer.penalties.length ? (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {renderPenalties()}
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="mt-5">
        {searchedPlayer.vehicles.length ? (
          <div className="row">
            {<PlayerVehicles vehicles={searchedPlayer.vehicles} />}
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="mt-5">
        {searchedPlayer.realestates.length ? (
          <div className="row">
            {<PlayerRealEstate realEstates={searchedPlayer.realestates} />}
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="mt-5">
        {searchedPlayer.organizations.length ? (
          <div className="row">
            {
              <PlayerOrganizations
                organizations={searchedPlayer.organizations}
              />
            }
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );

  return (
    <Layout>
      <Panel title="Podgląd gracza">
        <div className="p-5">
          {searchedPlayer ? renderPlayer() : <Loader />}
        </div>
      </Panel>
    </Layout>
  );
};

export default PlayerView;

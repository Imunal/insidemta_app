import Spacer from "Components/Spacer";
import { Penaltie } from "Types/Penaltie";
import { Player } from "Types/Player";

type PlayerInformationType = {
  player: Player;
  penalties: Penaltie[];
};

const PlayerInformation = ({ player, penalties }: PlayerInformationType) => {
  const renderPenalties = () =>
    penalties.map((penaltie) => (
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

  return (
    <>
      <h5 className="text-xl font-medium text-white">
        Podstawowe informacje o twoim koncie:
      </h5>
      <Spacer />
      <div className="grid grid-cols-1 gap-4 text-gray-400 md:grid-cols-3">
        <div className="self-center">
          <img
            className="mx-auto block w-64"
            src={`https://cdn.inside-mta.pl/webp/skins/${player.skin}.webp`}
            alt="Skin"
            loading="lazy"
          />
        </div>
        <div className="self-center">
          <p className="mb-1">
            UID: <b>{player.UID}</b>
          </p>
          <p className="mb-1">
            Typ konta:
            {player.gold ? (
              <span className="badge bg-warning text-dark mx-1">Gold</span>
            ) : (
              ""
            )}
            {player.diamond ? (
              <span className="badge bg-info text-dark">Diament</span>
            ) : (
              ""
            )}
            {!player.gold || !player.diamond ? (
              <span className="badge bg-secondary">Zwykłe</span>
            ) : (
              ""
            )}
          </p>
          <p className="mb-1">
            Nazwa: <b>{player.username}</b>
          </p>
          <p className="mb-1">
            Adres e-mail: <b>{player.email}</b>
          </p>
          <p className="mb-1">
            Utworzono dnia:{" "}
            <b>{new Date(player.created).toLocaleDateString("pl-PL")}</b>
          </p>
          <p className="mb-1">
            Ostatnio w grze:{" "}
            <b>{new Date(player.lastOnline).toLocaleDateString("pl-PL")}</b>
          </p>
        </div>
        <div className="self-center">
          <div className="align-items-center mb-1 flex">
            Życie:
            <div className="progress w-100 ms-1"></div>
          </div>
          <p className="mb-1">
            Gotówka: <b>${player.money}</b>
          </p>
          <p className="mb-1">
            Saldo konta bankowego: <b>${player.bankmoney}</b>
          </p>
        </div>
      </div>
      <div className="mt-3">
        <h5 className="text-xl font-medium text-white">Twoje kary:</h5>
        <Spacer />
        {penalties && penalties.length ? (
          <div className="row">{renderPenalties()}</div>
        ) : (
          <div className="custom__alert custom__alert__info text-white">
            <h1> Nie posiadasz żadnych kar 🥰</h1>
            <p className="m-0">
              Aktualnie w systemie nie posiadasz żadnych kar. Tak trzymaj!
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default PlayerInformation;

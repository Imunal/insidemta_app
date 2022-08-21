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
      <div className="mb-2 text-gray-400" key={penaltie.ID}>
        <div className="bg-inside-bg-light p-5 text-center">
          <span className="text-break">
            Powód: {penaltie.reason} ({penaltie.ID})
          </span>
          <br />
          <span>
            Czas: {new Date(penaltie.time).toLocaleDateString("pl-PL")}
          </span>
          <br />
          <span className="rounded bg-gray-700 px-2.5 py-0.5 text-xs font-semibold text-gray-300">
            {penaltie.admin}
          </span>
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
            Typ konta:{" "}
            {player.gold ? (
              <span className="mr-2 rounded bg-yellow-700 px-2.5 py-0.5 text-xs font-semibold text-gray-300">
                Gold
              </span>
            ) : (
              ""
            )}
            {player.diamond ? (
              <span className="mr-2 rounded bg-blue-700 px-2.5 py-0.5 text-xs font-semibold text-gray-300">
                Diament
              </span>
            ) : (
              ""
            )}
            {!player.gold || !player.diamond ? (
              <span className="mr-2 rounded bg-gray-700 px-2.5 py-0.5 text-xs font-semibold text-gray-300">
                Zwykłe
              </span>
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
          <div className="align-items-center mb-1 w-full">
            <div className="inline-flex w-full">
              <div className="mr-2 self-center">Życie:</div>
              <div className="w-full self-center">
                <div className="h-2 w-full rounded bg-slate-100">
                  <div
                    className="h-2 rounded bg-red-400"
                    style={{ width: player.health }}
                  />
                </div>
              </div>
            </div>
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
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {renderPenalties()}
          </div>
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

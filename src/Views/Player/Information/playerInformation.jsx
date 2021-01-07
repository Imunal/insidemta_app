import { useSelector } from "react-redux";

function PlayerInformation() {
  const playerData = useSelector((state) => state.player);
  return (
    <>
        <h5 className="fw-900">Podstawowe informację o twoim koncie:</h5>
        <hr />
        <div className="row">
          <div className="col-md-3 align-self-center">
              <img
                className="panel__body__image img-fluid"
                src={`https://api.insidemta.pl/cdn/skins/${playerData.skin}.png`}
                alt="Skin"
              />
          </div>
          <div className="col-md-4 align-self-center">
              <p className="mb-1">UID: {playerData.UID}</p>
              <p className="mb-1">Nazwa: {playerData.username}</p>
              <p className="mb-1">Adres e-mail: {playerData.email}</p>
              <p className="mb-1">Utworzono dnia: {playerData.created}</p>
              <p className="mb-1">Ostatnio w grze: {playerData.lastOnline}</p>
          </div>
          <div className="col-md-4 align-self-center">
              <div className="mb-1 d-flex align-items-center">Życie:
                <div className="progress w-100 ms-1">
                  <div className="progress-bar bg-danger w-50" role="progressbar" aria-valuenow={playerData.health} aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              <p className="mb-1">Gotówka: ${playerData.money}</p>
              <p className="mb-1">Saldo konta bankowego: ${playerData.bankmoney}</p>
              <p className="mb-1">Ostatnio w grze: {playerData.lastOnline}</p>
          </div>
        </div>
    </>
  );
}

export default PlayerInformation;

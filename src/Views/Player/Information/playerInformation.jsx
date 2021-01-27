import { useSelector } from "react-redux";

function PlayerInformation() {
  const playerData = useSelector((state) => state.player);
  return (
    <>
      <h5 className="fw-900">Podstawowe informację o twoim koncie:</h5>
      <hr />
      <div className="row">
        <div className="col-md-2 align-self-center">
          <img
            className="panel__body__image img-fluid"
            src={`https://cdn.insidemta.pl/skins/${playerData.skin}.png`}
            alt="Skin"
            loading="lazy"
          />
        </div>
        <div className="col-md-5 align-self-center">
          <p className="mb-1">UID: <b>{playerData.UID}</b></p>
          <p className="mb-1">Nazwa: <b>{playerData.username}</b></p>
          <p className="mb-1">Adres e-mail: <b>{playerData.email}</b></p>
          <p className="mb-1">Utworzono dnia: <b>{playerData.created}</b></p>
          <p className="mb-1">Ostatnio w grze: <b>{playerData.lastOnline}</b></p>
        </div>
        <div className="col-md-5 align-self-center">
          <div className="mb-1 d-flex align-items-center">
            Życie:
            <div className="progress w-100 ms-1">
              <div
                className="progress-bar bg-danger"
                role="progressbar"
                style={{
                  width: parseInt(playerData.health),
                }}
                aria-valuenow={parseInt(playerData.health)}
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
          <p className="mb-1">Gotówka: <b>${playerData.money}</b></p>
          <p className="mb-1">Saldo konta bankowego: <b>${playerData.bankmoney}</b></p>
          <p className="mb-1">Ostatnio w grze: <b>{playerData.lastOnline}</b></p>
        </div>
      </div>
    </>
  );
}

export default PlayerInformation;

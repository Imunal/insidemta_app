import { useSelector } from "react-redux";
import NoImage from "../../../Assets/Images/Player/no-found.png";

function PlayerOrganizations() {
  const playerOrganizations = useSelector((state) => state.organizations);

  const renderOrganizations = () => {
    return playerOrganizations.map((organization) => (
      <div className="col-md-4 mb-3" key={organization.ID}>
        <div className="panel__body__element text-center">
          {organization.img ? (
            <img
              src={organization.img}
              className="img-fluid mx-auto w-50"
              loading="lazy"
              alt="Logo Organizacji"
            ></img>
          ) : (
            <img
              src={NoImage}
              className="img-fluid mx-auto w-10"
              loading="lazy"
              alt="Logo Organizacji"
            ></img>
          )}
          <h5 className="mt-3 text-muted text-break fw-900">
            {organization.name} ({organization.ID})
          </h5>
          <span className="text-muted text-break">
            Utworzono: {organization.created}
          </span>
          <br />
          <span className="text-muted text-break">
            Lider: {organization.owner}
          </span>
          <br />
          <span className="text-muted text-break">
            Majątek: ${organization.money}
          </span>
          <br />
          <span className="text-muted text-break">
            Ilość członków: {organization.players}
          </span>
          <br />
          <span className="text-muted text-break">
            Ilość pojazdów: {organization.vehicles}
          </span>
          <br />
        </div>
      </div>
    ));
  };

  return (
    <>
      <h5 className="fw-900">Organizacje do których należysz:</h5>
      <hr />
      {playerOrganizations.length ? (
          <div className="row">{renderOrganizations()}</div>
        ) : (
          <div className="custom__alert custom__alert__info">
            <h1> Nie należysz do żadnej organizacji 😔</h1>
            <p className="m-0">
              Możesz dołączyć do organizacji <b>cywilnej</b>,  <b>przestępczej</b> w każdej chwili, sprawdź czy są jakieś rekrutacje na naszym forum!
            </p>
          </div>
        )}
    </>
  );
}

export default PlayerOrganizations;

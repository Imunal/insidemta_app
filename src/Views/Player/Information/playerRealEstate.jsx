import { useSelector } from "react-redux";

function PlayerRealEstate() {
  const playerRealEstate = useSelector((state) => state.realestate);

  const renderRealEstate = () => {
    return playerRealEstate.map((realestate) => (
      <div className="col-md-4 mb-3" key={realestate.ID}>
        <div className="panel__body__element text-center">
          <span>Data: {realestate.date}</span><br/>
          <span>Cena wynajmu: ${realestate.price}</span><br/>
          <span>Rozmiar interioru: {realestate.interiorSize}</span><br/>
        </div>
      </div>
    ));
  };
  return (
    <>
      <h5 className="fw-900">Twoje nieruchomości:</h5>
      <hr />
      {playerRealEstate.length ? (
          <div className="row">{renderRealEstate()}</div>
        ) : (
          <div className="custom__alert custom__alert__info">
            <h1> Nie posiadasz żadnych nieruchomości 🏡</h1>
            <p className="m-0">
              Blipy z nieruchomościami rozmieszczone są po cały San Adreas! Wystarczy że wynajmiesz dom na dany okres i będzie twój, pamiętaj o opłaceniu czynszu na czas.
            </p>
          </div>
        )}
    </>
  );
}

export default PlayerRealEstate;

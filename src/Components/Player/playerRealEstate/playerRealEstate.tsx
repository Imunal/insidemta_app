//Types
import { RealEstate } from "Types/RealEstate";

import Spacer from "Components/Spacer";

type PlayerRealEstateTypes = {
  realEstates: RealEstate[];
};

const PlayerRealEstate = ({ realEstates }: PlayerRealEstateTypes) => {
  const renderRealEstate = () =>
    realEstates.map((realestate) => (
      <div className="mb-3" key={realestate.ID}>
        <div className="mt-5 rounded-md bg-inside-bg-medium p-5 text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            className="d-block mx-auto h-10 w-10"
            viewBox="0 0 24 24"
            stroke="currentColor"
            width="128"
            style={{ color: "#ccc" }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
          <p className="text-muted mt-3">
            <span className="text-gray-400">
              Opłacony: {new Date(realestate.date).toLocaleDateString("pl-PL")}
            </span>
            <br />
            <span className="text-gray-400">
              Cena wynajmu: ${realestate.price}
            </span>
            <br />
            <span className="text-gray-400">
              Rozmiar interioru: {realestate.interiorSize}
            </span>
          </p>
        </div>
      </div>
    ));
  return (
    <>
      <h5 className="text-xl font-medium text-white">Nieruchomości:</h5>
      <Spacer />
      {realEstates.length ? (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
          {renderRealEstate()}
        </div>
      ) : (
        <div className="custom__alert custom__alert__info">
          <h1> Nie posiadasz żadnych nieruchomości 🏡</h1>
          <p className="m-0">
            Blipy z nieruchomościami rozmieszczone są po całym San Andreas.
            Jeśli chcesz mieć swój własny kącik i dach nad głową wystarczy, że
            wynajmiesz posiadłość na dany okres czasu i będziesz pilnować opłat
            czynszu. To takie proste!
          </p>
        </div>
      )}
    </>
  );
};

export default PlayerRealEstate;

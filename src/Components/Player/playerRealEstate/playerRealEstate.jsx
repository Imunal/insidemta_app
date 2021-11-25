import React from 'react';
import PropTypes from 'prop-types';

const playerRealEstate = ({ realEstates }) => {
  const renderRealEstate = () =>
    realEstates.map((realestate) => (
      <div className="col-md-4 mb-3" key={realestate.ID}>
        <div className="panel__body__element text-center">
          <div className="w-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              width="128"
              style={{ color: '#ccc' }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
          </div>
          <p className="text-muted">
            <span className="detail__name">Opłacony:</span>
            {new Date(realestate.date).toLocaleDateString('pl-PL')}
            <br />
            <span className="detail__name">Cena wynajmu: </span>${realestate.price}
            <br />
            <span className="detail__name">Rozmiar interioru: </span>
            {realestate.interiorSize}
            <br />
          </p>
        </div>
      </div>
    ));
  return (
    <>
      <h5 className="fw-900">Nieruchomości:</h5>
      <hr />
      {realEstates.length ? (
        <div className="row">{renderRealEstate()}</div>
      ) : (
        <div className="custom__alert custom__alert__info">
          <h1> Nie posiadasz żadnych nieruchomości 🏡</h1>
          <p className="m-0">
            Blipy z nieruchomościami rozmieszczone są po całym San Andreas. Jeśli chcesz mieć swój
            własny kącik i dach nad głową wystarczy, że wynajmiesz posiadłość na dany okres czasu i
            będziesz pilnować opłat czynszu. To takie proste!
          </p>
        </div>
      )}
    </>
  );
};

export default playerRealEstate;

playerRealEstate.propTypes = {
  realEstates: PropTypes.array,
};

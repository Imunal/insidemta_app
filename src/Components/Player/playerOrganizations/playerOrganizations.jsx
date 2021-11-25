import React from 'react';
import PropTypes from 'prop-types';

import NoImage from 'Assets/Images/Player/no-found.png';

const playerOrganizations = ({ organizations }) => {
  const renderOrganizations = () =>
    organizations.map((organization) => (
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
            Utworzono: {new Date(organization.created).toLocaleDateString('pl-PL')}
          </span>
          <br />
          <span className="text-muted text-break">Lider: {organization.owner}</span>
          <br />
          <span className="text-muted text-break">
            Majątek: ${Math.round(organization.money * 100) / 100}
          </span>
          <br />
          <span className="text-muted text-break">Ilość członków: {organization.players * 5}</span>
          <br />
          <span className="text-muted text-break">Ilość pojazdów: {organization.vehicles * 3}</span>
          <br />
        </div>
      </div>
    ));

  return (
    <>
      <h5 className="fw-900">Organizacje:</h5>
      <hr />
      {organizations.length ? (
        <div className="row">{renderOrganizations()}</div>
      ) : (
        <div className="custom__alert custom__alert__info">
          <h1> Nie należysz do żadnej organizacji 😔</h1>
          <p className="m-0">
            Możesz dołączyć do organizacji cywilnej czy przestępczej praktycznie w każdym momencie.
            Nie wiesz jak to zrobić? Rozejrzyj się na forum w dziale organizacji przestępczych, czy
            żadna z nich nie prowadzi rekrutacji lub popytaj graczy na serwerze. Jeśli nie uda ci
            się znaleźć odpowiedniej dla siebie - zawsze możesz utworzyć swoją własną.
          </p>
        </div>
      )}
    </>
  );
};

export default playerOrganizations;

playerOrganizations.propTypes = {
  organizations: PropTypes.array,
};

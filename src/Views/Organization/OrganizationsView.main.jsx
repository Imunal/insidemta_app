import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Loader from 'Components/Loader/Loader';
import NoImage from 'Assets/Images/Player/no-found.png';

const OrganizationsView = ({ organizations, fetchOrganizations, isAppLoading }) => {
  useEffect(() => {
    fetchOrganizations();
  }, []);

  const renderOrganizations = () =>
    organizations.map((organization) => {
      return (
        <div className="col-md-4 mb-3" key={organization.ID}>
          <div className="panel__body__element text-center h-100">
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
                className="img-fluid mx-auto w-10 m-4"
                loading="lazy"
                alt="Logo Organizacji"
              ></img>
            )}
            <h3 className="mt-3 text-muted text-break fw-900">{organization.name}</h3>
            <p className="text-muted">
              <span className="detail__name">Lider: </span>
              {organization.username}
              <br />
              <span className="detail__name">Majątek: </span>$
              {Math.round(organization.money * 100) / 100}
              <br />
              <span className="detail__name">Limit członków: </span>
              {organization.players * 5}
              <br />
              <span className="detail__name">Limit pojazdów: </span>
              {organization.vehicles * 3}
              <br />
              <span className="detail__name">Utworzona: </span>
              {new Date(organization.created).toLocaleDateString('pl-PL')}
            </p>
          </div>
        </div>
      );
    });

  return (
    <div className="container">
      <div className="panel mt-5">
        <div className="panel__header">
          <h1 className="mb-0">Lista organizacji:</h1>
        </div>
        <div className="panel__body">
          <>
            {isAppLoading ? (
              <Loader />
            ) : (
              <div className="row">{organizations.length ? renderOrganizations() : <Loader />}</div>
            )}
          </>
        </div>
      </div>
    </div>
  );
};

export default OrganizationsView;

OrganizationsView.propTypes = {
  organizations: PropTypes.array,
  fetchOrganizations: PropTypes.func,
  isAppLoading: PropTypes.bool,
};

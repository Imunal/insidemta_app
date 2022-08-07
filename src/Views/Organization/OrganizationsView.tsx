import React, { useEffect } from "react";

import Loader from "Components/Loader/Loader";
import NoImage from "Assets/Images/Player/no-found.png";

import { useOrganization } from "Hooks/userOrganization";

//Types
import { Organization } from "Types/Organization";

const OrganizationsView = () => {
  const { organizations, handleFetchOrganization } = useOrganization();

  useEffect(() => {
    handleFetchOrganization();
  }, [handleFetchOrganization]);

  const renderOrganizations = () =>
    organizations.map((organization: Organization) => {
      return (
        <div className="col-md-4 mb-3" key={organization.ID}>
          <div className="panel__body__element h-100 text-center">
            {organization.img ? (
              <img
                src={organization.img}
                className="img-fluid w-50 mx-auto"
                loading="lazy"
                alt="Logo Organizacji"
              ></img>
            ) : (
              <img
                src={NoImage}
                className="img-fluid m-4 mx-auto w-10"
                loading="lazy"
                alt="Logo Organizacji"
              ></img>
            )}
            <h3 className="text-muted text-break fw-900 mt-3">
              {organization.name}
            </h3>
            <p className="text-muted">
              <span className="detail__name">Lider: </span>
              {organization.username}
              <br />
              <span className="detail__name">Majątek: </span>$
              {Math.round(+organization.money * 100) / 100}
              <br />
              <span className="detail__name">Limit członków: </span>
              {organization.players * 5}
              <br />
              <span className="detail__name">Limit pojazdów: </span>
              {organization.vehicles * 3}
              <br />
              <span className="detail__name">Utworzona: </span>
              {new Date(organization.created).toLocaleDateString("pl-PL")}
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
            {organizations.length ? (
              <Loader />
            ) : (
              <div className="row">{renderOrganizations()}</div>
            )}
          </>
        </div>
      </div>
    </div>
  );
};

export default OrganizationsView;

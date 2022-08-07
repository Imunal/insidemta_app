import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

//Views
import PlayerInformation from "Components/Player/playerInformation/playerInformation";
import PlayerVehicles from "Components/Player/playerVehicles/playerVehicles";
import PlayerRealEstate from "Components/Player/playerRealEstate/playerRealEstate";
import PlayerOrganizations from "Components/Player/playerOrganizations/playerOrganizations";
import PlayerSettings from "Components/Player/playerSettings/playerSettings";

//Hooks
import { usePlayer } from "Hooks/usePlayer";

const AccountView = () => {
  const navigate = useNavigate();
  const [selectedPaginate, setPaginate] = useState(1);

  const {
    player,
    organizations,
    penalties,
    vehicles,
    realestates,
    handleLogout,
  } = usePlayer();

  useEffect(() => {
    if (!player.personalToken) {
      navigate("/player/login");
    }
  }, [player.personalToken, navigate]);

  const renderPagination = () => {
    switch (selectedPaginate) {
      case 1:
        return <PlayerInformation player={player} penalties={penalties} />;
      case 2:
        return <PlayerVehicles vehicles={vehicles} />;
      case 3:
        return <PlayerRealEstate realEstates={realestates} />;
      case 4:
        return <PlayerOrganizations organizations={organizations} />;
      case 5:
        handleLogout();
        navigate("/player/login");
        break;
      case 6:
        return <PlayerSettings />;
      default:
        return null;
    }
  };

  return (
    <div className="container mt-5">
      <div className="panel">
        <div className="panel__header">
          <h1 className="mb-0">Moje konto</h1>
        </div>
        <div className="panel__body">
          <div className="row">
            <div className="col-md-3">
              <ul className="account__switcher">
                <li
                  role="button"
                  className={
                    "account__switch d-flex " +
                    (selectedPaginate === 1 ? "account__switch__active" : "")
                  }
                  onClick={() => setPaginate(1)}
                >
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      width="20"
                    >
                      <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z" />
                    </svg>
                    Podstawowe informacje
                  </div>
                </li>
                <li
                  role="button"
                  className={
                    "account__switch d-flex " +
                    (selectedPaginate === 2 ? "account__switch__active" : "")
                  }
                  onClick={() => setPaginate(2)}
                >
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      width="20"
                    >
                      <path
                        fill="#fff"
                        d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
                      />
                    </svg>
                    Moje pojazdy
                  </div>
                </li>
                <li
                  role="button"
                  className={
                    "account__switch d-flex " +
                    (selectedPaginate === 3 ? "account__switch__active" : "")
                  }
                  onClick={() => setPaginate(3)}
                >
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      width="20"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>
                    Moje posiadłości
                  </div>
                </li>
                <li
                  role="button"
                  className={
                    "account__switch d-flex " +
                    (selectedPaginate === 4 ? "account__switch__active" : "")
                  }
                  onClick={() => setPaginate(4)}
                >
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      width="20"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                      />
                    </svg>
                    Moje organizacje
                  </div>
                </li>
                <li
                  role="button"
                  className={
                    "account__switch d-flex " +
                    (selectedPaginate === 6 ? "account__switch__active" : "")
                  }
                  onClick={() => setPaginate(6)}
                >
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      width="20"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                      />
                    </svg>
                    Ustawienia konta
                  </div>
                </li>
                <li
                  role="button"
                  className="account__switch d-flex"
                  onClick={() => setPaginate(5)}
                >
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      width="20"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                      />
                    </svg>
                    Wyloguj się
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-md-9">{renderPagination()}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountView;

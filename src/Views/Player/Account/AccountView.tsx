import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

//Views
import Layout from "Components/Layout/Layout";
import Panel from "Components/Panel";
import PlayerInformation from "Components/Player/playerInformation/playerInformation";
import PlayerVehicles from "Components/Player/playerVehicles/playerVehicles";
import PlayerRealEstate from "Components/Player/playerRealEstate/playerRealEstate";
import PlayerOrganizations from "Components/Player/playerOrganizations/playerOrganizations";
import PlayerSettings from "Components/Player/playerSettings/playerSettings";

//Hooks
import { usePlayer } from "Hooks/usePlayer";

import {
  UserIcon,
  TruckIcon,
  HomeIcon,
  BriefcaseIcon,
  CogIcon,
  LogoutIcon,
} from "@heroicons/react/outline";

const accountTabs = [
  {
    tabID: 1,
    tabTitle: "Podstawowe Informacje",
    tabIcon: <UserIcon className="mr-2 h-5 w-5" />,
  },
  {
    tabID: 2,
    tabTitle: "Moje pojazdy",
    tabIcon: <TruckIcon className="mr-2 h-5 w-5" />,
  },
  {
    tabID: 3,
    tabTitle: "Moje posiadłości",
    tabIcon: <HomeIcon className="mr-2 h-5 w-5" />,
  },
  {
    tabID: 4,
    tabTitle: "Moje organizacje",
    tabIcon: <BriefcaseIcon className="mr-2 h-5 w-5" />,
  },
  {
    tabID: 5,
    tabTitle: "Ustawienia konta",
    tabIcon: <CogIcon className="mr-2 h-5 w-5" />,
  },
  {
    tabID: 6,
    tabTitle: "Wyloguj się",
    tabIcon: <LogoutIcon className="mr-2 h-5 w-5" />,
  },
];

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
    if (!player.personal_token) {
      navigate("/player/login");
    }
  }, [player.personal_token, navigate]);

  const renderNavigation = () =>
    accountTabs.map((accountTab) => (
      <li
        role="button"
        className={
          "mb-3 rounded bg-inside-bg-medium p-5 text-gray-400 hover:bg-inside-bg-light " +
          (selectedPaginate === accountTab.tabID
            ? "account__switch__active"
            : "")
        }
        onClick={() => setPaginate(accountTab.tabID)}
      >
        <div className="inline-flex">
          {accountTab.tabIcon}
          {accountTab.tabTitle}
        </div>
      </li>
    ));

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
    <Layout>
      <div className="container mt-5">
        <Panel title="Moje konto">
          <div className="grid grid-cols-1 gap-4 overflow-hidden p-10 md:grid-cols-4">
            <div>
              <ul>{renderNavigation()}</ul>
            </div>
            <div className="col-span-3">{renderPagination()}</div>
          </div>
        </Panel>
      </div>
    </Layout>
  );
};

export default AccountView;

import { createSelector } from 'reselect';

// GET PLAYER STORE
const getPlayerStore = (state) => state.rootReducer.authenication;

// GET MEMBER
const getMember = createSelector(getPlayerStore, ({ player }) => player);

// GET PLAYER PERSONAL TOKEN
const getPlayerPersonalToken = createSelector(
  getPlayerStore,
  ({ player }) => player.personal_token
);

//GET PLAYER VEHICLES
const getPlayerVehicles = createSelector(getPlayerStore, ({ player }) => player.vehicles);

//GET PLAYER REAL ESTATES
const getPlayerRealEstates = createSelector(getPlayerStore, ({ player }) => player.realestates);

//GET PLAYER ORGANIZATIONS
const getPlayerOrganizations = createSelector(getPlayerStore, ({ player }) => player.organizations);

// GET SEARCHED PLAYERS
const getSearchedPlayer = createSelector(getPlayerStore, ({ searchPlayers }) => searchPlayers);

// Export
export {
  getMember,
  getPlayerPersonalToken,
  getPlayerVehicles,
  getPlayerRealEstates,
  getPlayerOrganizations,
  getSearchedPlayer,
};

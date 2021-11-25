import { createSelector } from 'reselect';

// GET ORGANIZATION STORE
const getOrganizationStore = (state) => state.rootReducer.organization;

// GET ALL ORGANIZATIONS
const getAllOrganizations = createSelector(
  getOrganizationStore,
  ({ organizations }) => organizations
);

export { getAllOrganizations };

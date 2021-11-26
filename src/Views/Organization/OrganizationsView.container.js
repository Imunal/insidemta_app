import { connect } from 'react-redux';
import { fetchOrganizations } from 'Store/Actions/organization';

import { getLoaderState } from 'Store/Selectors/appSelector';
import { getAllOrganizations } from 'Store/Selectors/organizationSelector';
import OrganizationsView from './OrganizationsView.main';

const mapDispatchToProps = {
  fetchOrganizations: () => fetchOrganizations(),
};

const mapStateToProps = (state) => ({
  organizations: getAllOrganizations(state),
  isAppLoading: getLoaderState(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrganizationsView);

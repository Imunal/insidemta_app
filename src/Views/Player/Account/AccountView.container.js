import { connect } from 'react-redux';

import {
  getPlayerPersonalToken,
  getPlayerVehicles,
  getPlayerRealEstates,
  getPlayerOrganizations,
} from 'Store/Selectors/playerSelector';
import AccountView from './AccountView.main';

const mapStateToProps = (state) => ({
  playerPersonalToken: getPlayerPersonalToken(state),
  playerVehicles: getPlayerVehicles(state),
  playerRealEstates: getPlayerRealEstates(state),
  playerOrganizations: getPlayerOrganizations(state),
});

export default connect(mapStateToProps, null)(AccountView);

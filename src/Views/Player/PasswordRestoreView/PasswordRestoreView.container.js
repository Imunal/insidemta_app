import { connect } from 'react-redux';
import { tryPasswordReset } from 'Store/Actions/player';

import { getLoaderState } from 'Store/Selectors/appSelector';
import { getMember } from 'Store/Selectors/playerSelector';
import PasswordRestoreView from './PasswordRestoreView.main';

const mapDispatchToProps = {
  tryPasswordReset: (playerEmail) => tryPasswordReset(playerEmail),
};

const mapStateToProps = (state) => ({
  player: getMember(state),
  isAppLoading: getLoaderState(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(PasswordRestoreView);

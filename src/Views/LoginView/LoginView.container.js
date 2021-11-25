import { connect } from 'react-redux';
import { tryAuthenticate } from 'Store/Actions/player';

import { getLoaderState } from 'Store/Selectors/appSelector';
import { getMember } from 'Store/Selectors/playerSelector';
import LoginView from './LoginView.main';

const mapDispatchToProps = {
  tryAuthenticate: (playerLogin, playerPassword) => tryAuthenticate(playerLogin, playerPassword),
};

const mapStateToProps = (state) => ({
  player: getMember(state),
  isAppLoading: getLoaderState(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginView);

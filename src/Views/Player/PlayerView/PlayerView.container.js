import { connect } from 'react-redux';
import { searchPlayer } from 'Store/Actions/player';

import { getSearchedPlayer } from 'Store/Selectors/playerSelector';
import PlayerView from './PlayerView.main';

const mapDispatchToProps = {
  searchPlayer: (playerUID) => searchPlayer(playerUID),
};

const mapStateToProps = (state) => ({
  searchedPlayer: getSearchedPlayer(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(PlayerView);

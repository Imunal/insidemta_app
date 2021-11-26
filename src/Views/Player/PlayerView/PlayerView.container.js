import { connect } from 'react-redux';
import { fetchSearch } from 'Store/Actions/player';

import { getSearchedPlayer } from 'Store/Selectors/playerSelector';
import PlayerView from './PlayerView.main';

const mapDispatchToProps = {
  fetchSearch: (playerUID) => fetchSearch(playerUID),
};

const mapStateToProps = (state) => ({
  searchedPlayer: getSearchedPlayer(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(PlayerView);

import { connect } from 'react-redux';
import { fetchSearch } from 'Store/Actions/player';
import { getLoaderState } from 'Store/Selectors/appSelector';

import SearchPlayerView from './SearchPlayerView.main';

const mapDispatchToProps = {
  fetchSearch: (searchName) => fetchSearch(searchName),
};

const mapStateToProps = (state) => ({
  search: [],
  isAppLoading: getLoaderState(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchPlayerView);

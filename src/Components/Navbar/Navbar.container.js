import { connect } from 'react-redux';
import { getMember } from 'Store/Selectors/playerSelector';
import Navbar from './Navbar.main';

const mapStateToProps = (state) => ({
  user: getMember(state),
});

export default connect(mapStateToProps, null)(Navbar);

import { connect } from 'react-redux';
import { fetchWeather } from 'Store/Actions/weather';

import { getWeather } from 'Store/Selectors/weatherSelector';
import Weather from './Weather.main';

const mapDispatchToProps = {
  fetchWeather: () => fetchWeather(),
};

const mapStateToProps = (state) => ({
  weather: getWeather(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(Weather);

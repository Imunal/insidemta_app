import { connect } from 'react-redux';
import { fetchVehiclesByModel } from 'Store/Actions/vehicle';

import { getModelVehicles } from 'Store/Selectors/vehicleSelector';
import VehicleView from './VehicleView.main';

const mapDispatchToProps = {
  fetchVehiclesByModel: (vehicleModel) => fetchVehiclesByModel(vehicleModel),
};

const mapStateToProps = (state) => ({
  vehicles: getModelVehicles(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(VehicleView);

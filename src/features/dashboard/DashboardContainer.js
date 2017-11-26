import { connect } from 'react-redux';
import Dashboard from './Dashboard';

import { getAllCategories } from './duck';

const mapStateToProps = state => {
  const { dashboard } = state;

  return dashboard;
};

const mapDispatchToProps = dispatch => {
  return {
    handleGetCategories: () => {
      dispatch(getAllCategories());
    }
  };
};

const DashboardContainer = connect(mapStateToProps, mapDispatchToProps)(
  Dashboard
);
export default DashboardContainer;

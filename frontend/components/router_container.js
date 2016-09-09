import { connect } from 'react-redux';
import { requestRestaurants } from '../actions/restaurant_actions';
import Router from './router';

const mapDispatchToProps = dispatch => ({
  requestRestaurants: () => dispatch(requestRestaurants())
});

export default connect(
  null,
  mapDispatchToProps
)(Router);

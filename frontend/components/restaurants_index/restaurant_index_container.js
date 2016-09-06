import { requestRestaurants } from '../../actions/restaurant_actions';
import { connect } from 'react-redux';
import RestaurantIndex from './restaurant_index';

const mapStateToProps = state => ({
  restaurants: state.restaurants
});

const mapDispatchToProps = dispatch => ({
  requestRestaurants: () => dispatch(requestRestaurants())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RestaurantIndex);

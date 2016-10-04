import { connect } from 'react-redux';
import Search from './search';
import { queryRestaurants } from '../../actions/restaurant_actions';

const mapStateToProps = state => {
  return { restaurants: state.restaurants };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return { queryRestaurants: query => dispatch(queryRestaurants(query)) };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);

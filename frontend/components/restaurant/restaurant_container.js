import { requestSingleRestaurant } from '../../actions/restaurant_actions';
import { createReview } from '../../actions/review_actions';
import { connect } from 'react-redux';
import Restaurant from './restaurant';

const mapStateToProps = (state, ownProps) => {
  const id = parseInt(ownProps.params.id);
  const restaurant = state.restaurants.find(res=> res.id === id );
  
  return { restaurant };
};


const mapDispatchToProps = dispatch => ({
  requestSingleRestaurant: (id) => (dispatch(requestSingleRestaurant(id))),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Restaurant);

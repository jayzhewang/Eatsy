import { createReview } from '../../actions/review_actions';
import { connect } from 'react-redux';
import Reviews from './reviews';

const mapStateToProps = (state, ownProps) => {
  const parent = (ownProps.restaurant !== undefined) ? ownProps.restaurant : ownProps.user;
  return {
          parent: parent,
          
        };
};

const mapDispatchToProps = dispatch => {
  return {createReview: () => dispatch(createReview())};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Reviews);

import { ReviewConstants } from '../actions/review_actions';
import merge from 'lodash/merge';

const ReviewReducer = (state = [], action) => {
  switch(action.type){
    case ReviewConstants.RECEIVE_REVIEW:
      const review = action.review;
      return state.concat([review]);
    default:
      return state;
  }
};

export default ReviewReducer;

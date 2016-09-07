import { ReviewConstants,
         receiveReview,
       } from '../actions/review_actions';

import { createReview } from '../util/review_api_util';

const ReviewsMiddleware = ({getState, dispatch}) => next => action => {

  switch(action.type){
    case ReviewConstants.CREATE_REVIEW:
      const success = data => dispatch(receiveReview(data));
      createReview(action.review, success);
      return next(action);
    default:
      return next(action);
  }
};

export default ReviewsMiddleware;

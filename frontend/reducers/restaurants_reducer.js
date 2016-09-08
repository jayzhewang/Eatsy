import { RestaurantConstants } from '../actions/restaurant_actions';
import { ReviewConstants } from '../actions/review_actions';
import merge from 'lodash/merge';

const RestaurantsReducer = (state = [], action) => {
  switch(action.type){
    case RestaurantConstants.RECEIVE_RESTAURANTS:
      const restaurants = action.restaurants;
      return restaurants;
    case RestaurantConstants.RECEIVE_SINGLE_RESTAURANT:
      const restaurant = action.restaurant;
      return merge([], state, [restaurant]);
    case ReviewConstants.RECEIVE_REVIEW:
      const newState = merge([], state);
      newState[0].reviews.push(action.review);
      return newState;
    default:
      return state;
  }
};

export default RestaurantsReducer;

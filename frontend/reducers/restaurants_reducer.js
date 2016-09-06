import { RestaurantConstants } from '../actions/restaurant_actions';
import merge from 'lodash/merge';

const RestaurantsReducer = (state = [], action) => {
  switch(action.type){
    case RestaurantConstants.RECEIVE_RESTAURANTS:
      const restaurants = action.restaurants;
      return state.concat(restaurants);
    case RestaurantConstants.RECEIVE_SINGLE_RESTAURANT:
      const restaurant = action.restaurant;
      return state.concat([restaurant]);
    default:
      return state;
  }
};

export default RestaurantsReducer;

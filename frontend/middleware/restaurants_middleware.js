import { RestaurantConstants,
         receiveRestaurants,
         receiveSingleRestaurant
       } from '../actions/restaurant_actions';

import { fetchRestaurants,
         fetchSingleRestaurant
       } from '../util/restaurant_api_util';

const RestaurantsMiddleware = ({getState, dispatch}) => next => action => {
  switch(action.type){
    case RestaurantConstants.REQUEST_RESTAURANTS:
      const success = data => dispatch(receiveRestaurants(data));
      fetchRestaurants(success);
      return next(action);
    case RestaurantConstants.REQUEST_SINGLE_RESTAURANT:
      const success1 = data => dispatch(receiveSingleRestaurant(data));
      const resId = action.id;
      fetchSingleRestaurant(resId, success1);
      return next(action);
    default:
      return next(action);
  }
};

export default RestaurantsMiddleware;

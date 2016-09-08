import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import RestaurantsReducer from './restaurants_reducer';
import ReviewReducer from './reviews_reducer';

export default combineReducers({
  session: SessionReducer,
  restaurants: RestaurantsReducer
});

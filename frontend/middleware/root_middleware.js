import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import RestaurantsMiddleware from './restaurants_middleware';
import ReviewsMiddleware from './reviews_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  RestaurantsMiddleware,
  ReviewsMiddleware
);

export default RootMiddleware;

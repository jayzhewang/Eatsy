import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import RestaurantsMiddleware from './restaurants_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  RestaurantsMiddleware
);

export default RootMiddleware;

export const RestaurantConstants = {
  RECEIVE_RESTAURANTS: "RECEIVE_RESTAURANTS",
  REQUEST_RESTAURANTS: "REQUEST_RESTAURANTS",
  REQUEST_SINGLE_RESTAURANT: "REQUEST_SINGLE_RESTAURANT",
  RECEIVE_SINGLE_RESTAURANT: "RECEIVE_SINGLE_RESTAURANT",
  QUERY_RESTAURANTS: "QUERY_RESTAURANTS"
};

export const receiveRestaurants = restaurants => ({
  type: RestaurantConstants.RECEIVE_RESTAURANTS,
  restaurants
});

export const requestRestaurants = () => ({
  type: RestaurantConstants.REQUEST_RESTAURANTS
});

export const queryRestaurants = (query) => ({
  type: RestaurantConstants.QUERY_RESTAURANTS,
  query
});

export const requestSingleRestaurant = (id) => ({
  type: RestaurantConstants.REQUEST_SINGLE_RESTAURANT,
  id
});

export const receiveSingleRestaurant = (restaurant) => ({
  type: RestaurantConstants.RECEIVE_SINGLE_RESTAURANT,
  restaurant
});

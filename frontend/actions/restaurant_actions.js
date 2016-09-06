export const RestaurantConstants = {
  RECEIVE_RESTAURANTS: "RECEIVE_RESTAURANTS",
  REQUEST_RESTAURANTS: "REQUEST_RESTAURANTS",
  REQUEST_SINGLE_RESTAURANT: "REQUEST_SINGLE_RESTAURANT",
  RECEIVE_SINGLE_RESTAURANT: "RECEIVE_SINGLE_RESTAURANT"
};

export const receiveRestaurants = restaurants => ({
  type: RestaurantConstants.RECEIVE_RESTAURANTS,
  restaurants
});

export const requestRestaurants = () => ({
  type: RestaurantConstants.REQUEST_RESTAURANTS
});

export const requestSingleRestaurant = (id) => ({
  type: RestaurantConstants.REQUEST_SINGLE_RESTAURANT,
  id
});

export const receiveSingleRestaurant = (restaurant) => ({
  type: RestaurantConstants.RECEIVE_SINGLE_RESTAURANT,
  restaurant
});

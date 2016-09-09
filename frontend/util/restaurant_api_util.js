export const fetchRestaurants = (success) => {
  $.ajax({
    method: 'GET',
    url: 'api/restaurants',
    success
  });
};

export const fetchSingleRestaurant = (resId, success) => {
  $.ajax({
    method: 'GET',
    url: `api/restaurants/${resId}`,
    success
  });
};

export const queryRestaurants = (query, success) => {
  $.ajax({
    method: 'GET',
    url: 'api/restaurants',
    data: {query},
    success: success
  });
};

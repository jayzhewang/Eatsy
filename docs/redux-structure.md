# Redux Structure

The application's state is organized by data type. Under each data type, there
may be sub-states. Each action is listed with the sequence of events that
results from its invocation, ending with the API or a reducer. Subscribed
components, i.e. containers, are listed at the end.

Using this document, you should be able to trace an **action** starting with
where it was invoked, through the **API**/**reducer** involved, and finally to
the **components** that update as a result. Once you start implementing your
Redux structure, you'll need to do the same.

## Auth Cycles

### Session API Request Actions

* `signUp`
  0. invoked from `SignupForm` `onSubmit`
  0. `POST /api/users` is called.
  0. `receiveCurrentUser` is set as the success callback.
* `logIn`
  0. invoked from `Navbar` `onSubmit`
  0. `POST /api/session` is called.
  0. `receiveCurrentUser` is set as the callback.
* `logOut`
  0. invoked from `Navbar` `onClick`
  0. `DELETE /api/session` is called.
  0. `removeCurrentUser` is set as the success callback.
* `fetchCurrentUser`
  0. invoked from `App` in `didMount`
  0. `GET /api/session` is called.
  0. `receiveCurrentUser` is set as the success callback.

### Session API Response Actions

* `receiveCurrentUser`
  0. invoked from an API callback
  0. the `SessionReducer` stores `currentUser` in the application's state.
* `removeCurrentUser`
  0. invoked from an API callback
  0. the `SessionReducer` removes `currentUser` from the application's state.

## Error Cycles

### Error API Response Actions
* `setErrors`
  0. invoked from API callbacks on error for actions that generate POST requests
  0. the `ErrorReducer` stores the `form` in the application's state; `errors` are mapped to their respective forms
* `removeErrors`
  0. invoked from API callbacks on success for actions that generate POST requests
  0. the `ErrorReducer` removes `errors` for a given `form` in the application's state.

## Review Cycles

### Reviews API Request Actions

* `fetchAllReviews`
  0. invoked from `ReviewsIndex` `didMount`/`willReceiveProps`
  0. `GET /api/notes` is called.
  0. `receiveAllReviews` is set as the success callback.

* `createReview`
  0. invoked from new review button `onClick`
  0. `POST /api/reviews` is called.
  0. `receiveSingleReview` is set as the success callback.

* `fetchSingleReview`
  0. invoked from `NoteDetail` `didMount`/`willReceiveProps`
  0. `GET /api/reviews/:id` is called.
  0. `receiveSingleReview` is set as the success callback.

* `updateReview`
  0. invoked from `ReviewForm` `onSubmit`
  0. `POST /api/reviews` is called.
  0. `receiveSingleReview` is set as the success callback.

* `destroyReview`
  0. invoked from delete review button `onClick`
  0. `DELETE /api/reviews/:id` is called.
  0. `removeReview` is set as the success callback.

### Reviews API Response Actions

* `receiveAllReviews`
  0. invoked from an API callback
  0. the `ReviewReducer` updates `reviews` in the application's state.

* `receiveSingleReview`
  0. invoked from an API callback
  0. the `ReviewReducer` updates `reviews[id]` in the application's state.

* `removeReview`
  0. invoked from an API callback
  0. the `ReviewReducer` removes `reviews[id]` from the application's state.

## Restaurants Cycles

### Restaurants API Request Actions

* `fetchAllRestaurants`
  0. invoked from `RestaurantsIndex` `didMount`/`willReceiveProps`
  0. `GET /api/restaurants` is called.
  0. `receiveAllRestaurants` is set as the success callback.

* `fetchSingleRestaurant`
  0. invoked from `RestaurantDetail` `didMount`/`willReceiveProps`
  0. `GET /api/restaurants/:id` is called.
  0. `receiveSingleRestaurant` is set as the success callback.

### Restaurants API Response Actions

* `receiveAllRestaurants`
  0. invoked from an API callback.
  0. The `Restaurant` reducer updates `restaurants` in the application's state.

* `receiveSingleRestaurant`
  0. invoked from an API callback.
  0. The `Restaurant` reducer updates `restaurants[id]` in the application's state.

## Tags Cycles

### Tags API Request Actions

* `fetchAllTags`
  0. invoked from `TagsIndex` `didMount`/`willReceiveProps`
  0. `GET /api/tags` is called.
  0. `receiveAllTags` is set as the success callback.

* `fetchSingleTag`
  0. invoked from `TagDetail` `didMount`/`willReceiveProps`
  0. `GET /api/tags/:id` is called.
  0. `receiveSingleTag` is set as the success callback.

### Tags API Response Actions

* `receiveAllTags`
  0. invoked from an API callback.
  0. The `Tag` reducer updates `tags` in the application's state.

* `receiveSingleTag`
  0. invoked from an API callback.
  0. The `Tag` reducer updates `tags[id]` in the application's state.

## SearchSuggestion Cycles

* `fetchSearchSuggestions`
  0. invoked from `SearchBar` `onChange` when there is text
  0. `GET /api/restaurants` is called with `text` param.
  0. `receiveSearchSuggestions` is set as the success callback.

* `receiveSearchSuggestions`
  0. invoked from an API callback.
  0. The `SearchSuggestion` reducer updates `suggestions` in the application's state.

* `removeSearchSuggestions`
  0. invoked from `RestaurantSearchBar` `onChange` when empty
  0. The `SearchSuggestion` reducer resets `suggestions` in the application's state.

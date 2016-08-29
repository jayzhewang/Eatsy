<h1>Component Hierarchy</h1>
<h2>AuthFormContainer</h2>
  <ul>
    <li type='disc'>AuthForm</li>
  </ul>
<h2>Main</h2>
  <ul>
    <li type='disc'>Nav Bar</li>
    <li type='disc'>Footer</li>
  </ul>
<h2>Footer</h2>
  <ul>
    <li type='disc'>About</li>
    <li type='disc'>Discover<li>
    <li type='disc'>Copyright<li>
  </ul>
<h2>NavContainer</h2>
  <ul>
    <li type='disc'>Navigation Bar</li>
    <li type='disc'>Search<li>
  </ul>
<h2>UserContainer</h2>
  <ul>
    <li type='disc'>Picture</li>
    <li type='disc'>Info/Stats</li>
    <li type='disc'>Recent Reviews</li>
    <li type='disc'>Related Reviews</li>
  </ul>
<h2>ReviewContainer</h2>
  <li type='disc'>User Picture<li>
  <li type='disc'>Photo<li>
  <li type='disc'>Rating<li>
  <li type='disc'>Body<li>
  <li type='disc'>Tags</li>
<h2>TagsContainer</li>
  <li type='disc'>Useful/Funny/Cool Buttons<li>
<h2>RestaurantContainer</h2>
  <li type='disc'>Name<li>
  <li type='disc'>Ratings<li>
  <li type='disc'>Hours/Location/Map<li>
  <li type='disc'>Photos<li>
  <li type='disc'>Writing Review/Add Favorites/Bookmark Buttons<li>
<h2>SearchResultsContainer</h2>
  <li type='disc'>Restaurant Photo(1)<li>
  <li type='disc'>Name/Ratings<li>
  <li type='disc'>Restaurant Location<li>
  <li type='disc'>Latest Review(1)<li>
  <li type='disc'>Maps<li>
<h2>Search</h2>
<h2>RestaurantSearch</h2>
  <li type='disc'>AutoSearch</li>
  <li type='disc'>AutoSearchResults</li>
<h2>LocationSearch</h2>
  <li type='disc'>AutoSearch</li>
  <li type='disc'>AutoSearchResults</li>
<h1>Routes</h1>
| Paths                  | Components           |
| -----------------------|---------------------:|
| "sign_in"              | "AuthFormContainer"  |
| "sign_up"              | "AuthFormContainer"  |   
| "main"                 | "Main"               |   
| "main/users/:id"       | "UserContainer"      |   
| "main/restaurants/:id" | "RestaurantContainer"|   
| "search/restaurant"    | "RestaurantSearch"   |   
| "search/location"      | "LocationSearch"     |   

<img src='http://res.cloudinary.com/cloudlicious/image/upload/v1476903604/Screen_Shot_2016-10-19_at_11.59.09_AM_szwn3u.png'/>
</br>
<a href='www.eatsyapp.net'>Live</a>

<p>Eatsy is a crowd sourced restaurant review app.</p>
<p>Find your favorite local restaurants.</p>
<p>Login and leave reviews to help other find great restaurants.</p>
<p>Built with Ruby on Rails and PostgreSQL in back, with React/Redux for on the front.</p>
<p>Reliable back end, fluid and interactive front end.</p>

<h1>Features</h1>
<p>Beautifully listed restaurants at a glance.</p>
<img src='http://res.cloudinary.com/cloudlicious/image/upload/v1476904480/Screen_Shot_2016-10-19_at_12.14.17_PM_sjew0j.png'
width='400'
height='145'/>
<br/>
<p>Search restaurants by name.<p/>
<img src='http://res.cloudinary.com/cloudlicious/image/upload/v1476905078/Screen_Shot_2016-10-19_at_12.24.09_PM_rhwyi8.png'
width='400'
height='61'/>
<br/>
<p>Simple, intuitive login and signup interface.</p>
<img src='http://res.cloudinary.com/cloudlicious/image/upload/v1476904651/Screen_Shot_2016-10-19_at_12.17.13_PM_z2epsd.png'
width='400'
height='375'/>
<br/>
<p>Google Maps integration for easy location overview</p>
<img src='http://res.cloudinary.com/cloudlicious/image/upload/v1476904833/Screen_Shot_2016-10-19_at_12.20.19_PM_a9q2au.png'
width='400'
height='266'/>
<br/>
<p>Leave reviews.</p>
<img src='http://res.cloudinary.com/cloudlicious/image/upload/v1476904895/Screen_Shot_2016-10-19_at_12.21.08_PM_m9b9tm.png'
width='400'
height='129'/>

<h1>Implementations</h1>
<p>The database is created with three models, User, Restaurant, and Review. Each time a user logs in and creates a new comment,
a new review is created which contains a restaurant_id and a user_id that connects all three models.</p>
<p>When a user signs in, window.currentUser ensures persistent session.<p>

```
<% if signed_in? %>
  window.currentUser = <%= render("api/users/user.json.jbuilder", user: current_user).html_safe %>
<% end %>
```

<p>When a user makes a search query by restaurant name, ActiveRecord queries the database and the controller returns a JSON object to the front end.</p>

```
def index
  if params[:query]
    @restaurants = Restaurant.where('name ILIKE ?', "%#{params[:query]}%")
  else
    @restaurants = Restaurant.all
  end

  render :index
end
```
```
json.array! @restaurants,
              :id,
              :name,
              :description
              ...
```
<p>Before the list of restaurants is passed to the search component on the front end, the search component makes an API request through the Redux loop.
The restaurant_index component subscribes to the store and listens for changes to state of the list of restaurants.
Upon receiving the JSON object for the list of restaurants, the store updates it's state, and the restaurant_index component takes the list of restaurants and renders to the user.</p>

```javascript
handleSearch(e){
  e.preventDefault();
  this.props.queryRestaurants(this.state.name);
  this.changed = true;
}
```
```javascript
componentDidMount(){
  this.props.requestRestaurants();
}
```
<p>All front end components subscribe to the store. The global store is made available through the router and provider.</p>

```javascript
<Provider store={store}>
  <RouterContainer />
</Provider>
```

```javascript
<Router history={ hashHistory }>
  <Route path='/' component={ App }>
    <IndexRoute component={ RestaurantIndexContainer } onEnter={this.reloadRestaurants} />
    <Route path='/restaurants/:id' component={ RestaurantContainer } />
    <Route path='/users/:id' component={ UserContainer } />
    <Route path='/login' component={ SessionFormContainer } />
    <Route path='/signup' component={ SessionFormContainer } />
  </Route>
</Router>
```
<p>Google maps listens for state change in the list of restaurants and renders accordingly.</p>

```javascript
restaurants.forEach(res=>{
  if(res.location.indexOf('San Francisco') !== -1){
    markers.push([res.name, res.get_lng_lat[0], res.get_lng_lat[1]]);
    infoWindowContent.push([
      `<div class="map-marker-info">` +
      `<h3>${res.name}</h3>` +
      `<span>${this.starRating(res.rating)}</span>` +
      `<p>${res.price_range}</p>` +
      `<h2>${res.phone_number}</h2>` +
      `</div>`]);
    }
  });
  ...
}
```

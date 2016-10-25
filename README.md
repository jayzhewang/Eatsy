<img src='http://res.cloudinary.com/cloudlicious/image/upload/v1476903604/Screen_Shot_2016-10-19_at_11.59.09_AM_szwn3u.png'/>
</br>
<a href='http://www.eatsyapp.net/'>Live</a>

<p>Eatsy is a crowd sourced restaurant review app.</p>
<p>Find your favorite local restaurants.</p>
<p>Login and leave reviews to help other find great restaurants.</p>
<p>Single page application. Built with Ruby on Rails and PostgreSQL in back, with React/Redux for on the front.</p>
<p>Reliable back end, fluid and interactive front end.</p>

<h1>Features</h1>
<p>Beautifully listed restaurants at a glance.</p>
<img src='http://res.cloudinary.com/cloudlicious/image/upload/v1476904480/Screen_Shot_2016-10-19_at_12.14.17_PM_sjew0j.png'
width='400'
height='145'/>
<br/>
<br/>
<p>Search restaurants by name.<p/>
<img src='http://res.cloudinary.com/cloudlicious/image/upload/v1476905078/Screen_Shot_2016-10-19_at_12.24.09_PM_rhwyi8.png'
width='400'
height='61'/>
<br/>
<br/>
<p>Beautiful pictures with scrolling.</p>
<img src='app/assets/images/scroll.gif'
     width='400'
     height='148'/>
<br />
<br />
<p>Simple, intuitive login and signup interface.</p>
<img src='http://res.cloudinary.com/cloudlicious/image/upload/v1476904651/Screen_Shot_2016-10-19_at_12.17.13_PM_z2epsd.png'
width='400'
height='375'/>
<br/>
<br/>
<p>Leave reviews.</p>
<img src='http://res.cloudinary.com/cloudlicious/image/upload/v1476904895/Screen_Shot_2016-10-19_at_12.21.08_PM_m9b9tm.png'
width='400'
height='129'/>
<br />
<br />
<p>Google Maps integration for easy location overview</p>
<img src='http://res.cloudinary.com/cloudlicious/image/upload/v1476904833/Screen_Shot_2016-10-19_at_12.20.19_PM_a9q2au.png'
width='400'
height='266'/>
<br/>

<h1>Implementations</h1>
<p>The database is created with three models, User, Restaurant, and Review. Each time a user logs in and creates a new comment,
a new review is created which contains a restaurant_id and a user_id that connects all three models.</p>
<p>When a user signs in, window.currentUser ensures persistent session.</p>

```ruby
<% if signed_in? %>
  window.currentUser = <%= render('api/users/user.json.jbuilder', user: current_user).html_safe %>
<% end %>
```

<p>When a user makes a search query by restaurant name, the search component makes an API request to the rails server and enters the Redux loop.
The restaurant_index component subscribes to the store and listens for changes to the current list of restaurants.</p>

```javascript
handleSearch(e){
  e.preventDefault();
  this.props.queryRestaurants(this.state.name);
  this.changed = true;
}
```

<p>ActiveRecord queries the database and the controller returns a JSON object to the front end.</p>

```ruby
def index
  if params[:query]
    @restaurants = Restaurant.where('name ILIKE ?', "%#{params[:query]}%")
  else
    @restaurants = Restaurant.all
  end

  render :index
end
```

```ruby
json.array! @restaurants,
:id,
:name,
:description
...
```

<p>Upon receiving the JSON object for the list of restaurants, the store updates it's state, and the restaurant_index component takes the new list of restaurants and renders to the user.</p>

```javascript
componentDidMount(){
  this.props.requestRestaurants();
}
```

<p>All react components subscribe intelligently to the store, each listening to specific changes in the store and re-renders accordingly. The global store is made available to all components through the react provider and router.</p>

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
<p>Google maps listens for changes in the list of restaurants and re-renders accordingly.</p>

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

<p>The scroll feature of a restaurant's picture frame is achieved by using a combination of transform/keyframe and jQuery's DOM manipulation.</p>
<p>5 pictures are loaded at a time with only the middle 3 visible. This is achieved by setting the pictures' container to 'overflow: hidden'. A Picture's horizontal translation and resizing is created by setting its transform and keyframes properties. Since each actively scrolling picture translates and resizes differently, each has a different active class appended on using jQuery. The transform property has the same duration as the setTimeout function, which clears the active classes of each picture and sets the new current position of these pictures.</p>

```javascript
$('.primary').addClass('primary-slider-left');
$('.secondary').addClass('secondary-slider-left');
$('.tertiary').addClass('tertiary-slider-left');
$('._tertiary').addClass('_tertiary-slider-left');
$('._tertiary').removeClass('z-1');
setTimeout(()=>{
  $('.primary').removeClass('primary-slider-left');
  $('.secondary').removeClass('secondary-slider-left');
  $('.tertiary').removeClass('tertiary-slider-left');
  $('._tertiary').removeClass('_tertiary-slider-left');
  this.setState({
    photos: newPhotos,
    scrolling: false
  });
  $('._tertiary').addClass('z-1');
}, 900);
```

<p>Auto scrolling of the picture frame is achieved using setInterval which is invoked when the pictures in the state have been updated. Auto scrolling is deactivated when user leaves the page to prevent the stacking effect of simultaneous setIntervals. It is accomplished by invoking clearInterval in react's componentWillUnmount.</p>

```javascript
...
this.autoScroll = setInterval(()=>this._scrollPictures('left'), 5000);
...

componentWillUnmount(){
  clearInterval(this.autoScroll);
}
```

<h1>Future Improvements</h1>
<ol>
  <li type='I'>User's page, with user stats.</li>
  <li type='I'>Ability to delete own comments, connect with other users.</li>
  <li type='I'>Ability to create restaurants.</li>
  <li type='I'>Ability to save favorite restaurants/comments/photos.</li>
</ol>

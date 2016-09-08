import React from 'react';
import ReviewsContainer from '../reviews/reviews_container';
import Map from '../map/map.jsx';
import StarRatingComponent from 'react-star-rating-component';

class Restaurant extends React.Component {
  componentDidMount(){
    this.props.requestSingleRestaurant(this.props.params.id);
  }

  render() {
    if (this.props.restaurant === undefined){
      return <div>Loading...</div>;
    } else {
      const restaurant = this.props.restaurant;
      const photos = restaurant.photos.split(" ");
      const primary = photos[0];
      const rating = restaurant.rating;
      const yesNo = { true: "Yes", false: "No"};

      return (
        <div className="restaurant-content">

          <header className="restaurant-top group">
            <div className="restaurant-top-left-side">
              <h1>{restaurant.name}</h1>
                <StarRatingComponent name='starRateStatic'
                                     starCount={5}
                                     value={rating}
                                     starColor={'#e5050b'}
                                     editing={false}
                />
              </div>
              <div>{restaurant.price_range}</div>
            </div>
            <div className="restaurant-top-right-side">
              <button type="button">Write a Review</button>
              <button type="button">Add Photo</button>
            </div>
          </header>

          <header className="restaurant-middle group">
            <div className="restaurant-middle-map">
              {restaurant.get_lng_lat ? <Map position={restaurant.get_lng_lat} /> : <div>Map Loading...</div> }
            </div>
            <div className='restaurant-middle-pictures'>
              <img src={`${primary}`} alt='front picture' height="200" width="200"/>
            </div>
          </header>

          <content className="restaurant-bottom group">
            <div className="restaurant-bottom-reviews">
              <ReviewsContainer restaurant={restaurant} />
            </div>

            <div className="restaurant-bottom-sidebar">
              <div className='restaurant-bottom-sidebar-hours'>
                <h1>Hours</h1>
                <div>{restaurant.hours}</div>
              </div>

              <div className='restaurant-bottom-sidebar-info'>
                <h1>More Restaurant Info</h1>

                <div className='sidebar-info group'><div className='sidebar-info-left'>Delivery</div> <div className='sidebar-info-right'>{yesNo[restaurant._delivery]}</div></div>
                <div className='sidebar-info group'><div className='sidebar-info-left'>Take-out</div> <div className='sidebar-info-right'>{yesNo[restaurant._take_out]}</div></div>
                <div className='sidebar-info group'><div className='sidebar-info-left'>Accepts Credit Cards</div> <div className='sidebar-info-right'>{yesNo[restaurant._accepts_credit_card]}</div></div>
                <div className='sidebar-info group'><div className='sidebar-info-left'>Accepts Apple Pay</div> <div className='sidebar-info-right'>{yesNo[restaurant._accepts_apple_pay]}</div></div>
                <div className='sidebar-info group'><div className='sidebar-info-left'>Parking</div> <div className='sidebar-info-right'>{restaurant._parking}</div></div>
                <div className='sidebar-info group'><div className='sidebar-info-left'>Bike Parking</div> <div className='sidebar-info-right'>{yesNo[restaurant._bike_parking]}</div></div>
                <div className='sidebar-info group'><div className='sidebar-info-left'>Wheelchair Accessible</div> <div className='sidebar-info-right'>{yesNo[restaurant._wheelchair_accessible]}</div></div>
                <div className='sidebar-info group'><div className='sidebar-info-left'>Attire</div> <div className='sidebar-info-right'>{restaurant._attire}</div></div>
                <div className='sidebar-info group'><div className='sidebar-info-left'>Ambience</div> <div className='sidebar-info-right'>{restaurant._ambience}</div></div>
                <div className='sidebar-info group'><div className='sidebar-info-left'>Noise Level</div> <div className='sidebar-info-right'>{restaurant._noise_level}</div></div>
                <div className='sidebar-info group'><div className='sidebar-info-left'>Alcohol</div> <div className='sidebar-info-right'>{yesNo[restaurant._alcohol]}</div></div>
                <div className='sidebar-info group'><div className='sidebar-info-left'>Outdoor Seating</div> <div className='sidebar-info-right'>{yesNo[restaurant._outdoor_seating]}</div></div>
                <div className='sidebar-info group'><div className='sidebar-info-left'>Has TV</div> <div className='sidebar-info-right'>{yesNo[restaurant._has_tv]}</div></div>
                <div className='sidebar-info group'><div className='sidebar-info-left'>Waiter Service</div> <div className='sidebar-info-right'>{yesNo[restaurant._waiter_service]}</div></div>
                <div className='sidebar-info group'><div className='sidebar-info-left'>Caters</div> <div className='sidebar-info-right'>{yesNo[restaurant.caters]}</div></div>
              </div>
            </div>
          </content>

        </div>
      );
    }
  }
}

export default Restaurant;

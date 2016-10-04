import React from 'react';
import ReviewsContainer from '../reviews/reviews_container';
import Map from '../map/map.jsx';
import StarRatingComponent from 'react-star-rating-component';

class Restaurant extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      showForm: false

    };

    this._formSwitch = this._formSwitch.bind(this);
  }

  coomponentDidUpdate(){
    window.console.log(this);
  }

  componentDidMount(){
    this.props.requestSingleRestaurant(this.props.params.id);
  }

  _showForm(){
    this.showForm = true;
  }

  _formSwitch(){
    this.setState({showForm: true});
  }

  _showReviewButton(){
    if(this.props.currentUser){
      return (
        <div onClick={this._formSwitch}
             className='restaurant-reviews-create'>
          <span>Write A Review</span>
        </div>
      );
    }
  }

  render() {
    if (this.props.restaurant === undefined){
      return <div>Loading...</div>;
    } else {
      const restaurant = this.props.restaurant;
      const photos = restaurant.photos.split(" ");
      const primary = photos[0];
      const secondary = photos[1];
      const tertiary = photos[2];
      const rating = restaurant.rating;
      const yesNo = { true: "Yes", false: "No"};
      const hours = restaurant.hours;
      const hoursArray = [];
      hours.split('--').forEach((hour, i)=>{
        hoursArray.push(<li className="restaurant-hour-list"
                            key={`hourlist${i}`}>
                            {hour}
                        </li>);
      });

      return (
        <div className='restaurant'>
          <div className='restaurant-top-background'>
            <div className='restaurant-top-background-container'>
              <header className="restaurant-top">
                <div className="restaurant-top-left-side">
                  <h1>{restaurant.name}</h1>
                  <div className='restaurant-topleft'>
                    <StarRatingComponent name='starRateStatic'
                                         starCount={5}
                                         value={rating}
                                         starColor={'#e5050b'}
                                         editing={false}
                                         renderStarIcon={()=>
                                           <span className='star-symbol'>
                                             ✪
                                           </span>} />
                  </div>
                  <div className="price-range">{restaurant.price_range}</div>
                </div>

                <div className="restaurant-top-right-side">
                  <div className='restaurant-top-right-side-review'>
                    {this._showReviewButton()}
                  </div>
                </div>
              </header>

              <header className="restaurant-middle">
                <div className="restaurant-middle-map">
                  {
                    restaurant.get_lng_lat ?
                    <Map position={restaurant.get_lng_lat} /> :
                    <div>Map Loading...</div>
                  }
                  <h3>{restaurant.location}</h3>
                  <div>{restaurant.neighborhood}</div>
                  <div>{restaurant.phone_number}</div>
                </div>
                <div className='restaurant-middle-pictures'>
                  <div className='primary'>
                    <img src={`${primary}`}
                         alt='front picture'
                         height="223"
                         width="223"/>
                  </div>

                  <div className='secondary'>
                    <img src={`${secondary}`}
                         alt='front picture'
                         height="262"
                         width="262"/>
                  </div>

                  <div className='tertiary'>
                    <img src={`${tertiary}`}
                         alt='front picture'
                         height="223"
                         width="223"/>
                  </div>
                </div>
              </header>
            </div>
          </div>

          <div className="restaurant-content">
            <content className="restaurant-bottom">
              <div className="restaurant-bottom-reviews">
                <ReviewsContainer restaurant={restaurant}
                                  showForm={this.state.showForm} />
              </div>

              <div className="restaurant-bottom-sidebar">
                <div className='restaurant-bottom-sidebar-hours'>
                  <h1>Hours</h1>
                  <div><ul>{hoursArray}</ul></div>
                </div>

                <div className='restaurant-bottom-sidebar-info'>
                  <h1>More Restaurant Info</h1>
                  <div className='sidebar-info'><div className='sidebar-info-left'>Delivery</div> <div className='sidebar-info-right'>{yesNo[restaurant._delivery]}</div></div>
                  <div className='sidebar-info'><div className='sidebar-info-left'>Take-out</div> <div className='sidebar-info-right'>{yesNo[restaurant._take_out]}</div></div>
                  <div className='sidebar-info'><div className='sidebar-info-left'>Accepts Credit Cards</div> <div className='sidebar-info-right'>{yesNo[restaurant._accepts_credit_card]}</div></div>
                  <div className='sidebar-info'><div className='sidebar-info-left'>Accepts Apple Pay</div> <div className='sidebar-info-right'>{yesNo[restaurant._accepts_apple_pay]}</div></div>
                  <div className='sidebar-info'><div className='sidebar-info-left'>Parking</div> <div className='sidebar-info-right'>{restaurant._parking}</div></div>
                  <div className='sidebar-info'><div className='sidebar-info-left'>Bike Parking</div> <div className='sidebar-info-right'>{yesNo[restaurant._bike_parking]}</div></div>
                  <div className='sidebar-info'><div className='sidebar-info-left'>Wheelchair Accessible</div> <div className='sidebar-info-right'>{yesNo[restaurant._wheelchair_accessible]}</div></div>
                  <div className='sidebar-info'><div className='sidebar-info-left'>Attire</div> <div className='sidebar-info-right'>{restaurant._attire}</div></div>
                  <div className='sidebar-info'><div className='sidebar-info-left'>Ambience</div> <div className='sidebar-info-right'>{restaurant._ambience}</div></div>
                  <div className='sidebar-info'><div className='sidebar-info-left'>Noise Level</div> <div className='sidebar-info-right'>{restaurant._noise_level}</div></div>
                  <div className='sidebar-info'><div className='sidebar-info-left'>Alcohol</div> <div className='sidebar-info-right'>{yesNo[restaurant._alcohol]}</div></div>
                  <div className='sidebar-info'><div className='sidebar-info-left'>Outdoor Seating</div> <div className='sidebar-info-right'>{yesNo[restaurant._outdoor_seating]}</div></div>
                  <div className='sidebar-info'><div className='sidebar-info-left'>Has TV</div> <div className='sidebar-info-right'>{yesNo[restaurant._has_tv]}</div></div>
                  <div className='sidebar-info'><div className='sidebar-info-left'>Waiter Service</div> <div className='sidebar-info-right'>{yesNo[restaurant._waiter_service]}</div></div>
                  <div className='sidebar-info'><div className='sidebar-info-left'>Caters</div> <div className='sidebar-info-right'>{yesNo[restaurant.caters]}</div></div>
                </div>
              </div>
            </content>
          </div>
        </div>
      );
    }
  }
}

export default Restaurant;

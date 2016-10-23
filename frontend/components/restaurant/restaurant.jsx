import React from 'react';
import ReviewsContainer from '../reviews/reviews_container';
import Map from '../map/map.jsx';
import StarRatingComponent from 'react-star-rating-component';

class Restaurant extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      showForm: false,
      scrolling: false,
      photos: []
    };

    this._formSwitch = this._formSwitch.bind(this);
    this._scrollPictures = this._scrollPictures.bind(this);
  }

  componentDidMount(){
    this.props.requestSingleRestaurant(this.props.params.id);
  }

  componentDidUpdate(){
    let photos = this.props.restaurant.photos.split(" ");
    let res = this.props.restaurant;
    if(res && photos.length > this.state.photos.length){
      this.setState({photos: photos});
    }
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

  _scrollPictures(dir){
    if(!this.state.scrolling){
      this.setState({scrolling: true});
      let photos = this.state.photos;
      if(dir === 'left'){
        let newPhotos = photos.slice(1, photos.length + 1);
        newPhotos.push(photos[0]);
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
        }, 500);
      } else {
        let newPhotos = photos.slice(0, photos.length - 1);
        newPhotos.unshift(photos[photos.length - 1]);
        $('.primary').addClass('primary-slider-right');
        $('.secondary').addClass('secondary-slider-right');
        $('.tertiary').addClass('tertiary-slider-right');
        $('._primary').addClass('_primary-slider-right');
        $('._primary').removeClass('z-1');
        setTimeout(()=>{
          $('.primary').removeClass('primary-slider-right');
          $('.secondary').removeClass('secondary-slider-right');
          $('.tertiary').removeClass('tertiary-slider-right');
          $('._primary').removeClass('_primary-slider-right');
          this.setState({
            photos: newPhotos,
            scrolling: false
          });
          $('._primary').addClass('z-1');
        }, 500);
      }
    }
  }

  render() {
    if (this.props.restaurant === undefined){
      return (
        <div className='loader'></div>
      );
    } else {
      const restaurant = this.props.restaurant;
      const rating = restaurant.rating;
      const yesNo = { true: "Yes", false: "No"};
      const hours = restaurant.hours;
      const hoursArray = [];
      const arrowLeft = '<';
      const arrowRight = '>';
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
                                         emptyStarColor={'#acacac'}
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
                    <div className='loader'></div>
                  }
                  <h3>{restaurant.location}</h3>
                  <div>{restaurant.neighborhood}</div>
                  <div>{restaurant.phone_number}</div>
                </div>
                <div className='restaurant-middle-pictures'>
                  <div className='restaurant-middle-scroller-left'
                       onClick={()=>this._scrollPictures('left')}>
                    {arrowLeft}
                  </div>

                  <div className='_primary z-1'>
                    <img src={`${this.state.photos[0]}`}
                         alt='front picture'
                         height="224"
                         width="224"/>
                  </div>

                  <div className='primary'>
                    <img src={`${this.state.photos[1]}`}
                         alt='front picture'
                         height="224"
                         width="224"/>
                  </div>

                  <div className='secondary'>
                    <img src={`${this.state.photos[2]}`}
                         alt='front picture'
                         height="265"
                         width="265"/>
                  </div>

                  <div className='tertiary'>
                    <img src={`${this.state.photos[3]}`}
                         alt='front picture'
                         height="224"
                         width="224"/>
                  </div>

                  <div className='_tertiary z-1'>
                    <img src={`${this.state.photos[4]}`}
                         alt='front picture'
                         height="224"
                         width="224"/>
                  </div>

                  <div className='restaurant-middle-scroller-right'
                       onClick={()=>this._scrollPictures('right')}>
                    {arrowRight}
                  </div>

                  <div className='right-cover-block'></div>
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
                  <div className='sidebar-info'>
                    <div className='sidebar-info-left'>Delivery</div>
                    <div className='sidebar-info-right'>{yesNo[restaurant._delivery]}</div>
                  </div>
                  <div className='sidebar-info'>
                    <div className='sidebar-info-left'>Take-out</div>
                    <div className='sidebar-info-right'>{yesNo[restaurant._take_out]}</div>
                  </div>
                  <div className='sidebar-info'>
                    <div className='sidebar-info-left'>Accepts Credit Cards</div>
                    <div className='sidebar-info-right'>{yesNo[restaurant._accepts_credit_card]}</div>
                  </div>
                  <div className='sidebar-info'>
                    <div className='sidebar-info-left'>Accepts Apple Pay</div>
                    <div className='sidebar-info-right'>{yesNo[restaurant._accepts_apple_pay]}</div>
                  </div>
                  <div className='sidebar-info'>
                    <div className='sidebar-info-left'>Parking</div>
                    <div className='sidebar-info-right'>{restaurant._parking}</div>
                  </div>
                  <div className='sidebar-info'>
                    <div className='sidebar-info-left'>Bike Parking</div>
                    <div className='sidebar-info-right'>{yesNo[restaurant._bike_parking]}</div>
                  </div>
                  <div className='sidebar-info'>
                    <div className='sidebar-info-left'>Wheelchair Accessible</div>
                    <div className='sidebar-info-right'>{yesNo[restaurant._wheelchair_accessible]}</div>
                  </div>
                  <div className='sidebar-info'>
                    <div className='sidebar-info-left'>Attire</div>
                    <div className='sidebar-info-right'>{restaurant._attire}</div>
                  </div>
                  <div className='sidebar-info'>
                    <div className='sidebar-info-left'>Ambience</div>
                    <div className='sidebar-info-right'>{restaurant._ambience}</div>
                  </div>
                  <div className='sidebar-info'>
                    <div className='sidebar-info-left'>Noise Level</div>
                    <div className='sidebar-info-right'>{restaurant._noise_level}</div>
                  </div>
                  <div className='sidebar-info'>
                    <div className='sidebar-info-left'>Alcohol</div>
                    <div className='sidebar-info-right'>{yesNo[restaurant._alcohol]}</div>
                  </div>
                  <div className='sidebar-info'>
                    <div className='sidebar-info-left'>Outdoor Seating</div>
                    <div className='sidebar-info-right'>{yesNo[restaurant._outdoor_seating]}</div>
                  </div>
                  <div className='sidebar-info'>
                    <div className='sidebar-info-left'>Has TV</div>
                    <div className='sidebar-info-right'>{yesNo[restaurant._has_tv]}</div>
                  </div>
                  <div className='sidebar-info'>
                    <div className='sidebar-info-left'>Waiter Service</div>
                    <div className='sidebar-info-right'>{yesNo[restaurant._waiter_service]}</div>
                  </div>
                  <div className='sidebar-info'>
                    <div className='sidebar-info-left'>Caters</div>
                    <div className='sidebar-info-right'>{yesNo[restaurant.caters]}</div>
                  </div>
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

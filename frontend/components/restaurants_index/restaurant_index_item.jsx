import React from 'react';
import { hashHistory } from 'react-router';
import StarRatingComponent from 'react-star-rating-component';

class RestaurantIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.revealComment = this.revealComment.bind(this);
  }

  handleClick() {
    const restaurantID = this.props.restaurant.id;
    hashHistory.push("restaurants/" + restaurantID );
  }

  revealComment(){
    $(`.index-item-description.${this.resClass}`).
    removeClass('index-item-description').
    addClass('index-item-description-show');
  }

  render() {
    const restaurant = this.props.restaurant;
    const photos = restaurant.photos.split(" ");
    const primary = photos[0];
    this.resClass = restaurant.name.split(' ')[0].split("'").join('');

    const rating = restaurant.rating;
    return (
      <div className="restaurant-index-item">
        <div className="index-item-info">

        <div className='index-item-top-half group'>
          <div className='index-item-photo'>
            <img src={`${primary}`}  alt="front photo" onClick={this.handleClick} />
          </div>

          <div className='index-item-primary-attr'>
            <span className="index-item-name" onClick={this.handleClick}>
              {restaurant.name}
            </span>

            <span className="index-item-rating">
              <StarRatingComponent name='starRateStatic'
                                   starCount={5}
                                   value={rating}
                                   starColor={'#e5050b'}
                                   editing={false}
                                   renderStarIcon={()=><span className='star-symbol'>✪</span>}
              />
            </span>

            <span className="price-range">
              {restaurant.price_range}
            </span>
          </div>


          <div className="index-item-secondary-attr">
            <span className="index-item-neighborhood">
              {restaurant.neighborhood}
            </span>
            <br/>
            <br/>
            <span className="index-item-location">
              {restaurant.location}
            </span>
            <br/>
            <span className="index-item-phone-number">
              {restaurant.phone_number}
            </span>
          </div>
        </div>

        <div className="index-item-footer-attr">
          <span className={`index-item-description ${this.resClass}`}
                onClick={this.revealComment}>
            {restaurant.description}
          </span>
        </div>

        </div>
      </div>
    );
  }
}

export default RestaurantIndexItem;

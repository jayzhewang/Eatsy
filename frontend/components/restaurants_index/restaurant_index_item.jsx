import React from 'react';
import { hashHistory } from 'react-router';
import STARS from '../star_ratings';

class RestaurantIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const restaurantID = this.props.restaurant.id;
    hashHistory.push("restaurants/" + restaurantID );
  }

  render() {
    const restaurant = this.props.restaurant;
    const photos = restaurant.photos.split(" ");
    const primary = photos[0];

    const star = <span className={`rating-static ${STARS[restaurant.rating]}`}></span>;
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
              {star}
            </span>

            <span className="index-item-price-range">
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
          <span className="index-item-description">
            {restaurant.description}
          </span>
        </div>

        </div>
      </div>
    );
  }
}

export default RestaurantIndexItem;

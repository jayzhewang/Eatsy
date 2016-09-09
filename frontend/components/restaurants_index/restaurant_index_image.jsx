import React from 'react';
import { hashHistory } from 'react-router';
import StarRatingComponent from 'react-star-rating-component';

class RestaurantIndexImage extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const restaurantID = this.props.restaurant.id;
    hashHistory.push("restaurants/" + restaurantID );
  }

  render() {
    const photo = this.props.primaryPhoto;
    const res = this.props.restaurant;
    const i = this.props.idx;

    return (
      <div key={`div${i}`}>
        <li className='home-restaurants-single-photo' key={`res-${res.id}`}>
          <img src={`${photo}`}
               alt='home-res-img'
               onClick={this.handleClick}
               height='180'
               width='180'
               key={`img-${res.id}`} />
        </li>
      </div>
    );
  }
}

export default RestaurantIndexImage;

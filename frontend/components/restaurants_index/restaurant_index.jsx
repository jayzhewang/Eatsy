import React from 'react';
import RestaurantIndexItem from './restaurant_index_item';

class RestaurantIndex extends React.Component {
  componentDidMount(){
    this.props.requestRestaurants();
  }

  render(){
    const { restaurants } = this.props;
    return (
      <div>
        <div className='home-restaurants-discovery'>
          <div className='home-restaurants-discovery-container'>
            <h1 className='home-restaurants-title'>Discover the best of San Francisco</h1>
          </div>
        </div>
        <div className='home-restaurants-container'>
          <div className='home-restaurants-index-items'>
            {
              restaurants.map( restaurant => (
                <div className='home-restaurants-index-item' key={`restaurant-index-item-${restaurant.id}`}>
                  <div className='home-restaurants-index-item-inner'>
                    <RestaurantIndexItem restaurant={restaurant} />
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    );
  }
}

export default RestaurantIndex;

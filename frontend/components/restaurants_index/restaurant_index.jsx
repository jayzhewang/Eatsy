import React from 'react';
import RestaurantIndexItem from './restaurant_index_item';
import RestaurantIndexImage from './restaurant_index_image';
import MapRestaurants from '../map_restaurants/map_restaurants';

class RestaurantIndex extends React.Component {
  componentDidMount(){
    this.props.requestRestaurants();
  }

  render(){
      const { restaurants } = this.props;
      const resPhotos = restaurants.slice(0, 10).map((res, i) => {
        let primaryPhoto = res.photos.split(" ")[0];
        return (
          <RestaurantIndexImage primaryPhoto={primaryPhoto}
                                restaurant={res}
                                key={`RIP${i}`}
                                idx={i}
          />
        );
      });

      return (
        <div>
          <div className='home-restaurants-discovery'>
            <div className='home-restaurants-discovery-container'>
              <h1 className='home-restaurants-title'>Discover the best of <div>San Francisco</div></h1>
            </div>
          </div>
          <div className='home-restaurants-container'>
            <div className='home-restaurants-index-items-container'>
              <div className='home-restaurants-index-items'>
                {
                  restaurants.map( (restaurant, i) => (
                    <div className='home-restaurants-index-item' key={`restaurant-index-item-${i}`}>
                      <div className='home-restaurants-index-item-inner' key={`restaurant-index-item-inner${i}`}>
                        <RestaurantIndexItem restaurant={restaurant} key={`RII${i}`}/>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>

            <div className='home-restaurants-index-photos group'>
              <MapRestaurants restaurants={this.props.restaurants}/>
              {resPhotos}
            </div>
          </div>
        </div>
      );
    // }
  }
}

export default RestaurantIndex;

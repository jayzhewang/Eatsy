import React from 'react';

import RestaurantIndex from '../restaurants_index/restaurant_index';
import RestaurantMap from '../restaurant_map';
import FilterForm from './filter_form';

const Search = ({restaurants, location, updateFilter}) => (
  <div className='map-pane'>
    <div className='left-half'>
      <RestaurantMap restaurants={restaurants}
                     updateFilter={updateFilter}
                     singleRestaurant={false} />
    </div>

    <div className='right-half'>
        <FilterForm location={location}
                    updateFilter={updateFilter} />
                  <RestaurantIndex restaurants={restaurants} />
    </div>
  </div>
);

export default Search;

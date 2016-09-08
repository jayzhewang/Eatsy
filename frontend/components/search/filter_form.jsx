import React from 'react';

const _handleChange = (filter, updateFilter) => (
  e => updateFilter(filter, e.currentTarget.value)
);
const FilterForm = ({location, updateFilter}) => (
    <div>
      <span className = "fliter">Filter Results:</span>
      <br/>
      <label>Location</label>
      <input type="string"
             value={location}
             onChange={_handleChange('minSeating', updateFilter)} />
    </div>
);
